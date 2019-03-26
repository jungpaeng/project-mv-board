import * as express from 'express'
const app = express()

const PORT = 3000

const handleListening = () => {
  console.log('Listening on port 3000!')
}

const handleHome = (req: express.Request, res: express.Response) => {
  res.send('Home')
}

app.get('/', handleHome)

app.listen(PORT, handleListening)
