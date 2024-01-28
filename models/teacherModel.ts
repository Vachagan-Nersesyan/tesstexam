import mongoose from "mongoose"

const Schema = mongoose.Schema

const teacherSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAuth: {
        type: Boolean,
        required: true
    },



})



const TeacherItem = mongoose.model('teachers', teacherSchema)


export default TeacherItem

