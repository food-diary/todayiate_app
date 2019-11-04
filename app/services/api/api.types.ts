import { GeneralApiProblem } from "./api-problem"

export interface User {
  id: number
  name: string
}

export interface Picture {
  id: string
  userId: string
  username: string
  bucket: string
  region: string
  key: string
  uri: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem
export type GetPictureResult = { kind: "ok"; picture: Picture }
export type GetPicturesResult = { kind: "ok"; pictures: Picture[]; nextToken: string }
