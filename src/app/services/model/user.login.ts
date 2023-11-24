export class UserLogin {
    email: string
    password: string
    accessToken: string
    tokenExpiration: any

    constructor(email: string, password: string, accessToken: string, tokenExpiration: any) {
        this.email = email
        this.password = password
        this.accessToken = accessToken
        this.tokenExpiration = tokenExpiration
    }
}