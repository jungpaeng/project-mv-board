import * as express from 'express'
import * as multer from 'multer'
import route from './constant/route'

const multerVideo = multer({ dest: 'uploads/videos/' })

export const localsMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.locals.siteName = 'Movie Board'
  res.locals.route = route
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  }
  next()
}

export const uploadVideoMiddleware = multerVideo.single('videoFile')
