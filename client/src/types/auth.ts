export type TAuthState = {
  isAuth: boolean
  user: TAuthResponseData
  errors: string
}
export type TAuthResponseData = {
  access_token: string
  email: string
}

export type TCredentials = {
  email: string
  password: string
}
