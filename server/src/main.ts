import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'

const start = async () => {
  try {
    const PORT = process.env.PORT || 5001
    const app = await NestFactory.create(AppModule)
    app.enableCors({
      origin: process.env.CLIENT_URL || 'http://localhost:3000',
      credentials: true,
    })
    app.use(cookieParser())
    await app.listen(PORT, () => console.log(`server listen ${PORT} port`))
  } catch (e) {
    console.log(e)
  }
}
start()
