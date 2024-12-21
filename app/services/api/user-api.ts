import { api } from "./api"
import { getGeneralApiProblem } from "./api-problem"
import { OkResult, UserResult } from "./api.types"

export class UserApi {
  async getUser(): Promise<UserResult> {
    try {
      const response: any = await api.apisauce.get("/auth/user/profile")
      // console.log(response)
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return problem
        }
      }

      const user = response.data.data
      return {
        user,
        kind: "ok",
      }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "unauthorized" }
    }
  }


  async getLoad(): Promise<OkResult> {
    try {
      const response: any = await api.apisauce.get("/user/load")
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return problem
        }
      }
      const {data} = response.data
      return {
        data,
        kind: "ok",
      }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "unauthorized" }
    }
  }

  async getLoadById(id : string): Promise<OkResult> {
    try {
      const response: any = await api.apisauce.get(`/user/load/${id}`)
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return problem
        }
      }
      const {data} = response.data
      return {
        data,
        kind: "ok",
      }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "unauthorized" }
    }
  }

  
  async getAllUser(){
    try {
    const response: any = await api.apisauce.get("/auth/user/all")
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return problem
        }
      }

      const data = response.data.data
      return {
        data,
        kind: "ok",
      }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "unauthorized" }
    }
  }

  async setPassword(newPassword: string, oldPassword: string): Promise<UserResult> {
    try {
      const response: any = await api.apisauce.patch("/auth/user/change-password", {
        newPassword,
        oldPassword,
      })
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return problem
        }
      }
      const user = response.data
      return { user, kind: "ok" }
    } catch (error) {
      __DEV__ && console.log(error.message)
      return { kind: "bad-data" }
    }
  }

  async updateProfile(fullname: string, email: string): Promise<OkResult> {
    try {
      const response = await api.apisauce.put("/user/profile", { full_name: fullname, email })
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return problem
        }
      }
      return { kind: "ok" }
    } catch (error) {
      __DEV__ && console.log(error.message)
      return { kind: "bad-data" }
    }
  }

  async addName(name: string): Promise<OkResult> {
    try {
      const response = await api.apisauce.put("/user/add-name", { full_name: name })
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return problem
        }
      }
      return { kind: "ok" }
    } catch (error) {
      __DEV__ && console.log(error.message)
      return { kind: "bad-data" }
    }
  }

  async getSetting(): Promise<OkResult> {
    const response = await api.apisauce.get("/public/setting/list")
    try {
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return { problem, response }
        }
      }
      const {data}: any = response
      return { data , kind: "ok" }
    } catch (e) {
      return { kind: "unauthorized" }
    }
  }
  async trackShipment(shipmentNumber: number): Promise<OkResult> {
    const response = await api.apisauce.post("/user/load/tracking", { shipmentNumber })
    try {
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return { problem, response }
        }
      }
      const {data}: any = response
      return { data , kind: "ok" }
    } catch (e) {
      return { kind: "unauthorized" }
    }
  }

  async submitShipment(originName,originLat, originLng, destName,
    destLat, destLng, weight, dimension, description, proposedFee, truckType): Promise<OkResult> {
    const response = await api.apisauce.post("/user/load/create", { 
      origin: {
        name: originName,
        coordinates: {
          latitude: originLat,
          longitude: originLng
        }
      },
      destination: {
        name: destName,
        coordinates: {
          latitude: destLat,
          longitude: destLng
        }
      },
      weight,
      dimension,
      description,
      proposedFee,
      loadType: "GENERAL GOODS",
      truckType
     })
    try {
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return { problem, response }
        }
      }
      const {data}: any = response
      return {data, kind: "ok" }
    } catch (e) {
      return { kind: "unauthorized" }
    }
  }

  async performKYC(userId: string, idType: string, idNumber: string, country: string): Promise<OkResult> {
    try {
      const response: any = await api.apisauce.post(`/user/${userId}/kyc`, { idType, idNumber, country })
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) {
          return problem
        }
      }
      const { data } = response
      return { data, kind: "ok" }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }

}
