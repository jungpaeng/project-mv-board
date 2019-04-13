import * as express from 'express'
import route from '../constant/route'
import { root, search } from '../controller/videoController'
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout
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

export default rootRouter
