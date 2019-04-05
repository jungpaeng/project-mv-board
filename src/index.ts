import app from './app'
import * as dotenv from 'dotenv'
import './db'
import './model/video'
import './model/comment'

dotenv.config()

const PORT = process.env.PORT || 3000

const handleListening = () => console.log(`Listening on port ${PORT}!`)

app.listen(PORT, handleListening)
