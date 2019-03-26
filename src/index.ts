import * as express from 'express'
const app = express()

const PORT = 3000

const handleListening = () => {
  console.log('Listening on port 3000!')
}

app.listen(PORT, handleListening)
