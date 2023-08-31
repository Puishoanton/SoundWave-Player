import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from 'src/user/user.module'
import { User, UserSchema } from '../user/schemas/user.schema'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { jwtConstants } from './strategy/constans'
import { LocalStrategy } from './strategy/local.strategy'
import { PassportModule } from '@nestjs/passport'
import { TokenModule } from 'src/token/token.module'

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '1h',
      },
    }),
    UserModule,
    PassportModule,
    TokenModule,
  ],
})
export class AuthModule {}
