//start db cmd: /Users/nazmur21/mongodb/bin/mongod --dbpath=/Users/nazmur21/mongodb-data
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})