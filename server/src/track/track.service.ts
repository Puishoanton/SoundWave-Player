import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Track, TrackDocument } from './schemas/track.schema'
import { Model, ObjectId } from 'mongoose'
import { CreateTrackDto } from './dto/create.track.dto'
import { Comment, CommentDocument } from './schemas/comments.schema'
import { CreateCommentDto } from './dto/create.comment.dto'
import { FileService, FileType } from 'src/file/file.service'

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService: FileService
  ) {}

  async postTrack(dto: CreateTrackDto, audio, picture): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
    const picturePath = this.fileService.createFile(FileType.PICTURE, picture)
    const track = await this.trackModel.create({
      ...dto,
      listens: 0,
      audio: audioPath,
      picture: picturePath,
    })
    return track
  }
  async getTracks(count = 10, offset = 0): Promise<Track[]> {
    const tracks = await this.trackModel.find().skip(offset).limit(count)
    return tracks
  }
  async getOneTrack(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id).populate('comments')
    return track
  }
  async deleteTrack(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id)
    return track._id
  }
  async listen(id: ObjectId) {
    const track = await this.trackModel.findById(id)
    track.listens += 1
    await track.save()
  }
  async searchTrack(query: string): Promise<Track[]> {
    const tracks = await this.trackModel.find({
      name: { $regex: new RegExp(query, 'i') },
    })
    return tracks
  }
  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId)
    const comment = await this.commentModel.create({ ...dto })
    track.comments.push(comment._id)
    await track.save()

    return comment
  }
}
