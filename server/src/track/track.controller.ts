import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { FileFieldsInterceptor } from '@nestjs/platform-express'
import { ObjectId } from 'mongoose'
import { CreateCommentDto } from './dto/create.comment.dto'
import { CreateTrackDto } from './dto/create.track.dto'
import { TrackService } from './track.service'
import { AuthGuard } from '@nestjs/passport'

@Controller('tracks')
// @UseGuards(AuthGuard('jwt'))
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'audio', maxCount: 1 },
      { name: 'picture', maxCount: 1 },
    ])
  )
  postTrack(@UploadedFiles() files, @Body() createDto: CreateTrackDto) {
    const { audio, picture } = files
    return this.trackService.postTrack(createDto, audio[0], picture[0])
  }
  @Get('/search')
  searchTrack(@Query('query') query: string) {
    return this.trackService.searchTrack(query)
  }
  @Get()
  getTracks(@Query('count') count: number, @Query('offset') offset: number) {
    return this.trackService.getTracks(count, offset)
  }

  @Get(':id')
  getOneTrack(@Param('id') id: ObjectId) {
    return this.trackService.getOneTrack(id)
  }

  @Delete(':id')
  deleteTrack(@Param('id') id: ObjectId) {
    return this.trackService.deleteTrack(id)
  }

  @Get('/listen/:id')
  listen(@Param('id') id: ObjectId) {
    return this.trackService.listen(id)
  }

  @Post('/comment')
  addComment(@Body() createDto: CreateCommentDto) {
    return this.trackService.addComment(createDto)
  }
}
