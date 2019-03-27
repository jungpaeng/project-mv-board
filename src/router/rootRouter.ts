import * as express from 'express'
import route from '../constant/route'

const rootRouter = express.Router()

rootRouter.get(route.root, (_, res) => res.send(route.root))
rootRouter.get(route.join, (_, res) => res.send(route.join))
rootRouter.get(route.login, (_, res) => res.send(route.login))
rootRouter.get(route.logout, (_, res) => res.send(route.logout))
rootRouter.get(route.search, (_, res) => res.send(route.search))

export default rootRouter
