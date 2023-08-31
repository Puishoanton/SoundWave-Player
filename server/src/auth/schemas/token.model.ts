import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type TokenDocument = Token & Document

@Schema()
export class Token {
  @Prop({
    required: true,
  })
  email: string
  @Prop({
    required: true,
  })
  token: string
}

export const TokenSchema = SchemaFactory.createForClass(Token)
