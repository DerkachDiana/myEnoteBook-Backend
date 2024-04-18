require('dotenv').config()

const express = require('express')

const sequelize = require('./db')
const models = require('./models/models');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

async function syncModels() {
    await sequelize.sync({ alter: true });
}

syncModels();

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use('/api', router)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Good' })
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log('Server connection error: ', e)
    }
}

start()
