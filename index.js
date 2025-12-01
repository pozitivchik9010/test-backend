import express from 'express'
import mongoose from 'mongoose'
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:1234@cluster0.xsmnddu.mongodb.net/?appName=Cluster0'
const app = express()


app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload())
app.use('/api', router)

async function startApp() {
    try {
       await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER START ' + PORT))
        
    } catch (error) {
        console.log(error)
    }  
}
startApp()