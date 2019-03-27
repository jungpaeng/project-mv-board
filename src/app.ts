import * as express from 'express'
import * as morgan from 'morgan'
import * as helmet from 'helmet'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import route from './constant/route'
import rootRouter from './router/rootRouter'

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())
app.use(morgan('dev'))

app.use(route.root, rootRouter)

export default app
