import * as express from 'express'

const rootRouter = express.Router()

rootRouter.get('/', (req, res) => res.send('Index'))

export default rootRouter
