import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { DriverApi } from "../../services/api/driver-api"
import { withStatus } from "../extensions/with-status"
import { flow } from "mobx"
import { AuthenticationStoreModel } from "../authentication-store/authentication-store"

export const DriverStoreModel = types
  .model("DriverStore")
  .props({
    driver: types.optional(types.frozen(), {}),
   authorization: types.maybe(AuthenticationStoreModel),
    mode: types.optional(types.string, "dark"),
  })
  .extend(withEnvironment)
  .extend(withStatus)
  .views(() => ({}))
  .actions((self) => ({
    setUser(value: any) {
      self.driver = value
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setMode(value: any) {
      self.mode = value
    },
  }))
  .actions((self) => ({
    verifyLicense: flow(function* (driverLicenceNumber) {
      self.setStatus("loading")

      const request = new DriverApi()

      const response = yield request.verifyLicence(driverLicenceNumber)

      if (response.kind === "ok") {
        self.setStatus("success")
        self.setUser(response)
      } else {
        self.setStatus("error")
        __DEV__ && console.tron.log(response)
      }
    }),

    uploadLicense: flow(function* (image) {
      self.setStatus("loading")
      const request = new DriverApi()
      const response = yield request.uploadLicence(image)

      if (response.kind === "ok") {
        self.setStatus("success")
        self.setUser(response)
      } else {
        self.setStatus("error")
        __DEV__ && console.tron.log(response)
      }
    }),

    registerTruck: flow(function* (
      user,
      truckType,
      driver,
      company,
      registrationNumber,
      licensePlateNumber,
      weight,
      height,
      length,
      width,
    ) {
      const request = new DriverApi()
      const response = yield request.registerTruck(
        user,
        truckType,
        driver,
        company,
        registrationNumber,
        licensePlateNumber,
        weight,
        height,
        length,
        width,
      )
      if (response.kind === "ok") {
        self.setStatus("success")
        self.setUser(response)
      } else {
        self.setStatus("error")
        __DEV__ && console.tron.log(response)
      }
    }),
  }))

type DriverStoreType = Instance<typeof DriverStoreModel>
export interface DriverStore extends DriverStoreType {}
type DriverStoreSnapshotType = SnapshotOut<typeof DriverStoreModel>
export interface DriverStoreSnapshot extends DriverStoreSnapshotType {}
export const createDriverStoreDefaultModel = () => types.optional(DriverStoreModel, {})
