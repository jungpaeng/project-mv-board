import * as express from 'express'
import route from '../constant/route'

const userRouter = express.Router()

userRouter.get(route.user, (_, res) => res.send(route.user))
userRouter.get(route.userDetail, (_, res) => res.send(route.userDetail))
userRouter.get(route.editProfile, (_, res) => res.send(route.editProfile))
userRouter.get(route.changePassword, (_, res) => res.send(route.changePassword))

export default userRouter
