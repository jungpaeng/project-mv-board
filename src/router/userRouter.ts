import * as express from 'express'
import route from '../constant/route'
import { user, userDetail, editProfile, changePassword } from '../controller/userController'

const userRouter = express.Router()

userRouter.get(route.user, user)
userRouter.get(route.userDetail, userDetail)
userRouter.get(route.editProfile, editProfile)
userRouter.get(route.changePassword, changePassword)

export default userRouter
