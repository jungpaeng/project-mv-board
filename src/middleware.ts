import express from 'express'
import multer from 'multer'
import route from './constant/route'

const multerVideo = multer({ dest: 'uploads/videos/' })

export const localsMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.locals.siteName = 'Movie Board'
  res.locals.route = route
  res.locals.user = req.user || {}
  next()
}

export const uploadVideoMiddleware = multerVideo.single('videoFile')
