import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'
import { AuthModule } from './auth/auth.module'
import { FileModule } from './file/file.module'
import { TrackModule } from './track/track.module'
import { UserModule } from './user/user.module'
import { TokenModule } from './token/token.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    TrackModule,
    FileModule,
    AuthModule,
    UserModule,
    TokenModule,
  ],
})
export class AppModule {}
