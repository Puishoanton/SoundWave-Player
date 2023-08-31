import { Body, Controller, Post, Request, Res, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Response } from 'express'
import { CreateUserDto } from 'src/user/dto/create.user.dto'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: CreateUserDto, @Res({ passthrough: true }) response: Response) {
    const userData = await this.authService.register(dto)
    response.cookie('token', userData.refreshToken, {
      maxAge: 60 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })
    return userData
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async loginUser(@Request() req, @Res({ passthrough: true }) response: Response) {
    const userData = await this.authService.login(req.user)
    response.cookie('token', userData.refreshToken, {
      maxAge: 60 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })
    return userData
  }
}
