import { Module } from '@nestjs/common'
import { TokenService } from './token.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Token, TokenSchema } from './schemas/token.schema'
import { User, UserSchema } from 'src/user/schemas/user.schema'
import { JwtModule } from '@nestjs/jwt'

@Module({
  providers: [TokenService],
  exports: [TokenService],
  imports: [
    MongooseModule.forFeature([
      { name: Token.name, schema: TokenSchema },
      { name: User.name, schema: UserSchema },
    ]),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET || 'secret',
      signOptions: {
        expiresIn: '10m',
      },
    }),
  ],
})
export class TokenModule {}
