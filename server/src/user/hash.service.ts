import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

@Injectable()
export class HashService {
  async hashPassword(password: string) {
    const salt = 5
    return await bcrypt.hash(password, salt)
  }
  async comparePassword(password: string, hashedPassword: string) {
    const isCompare = await bcrypt.compare(password, hashedPassword)
    if (!isCompare) {
      throw new UnauthorizedException('Invalid credentials')
    }
    return isCompare
  }
}
