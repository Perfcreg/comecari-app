import { loadString } from "../../utils/storage"
import { api } from "./api"
// import { DEFAULT_API_CONFIG } from "./api-config"
import { getGeneralApiProblem } from "./api-problem"
import { DriverResult } from "./api.types"


export class DriverApi {


  async verifyLicence(driverLicenceNumber): Promise<DriverResult> {
    try {

      const response: any = await api.apisauce.post("/driver/user/verify-licence", { driverLicenceNumber })

      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return problem
        }
      }

      const drive = response.data.data
      return {
        drive,
        kind: "ok",
      }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "unauthorized" }
    }
  }

  async uploadLicence(image): Promise<DriverResult> {
    try {
      const formData = new FormData()

      for (let i = 0; i < image.length; i++) {
        formData.append(`picture[${i}]`, {
          uri: image[i].uri,
          name: image[i].filename,
          type: "image/jpg",
        })
      }

      const response: any = await api.apisauce.put("/", { formData })
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return problem
        }
      }
      const drive = response.data?.message
      return { drive, kind: "ok" }
    } catch (error) {
      __DEV__ && console.log(error.message)
      return { kind: "unauthorized" }
    }
  }

  async registerTruck(
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
  ): Promise<DriverResult> {
    try {
      const response: any = await api.apisauce.post("/driver/user/create", {
        user,
        truckType,
        driver,
        company,
        registrationNumber,
        licensePlateNumber,
        capacity: {
          weight,
          height,
          length,
          width,
        },
      })
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return problem
        }
      }

      const drive = response.data.data
      return {
        drive,
        kind: "ok",
      }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "unauthorized" }
    }
  }
}
