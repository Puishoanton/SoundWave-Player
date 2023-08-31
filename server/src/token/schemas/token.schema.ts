import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Types } from 'mongoose'
import { User } from 'src/user/schemas/user.schema'

export type TokenDocument = Token & Document

@Schema()
export class Token {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId: Types.ObjectId

  @Prop({ type: String, required: true })
  refreshToken: string
}

export const TokenSchema = SchemaFactory.createForClass(Token)
