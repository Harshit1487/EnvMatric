const express =require('express')
const apiRoutes =require('./routes/apiRoutes.js') 
const dotenv =require('dotenv') 
const dbConnect = require('./middlewares/db.js')
//Initialising dotenv
dotenv.config()

//Initialising Express
const app = express()
app.use(express.json())

//db
dbConnect();
//Basic Routes
app.use('/api', apiRoutes)


const PORT = process.env.PORT
app.listen(PORT || 5000, () => console.log('Server Running'))
