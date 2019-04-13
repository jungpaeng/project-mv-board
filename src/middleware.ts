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
  res.locals.user = req.user || null
  next()
}

export const onlyPublic = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.user) {
    res.redirect(route.root)
  } else {
    next()
  }
}

export const onlyPrivate = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.user) {
    next()
  } else {
    res.redirect(route.root)
  }
}

export const uploadVideoMiddleware = multerVideo.single('videoFile')
