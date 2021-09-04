import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import './database'

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.listen(3333,  () => console.log('> Server is running on port 3333'))