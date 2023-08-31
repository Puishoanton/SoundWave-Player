export class ResponseUserDto {
  email
  id
  constructor(user) {
    this.email = user.email
    this.id = user.id
  }
}
