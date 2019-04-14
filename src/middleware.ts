import express from 'express'
import multer from 'multer'
import path from 'path'
import route from './constant/route'

const customStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/videos/')
  },
  filename: (req, file, cb) => {
    const { originalname } = file
    const extension = path.extname(originalname)
    const basename = path.basename(originalname, extension)

    cb(null, `${basename}-${Date.now()}${extension}`)
  }
})
const multerVideo = multer({ storage: customStorage })

export const localsMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.locals.siteName = 'Movie Board'
  res.locals.route = route
  res.locals.loggedUser = req.user || null
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
