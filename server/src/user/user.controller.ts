import { Body, Controller, Get, Param, Post, Res, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create.user.dto'
import { AuthGuard } from '@nestjs/passport'
import { Response } from 'express'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  getAll() {}
  getOne() {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':email')
  getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email)
  }
}
