import * as express from 'express'
import route from './constant/route'

export const localsMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.locals.siteName = 'Movie Board'
  res.locals.route = route
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  }
  next()
}
