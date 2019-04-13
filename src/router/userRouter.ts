import * as express from 'express'
import route from '../constant/route'
import {
  userDetail,
  editProfile,
  changePassword
} from '../controller/userController'
import { onlyPrivate } from '../middleware'

const userRouter = express.Router()

userRouter.get(route.editProfile, onlyPrivate, editProfile)
userRouter.get(route.changePassword, onlyPrivate, changePassword)
userRouter.get(route.userDetail(), userDetail)

export default userRouter
