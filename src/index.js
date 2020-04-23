const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     res.status(503).send('site is not available right now')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = () => {
//     const token = jwt.sign({_id: '12334'}, 'thisisnewcourse')
//     console.log(token)

//     const data = jwt.verify(token, 'thisisnewcourse')
//     console.log(data)
// }

// //myFunction()

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    const task = await Task.findById('5e9954388d1a631ad9138368')
    await task.populate('owner').execPopulate()
    console.log(task)
    //console.log(task.owner)

    const user = await User.findById('5e9952e1dc7dca1ac8bea992')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

//main()

