import * as express from 'express'
import route from '../constant/route'
import {
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
} from '../controller/videoController'
import { uploadVideoMiddleware } from '../middleware'

const videoRouter = express.Router()

// Video Upload
videoRouter.get(route.upload, getUpload)
videoRouter.post(route.upload, uploadVideoMiddleware, postUpload)

// Video Edit
videoRouter.get(route.editVideo(), getEditVideo)
videoRouter.post(route.editVideo(), postEditVideo)

// Video Delete
videoRouter.get(route.deleteVideo, deleteVideo)

// Video Detail
videoRouter.get(route.videoDetail(), videoDetail)

export default videoRouter
