import { GeneralApiProblem } from "./api-problem"
// import { Character } from "../../models/character/character"

export interface User {
  id: number
  name: string
}

export interface Driver {
  id: number
  name: string
}

export interface Response {
  message: string
}

export interface Card {
  id: number
  name: string
  picture: string
}
export interface Pm {
  id: number
  country: string
  buy_rate: string
  sell_rate: string
}
// export interface verifyPmAdress {
//   message: string
//   status: string
// }

// export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem

export type GetPmAddress = { kind: "ok"; data: any } | GeneralApiProblem
// export type GetCharacterResult = { kind: "ok"; character: Character } | GeneralApiProblem

export type RegisterResult = { kind: "ok" } | GeneralApiProblem
export type VerifyResult = { kind: "ok" } | GeneralApiProblem

// export type OkResult = { kind: "ok" } | GeneralApiProblem
export type LogoutResult = { kind: "ok" } | GeneralApiProblem
export type UserResult = { user: User; kind: "ok" } | GeneralApiProblem
export type DriverResult = { drive: Driver; kind: "ok" } | GeneralApiProblem
export type OkResult = { kind: "ok" } | any
export type AuthResult = { res: Response; kind: "ok" } | any
export type CardResult = { kind: "ok"; card: any } | GeneralApiProblem
export type PmResult = { kind: "ok"; data: Pm } | GeneralApiProblem
