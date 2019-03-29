import * as express from 'express'
import route from '../constant/route'
import { root, search } from '../controller/videoController'
import { join, login, logout } from '../controller/userController'

const rootRouter = express.Router()

rootRouter.get(route.root, root)
rootRouter.get(route.search, search)
rootRouter.get(route.join, join)
rootRouter.get(route.login, login)
rootRouter.get(route.logout, logout)

export default rootRouter
