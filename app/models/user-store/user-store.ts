/* eslint-disable camelcase */
// import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { UserApi } from "../../services/api/user-api"
import { withStatus } from "../extensions/with-status"
import { flow } from "mobx"
import { AuthenticationStoreModel } from "../authentication-store/authentication-store"
// import { AUTHENTICATION_TYPE } from "react-native-keychain"
/**
 * Model description here for TypeScript hints.
 */

export const UserStoreModel = types
  .model("UserStore")
  .props({
    user: types.optional(types.frozen(), { username: "" }),
    data: types.optional(types.frozen(), {}),
    users: types.optional(types.frozen(), {}),
    authorization: types.maybe(AuthenticationStoreModel),
    load: types.optional(types.frozen(), {}),
    tracking: types.optional(types.frozen(), {}),
    mode: types.optional(types.string, 'dark')
  })
  .extend(withEnvironment)
  .extend(withStatus)
  .views((self) => ({
    get username() {
      return self.user.username || ""
    },
  }))
  .actions((self) => ({
    setUser(value: any) {
      self.user = value
    },
    setUsername(value: string) {
      self.user = { ...self.user, username: value }
    },
  }))
  .actions((self) => ({
    updateUsername(value: string) {
      self.setUsername(value)
    },
  }))

  .actions((self) => ({
    setMode(value: any) {
      self.mode = value
    },
  }))

  .actions((self) => ({
    setLoad(value: any) {
      self.load = value
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

  .actions((self) => ({
    setData(value: any) {
      self.data = value
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars


  .actions((self) => ({
    setUsers(value: any) {
      self.users = value
    },
  }))

  .actions((self) => ({
    setTracking(value: any) {
      self.tracking = value
    },
  }))

  .actions((self) => ({
    getUser: flow(function* () {
      self.setStatus("loading")
      const request = new UserApi()
      const response = yield request.getUser()
      if (response.kind === "ok") {
        self.setStatus("success")
        self.setUser(response.user)
      } else {
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),

    getAllUser: flow(function* () {
      self.setStatus("loading")
      const request = new UserApi()
      const response = yield request.getAllUser()
      if (response.kind === "ok") {
        self.setStatus("success")
        self.setUsers(response.data)
      } else {
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),

    trackShipment: flow(function* (shipmentNumber: number) {
      self.setStatus("loading")
      const request = new UserApi()
      const response = yield request.trackShipment(shipmentNumber)
      console.log(response)
      if (response.kind === "ok") {
        self.setStatus("success")
        self.setTracking(response.data)
      } else {
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),

    submitShipment: flow(function* (
      originName, originLat, originLng, destName,
      destLat, destLng, weight, dimension, description, proposedFee, truckType
    ) {
      self.setStatus("loading")
      const request = new UserApi()
      const response = yield request.submitShipment(originName, originLat, originLng, destName,
        destLat, destLng, weight, dimension, description, proposedFee, truckType)
      if (response.kind === "ok") {
        self.setStatus("success")

      } else {
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),

    getLoad: flow(function* () {
      self.setStatus("loading")
      const request = new UserApi()
      const response = yield request.getLoad()
      if (response.kind === "ok") {
        self.setStatus("success")
        self.setLoad(response.data)
      } else {
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),

    getLoadById: flow(function* (id: string) {
      self.setStatus("loading")
      self.setData({})
      const request = new UserApi()
      const response = yield request.getLoadById(id)
      if (response.kind === "ok") {
        self.setStatus("success")
        self.setData(response.data)
      } else {
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),

    resetPassword: flow(function* (newPassword: string, oldPassword: string) {
      self.setStatus("loading")
      const request = new UserApi()
      const response = yield request.setPassword(newPassword, oldPassword)
      if (response.kind === "ok") {
        self.setStatus("success")
        self.setUser(response)
      } else {
        self.setUser(response)
        __DEV__ && console.log(response)
      }
    }),

    updateProfile: flow(function* (email, fullname) {
      self.setStatus("loading")
      const request = new UserApi()
      const response = yield request.updateProfile(email, fullname)
      if (response.kind === "ok") {
        self.setStatus("success")
        self.setUser(response.user)
      } else {
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),

    addName: flow(function* (name: string) {
      self.setStatus("loading")
      const request = new UserApi()
      const response = yield request.addName(name)
      if (response.kind === "ok") {
        self.setStatus("success")
        self.setUser(response.user)
      } else {
        self.setStatus("error")
        __DEV__ && console.log(response)
      }
    }),

    changeTheme: flow(function* () {
      if (self.mode === 'dark') {
        self.setMode('light')
      } else {
        self.setMode('dark')
      }
    }),


  }))
type UserStoreType = Instance<typeof UserStoreModel>
export interface UserStore extends UserStoreType { }
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export interface UserStoreSnapshot extends UserStoreSnapshotType { }
export const createUserStoreDefaultModel = () => types.optional(UserStoreModel, {})
