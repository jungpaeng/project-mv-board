import * as express from 'express'
import route from '../constant/route'
import { video, upload, videoDetail, editVideo, deleteVideo } from '../controller/videoController'

const videoRouter = express.Router()

videoRouter.get(route.upload, upload)
videoRouter.get(route.editVideo, editVideo)
videoRouter.get(route.deleteVideo, deleteVideo)
videoRouter.get(route.videoDetail, videoDetail)

export default videoRouter
