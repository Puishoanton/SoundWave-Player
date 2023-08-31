import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from './../auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' })
  }
  async validate(username: string, password: string) {
    try {
      return await this.authService.vaidateUser({ email: username, password: password })
    } catch (e) {
      throw new InternalServerErrorException(e.message)
    }
  }
}
