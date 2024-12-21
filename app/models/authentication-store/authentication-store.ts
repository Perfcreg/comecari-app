import { flow } from "mobx"
// flowResult
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { withStatus } from "../extensions/with-status"
import { AuthenticationApi } from "app/services/api/authentication-api"
import { api as configApi } from "../../services/api"


const api = new AuthenticationApi()
export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    isAuthenticated: types.optional(types.boolean, false),
    error: types.optional(types.string, ""),
    isRegister: types.optional(types.boolean, false),
    isVerified: types.optional(types.boolean, false),
    user: types.optional(types.frozen(), {}),
    response: types.optional(types.frozen(), {}),
    authToken: types.maybe(types.string),
    refreshToken: types.maybe(types.string),
  })
  .extend(withEnvironment)
  .extend(withStatus)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setAuthenticated(value: boolean) {
      self.isAuthenticated = value
    },
  }))
  .actions((self) => ({
    setRegister(value: boolean) {
      self.isRegister = value
    },
  }))

  .actions((self) => ({
    setResponse(value: any) {
      self.response = value
    },
  }))

  .actions((self) => ({
    setVerified(value: boolean) {
      self.isVerified = value
    },
  }))

  .actions((self) => ({
    setUser(value: any) {
      self.user = value
    },
  }))

  .actions((self) => ({
    setError(value: any) {
      self.error = value
    },
  }))

  .actions((self) => ({
    setAuthToken(token: string) {
      self.authToken = token
    },
    distributedAuthToken(value?: string) {
      const token = value || self.authToken
      configApi.apisauce.setHeader("Authorization", `Bearer ${token}`)
    },

    setRefreshToken(value?: string){
      self.refreshToken = value
    }
  }))

  .actions((self) => ({
    register: flow(function* (data) {
      self.setStatus("loading")
      self.setAuthenticated(true)
      const response = yield api.register(data)
      if (response.status === 201) {
        self.setStatus("success")
      } else {
        self.setError(response.data.message)
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),

    verify: flow(function* (data) {
      self.setStatus("loading")
      const response = yield api.verify(data)
      if (response.status === 200) {
        self.setStatus("success")
      } else {
        self.setError(response.data.message)
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),


    resendOTP: flow(function* (data) {
      console.log(data)
      self.setStatus("loading")
      const response = yield api.resendOTP(data)
      if (response.kind === 200) {
        self.setStatus("success")
      } else {
        self.setStatus("error")
        self.setError(response.data.message)
        __DEV__ && console.log(response)
      }
    }),

    login: flow(function* (data) {
      self.setStatus("loading")
      const response = yield api.login(data)
      console.log(response.data)
      if (response.status == 200) {
        self.setAuthToken(response.data.AccessToken)
        self.setRefreshToken(response.data.RefreshToken)
        self.distributedAuthToken(response.data.IdTOken)
        console.log('Na me Work')
        self.setAuthenticated(true)
        self.setStatus("success")

      } else {
        self.setError(response.data.message)
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),

    // forgetPassword
    forgetPassword: flow(function* (data) {
      self.setStatus("loading")
      const response = yield api.forgetPassword(data)
      if (response.status === 200) {
        self.setStatus("success")
      } else {
        self.setError(response.data.message)
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),

    verifyReset: flow(function* (data) {
      self.setStatus("loading")
      const response = yield api.verifyReset(data)
      // console.log(response)
      if (response.status === 200) {
        self.setStatus("success")
      } else {
        self.setError(response.data.message)
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),

    logout: flow(function* () {
      self.setStatus("loading")
      self.setAuthenticated(false)
      self.setAuthToken("")
      self.distributedAuthToken("")
      self.setStatus("success")
    }),
  }))

type AuthenticationStoreType = Instance<typeof AuthenticationStoreModel>
export interface AuthenticationStore extends AuthenticationStoreType { }
type AuthenticationStoreSnapshotType = SnapshotOut<typeof AuthenticationStoreModel>
export interface AuthenticationStoreSnapshot extends AuthenticationStoreSnapshotType { }
export const createAuthenticationStoreDefaultModel = () =>
  types.optional(AuthenticationStoreModel, {})
