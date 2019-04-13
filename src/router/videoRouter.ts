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
import { uploadVideoMiddleware, onlyPrivate } from '../middleware'

const videoRouter = express.Router()

// Video Upload
videoRouter.get(route.upload, onlyPrivate, getUpload)
videoRouter.post(route.upload, onlyPrivate, uploadVideoMiddleware, postUpload)

// Video Edit
videoRouter.get(route.editVideo(), onlyPrivate, getEditVideo)
videoRouter.post(route.editVideo(), onlyPrivate, postEditVideo)

// Video Delete
videoRouter.get(route.deleteVideo(), onlyPrivate, deleteVideo)

// Video Detail
videoRouter.get(route.videoDetail(), videoDetail)

export default videoRouter
