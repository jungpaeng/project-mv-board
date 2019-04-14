import * as express from 'express'
import route from '../constant/route'
import {
  userDetail,
  getEditProfile,
  postEditProfile,
  getChangePassword,
  postChangePassword
} from '../controller/userController'
import { onlyPrivate, uploadAvatarMiddleware } from '../middleware'

const userRouter = express.Router()

userRouter.get(route.editProfile, onlyPrivate, getEditProfile)
userRouter.post(route.editProfile, onlyPrivate, uploadAvatarMiddleware, postEditProfile)

userRouter.get(route.changePassword, onlyPrivate, getChangePassword)
userRouter.post(route.changePassword, onlyPrivate, postChangePassword)
userRouter.get(route.userDetail(), userDetail)

export default userRouter
