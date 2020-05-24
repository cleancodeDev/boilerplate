//시작 //


const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://DDun:ddunnim@boilerplate-lvyar.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log('MongoDb Connected....'))
.catch(err => console.log(err))





app.get('/', (req,res) => res.send('hello'))
app.listen(port, () => console.log(`port ${port}`))