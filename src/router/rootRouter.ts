import * as express from 'express'
import route from '../constant/route'
import { root, search } from '../controller/videoController'
import { getJoin, postJoin, login, logout } from '../controller/userController'

const rootRouter = express.Router()

rootRouter.get(route.root, root)
rootRouter.get(route.search, search)
rootRouter.get(route.join, getJoin)
rootRouter.post(route.join, postJoin)
rootRouter.get(route.login, login)
rootRouter.get(route.logout, logout)

export default rootRouter
