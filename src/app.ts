import * as express from 'express'
import * as morgan from 'morgan'
import * as helmet from 'helmet'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import route from './constant/route'
import rootRouter from './router/rootRouter'
import userRouter from './router/userRouter'
import videoRouter from './router/videoRouter'
import { localsMiddleware } from './middleware'

const app = express()

app.use(helmet())
app.set('view engine', 'pug')
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(localsMiddleware)

app.use(route.root, rootRouter)
app.use(route.user, userRouter)
app.use(route.video, videoRouter)

export default app
