import { loadString } from "../../utils/storage"
import { api } from "./api"

export class AuthenticationApi {
  // Register a new user
  async register(data: any) {
    const response = await api.apisauce.post("/auth/register", {
      name: data.fullName,
      email: data.email,
      password: data.password,
      phoneNumber: `+234${data.phoneNumber}`,
      username: data.fullName,
      referal: data.refer
    })
    return response
  }

  async verify(data: any) {
    const response = await api.apisauce.post("/auth/verify", {
      email: data.email,
      token: data.token,
    })
    return response
  }

  async resendOTP(data: any) {
    const response = await api.apisauce.post("/auth/resend-confirmation", {
      email: data
    })
    return response
  } 
  
  // Login a user
  async login(data: any) {
    const response = await api.apisauce.post("/auth/login", {
      email: data.email,
      password: data.password,
    })
    return response
  }
  // forgetPassword
  async forgetPassword(data: any) {
    const response = await api.apisauce.post('/auth/forget-password',{
      email: data
      })
    return response
  }
  // forgetPassword
  async checkPassword(data: any) {
    const token = await loadString('authToken')
    await api.apisauce.setHeader("Authorization", `Bearer ${token}`);
    const response = await api.apisauce.post('/auth/check-password', {
      password: data.password
    })
    return response
  }
  // Reset password
  async resetPassword(data: any) {
    const response = await api.apisauce.put("/auth/reset-password", {
      password: data.newPassword,
      confirm_password: data.confirmPassword
    })
    return response
  }

  // Verify phone number
  async verifyPhoneNumber(data: any) {
    const response = await api.apisauce.put("/auth/verify", {
      token: data.otp
    })
    return response
  }


  // Verify phone number
  async verifyReset(data: any) {
    console.log(data)
    const response = await api.apisauce.post("/auth/verify-reset", {
      email: data.email,
      token: data.token
    })
    return response
  }
  // Confirm email
  async confirmEmail(data: any) {
    const response = await api.apisauce.post("/auth/confirm-email", {
      token: data.token,
      email: data.email
    })
    return response
  }

  async logout() {
    const response = await api.apisauce.post(`/auth/logout`)
    return response
  }
}
