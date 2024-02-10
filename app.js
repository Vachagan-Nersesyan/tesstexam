import express from "express"
import path from "path"



import subjectRouter from './routes/subject-routes.js'
import questionRouter from './routes/question-routes.js'
import teacherRouter from './routes/teacher-router.js'

const app = express()





app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static('./frontend/build'))




app.use(subjectRouter)
app.use(questionRouter)
app.use(teacherRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build', 'index.html'));
});


app.use((req, res) => {
    res.send('Sorry Something goes wrong')
})



app.listen(process.env.PORT || 3000)

