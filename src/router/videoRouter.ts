import * as express from 'express'
import route from '../constant/route'
import {
  getUpload,
  postUpload,
  videoDetail,
  editVideo,
  deleteVideo
} from '../controller/videoController'
import { uploadVideoMiddleware } from '../middleware'

const videoRouter = express.Router()

videoRouter.get(route.upload, getUpload)
videoRouter.post(route.upload, uploadVideoMiddleware, postUpload)
videoRouter.get(route.editVideo, editVideo)
videoRouter.get(route.deleteVideo, deleteVideo)
videoRouter.get(route.videoDetail(), videoDetail)

export default videoRouter
