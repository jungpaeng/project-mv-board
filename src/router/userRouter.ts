import * as express from 'express'
import route from '../constant/route'
import { userDetail, editProfile, changePassword } from '../controller/userController'

const userRouter = express.Router()

userRouter.get(route.editProfile, editProfile)
userRouter.get(route.changePassword, changePassword)
userRouter.get(route.userDetail(), userDetail)

export default userRouter
