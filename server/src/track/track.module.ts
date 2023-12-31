import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { TrackController } from './track.controller'
import { TrackService } from './track.service'
import { Track, TrackSchema } from './schemas/track.schema'
import { Comment, CommentSchema } from './schemas/comments.schema'
import { FileModule } from 'src/file/file.module'

@Module({
  controllers: [TrackController],
  providers: [TrackService],
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    FileModule,
  ],
})
export class TrackModule {}
