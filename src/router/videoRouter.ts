import * as express from 'express'
import route from '../constant/route'

const videoRouter = express.Router()

videoRouter.get(route.video, (_, res) => res.send(route.video))
videoRouter.get(route.upload, (_, res) => res.send(route.upload))
videoRouter.get(route.videoDetail, (_, res) => res.send(route.videoDetail))
videoRouter.get(route.editVideo, (_, res) => res.send(route.editVideo))
videoRouter.get(route.deleteVideo, (_, res) => res.send(route.deleteVideo))

export default videoRouter
