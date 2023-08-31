import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({ type: String, required: true, unique: true, lowercase: true, trim: true })
  email: string
  @Prop({ type: String, required: true })
  password: string
  @Prop({ type: String })
  firstname: string
  @Prop({ type: String })
  lastName: string
  @Prop({ type: String })
  avatar: string
}

export const UserSchema = SchemaFactory.createForClass(User)
