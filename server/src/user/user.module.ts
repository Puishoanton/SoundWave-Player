import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { MongooseModule } from '@nestjs/mongoose'
import { jwtConstants } from 'src/auth/strategy/constans'
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy'
import { User } from 'src/user/schemas/user.schema'
import { HashService } from './hash.service'
import { UserSchema } from './schemas/user.schema'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { TokenModule } from 'src/token/token.module'

@Module({
  providers: [UserService, HashService, JwtStrategy],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '1h',
      },
    }),
    TokenModule,
  ],
  exports: [UserService, HashService],
  controllers: [UserController],
})
export class UserModule {}
