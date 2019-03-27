import * as express from 'express'
import * as morgan from 'morgan'
import * as helmet from 'helmet'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'

const app = express()

const handleHome = (req: express.Request, res: express.Response) => {
  res.send('Home')
}

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())
app.use(morgan('dev'))

app.get('/', handleHome)

export default app
