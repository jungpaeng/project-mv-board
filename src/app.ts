import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import session from 'express-session'
import mongoose from 'mongoose'
import MongoStore from 'connect-mongo'
import * as bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import route from './constant/route'
import rootRouter from './router/rootRouter'
import userRouter from './router/userRouter'
import videoRouter from './router/videoRouter'
import { localsMiddleware } from './middleware'
import '../passport'

const app = express()
const CookieStore = MongoStore(session)

dotenv.config()

app.use(helmet())
app.set('view engine', 'pug')
app.use('/uploads', express.static('uploads'))
app.use('/static', express.static('static'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(session({
  secret: process.env.COOKIE_SECRET as string,
  resave: true,
  saveUninitialized: false,
  store: new CookieStore({
    mongooseConnection: mongoose.connection
  })
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(localsMiddleware)

app.use(route.root, rootRouter)
app.use(route.user, userRouter)
app.use(route.video, videoRouter)

export default app
