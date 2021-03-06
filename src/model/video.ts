import * as mongoose from 'mongoose'

interface IVideoComment {
  type: mongoose.Types.ObjectId
  ref: 'Comment'
}

interface IVideoCreator {
  type: mongoose.Types.ObjectId
  ref: 'Comment'
}

export interface IVideoModel extends mongoose.Document {
  fileUrl: string
  title: string
  description: string
  createdAt: Date
  comment: IVideoComment[]
  creator: IVideoCreator
}

const VideoSchema: mongoose.Schema<{ title: string }> = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: 'File URL is Required'
  },
  title: {
    type: String,
    required: 'Title is Required'
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const model: mongoose.Model<IVideoModel> = mongoose.model('Video', VideoSchema)

export default model
