import * as dotenv from 'dotenv'
import app from './app'
import './db'
import './model/video'
import './model/comment'
import './model/user'

dotenv.config()

const PORT = process.env.PORT || 3000

const handleListening = () => console.log(`Listening on port ${PORT}!`)

app.listen(PORT, handleListening)
