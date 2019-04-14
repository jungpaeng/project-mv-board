import * as express from 'express'
import passport from 'passport'
import route from '../constant/route'
import { root, search } from '../controller/videoController'
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  githubLogin,
  postGithubLogin,
  userMe
} from '../controller/userController'
import { onlyPublic, onlyPrivate } from '../middleware'

const rootRouter = express.Router()

rootRouter.get(route.join, onlyPublic, getJoin)
rootRouter.post(route.join, onlyPublic, postJoin, postLogin)

rootRouter.get(route.login, onlyPublic, getLogin)
rootRouter.post(route.login, onlyPublic, postLogin)

rootRouter.get(route.root, root)
rootRouter.get(route.search, search)
rootRouter.get(route.logout, onlyPrivate, logout)

rootRouter.get(route.github, githubLogin)
rootRouter.get(
  route.githubCallback,
  passport.authenticate('github', {
    failureRedirect: route.login
  }),
  postGithubLogin
)

rootRouter.get(route.me, userMe)

export default rootRouter
