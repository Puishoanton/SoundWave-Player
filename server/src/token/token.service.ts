import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ResponseUserDto } from 'src/user/dto/response.user.dto'
import { CreateTokenDto } from './dto/create.token.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Token, TokenDocument } from './schemas/token.schema'
import { Model } from 'mongoose'

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name) private tokenRepo: Model<TokenDocument>,
    private jwtService: JwtService
  ) {}

  async generateTokens(user: ResponseUserDto) {
    const payload = {
      email: user.email,
      id: user.id,
    }

    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: '10m',
    })
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '60d',
    })
    return {
      accessToken,
      refreshToken,
    }
  }
  async saveTokens(tokenDto: CreateTokenDto) {
    const tokenData = await this.tokenRepo.findOne({ refreshToken: tokenDto.refreshToken })
    if (tokenData) {
      tokenData.refreshToken = tokenDto.refreshToken
      return tokenData.save()
    }
    const createdTokenData = await this.tokenRepo.create({
      userId: tokenDto.userId,
      refreshToken: tokenDto.refreshToken,
    })
    return createdTokenData
  }
}
