import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { TokenService } from 'src/token/token.service'
import { HashService } from 'src/user/hash.service'
import { User } from 'src/user/schemas/user.schema'
import { UserService } from 'src/user/user.service'
import { CreateUserDto } from '../user/dto/create.user.dto'

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private hashService: HashService) {}

  async vaidateUser(dto: CreateUserDto) {
    try {
      const user = await this.userService.getUserByEmail(dto.email)
      if (!user) {
        throw new UnauthorizedException('Invalid credentials')
      }
      await this.hashService.comparePassword(dto.password, user.password)

      return user
    } catch (e) {
      throw new InternalServerErrorException(e.message)
    }
  }

  async login(user: User) {
    return this.userService.getUserDataResponse(user)
  }
  async register(dto: CreateUserDto) {
    return this.userService.createUser(dto)
  }
}
