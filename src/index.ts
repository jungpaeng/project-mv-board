import app from './app'
import * as dotenv from 'dotenv'
import './db'

dotenv.config()

const PORT = process.env.PORT || 3000

const handleListening = () => console.log(`Listening on port ${PORT}!`)

app.listen(PORT, handleListening)
