import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from 'src/user/schemas/user.schema'
import { CreateUserDto } from './dto/create.user.dto'
import { HashService } from './hash.service'
import { ResponseUserDto } from './dto/response.user.dto'
import { TokenService } from 'src/token/token.service'
import { CreateTokenDto } from 'src/token/dto/create.token.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userRepo: Model<UserDocument>,
    private hashService: HashService,
    private tokenService: TokenService
  ) {}

  async getUserByEmail(email: string): Promise<User | undefined> {
    return await this.userRepo.findOne({ email })
  }

  async createUser(dto: CreateUserDto) {
    try {
      const user = await this.getUserByEmail(dto.email)
      if (user) {
        throw new BadRequestException('User with this email already exists.')
      }
      const hashedPassword = await this.hashService.hashPassword(dto.password)
      const candidate = await this.userRepo.create({ ...dto, password: hashedPassword })
      return await this.getUserDataResponse(candidate)
    } catch (e) {
      throw new InternalServerErrorException(e.message)
    }
  }

  async getUserDataResponse(user: User) {
    const responseDto = new ResponseUserDto(user)
    const tokens = await this.tokenService.generateTokens({ ...responseDto })
    const tokenDto: CreateTokenDto = {
      userId: responseDto.id,
      refreshToken: tokens.refreshToken,
    }
    await this.tokenService.saveTokens(tokenDto)

    return {
      ...tokens,
      user: responseDto,
    }
  }
}
