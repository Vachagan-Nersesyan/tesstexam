import mongoose from "mongoose"

const Schema = mongoose.Schema

const subjectSchema = new Schema({

    subjectName: {
        type: String,
        required: true
    },
    exams: {
        type: Array,
        required: true
    },
    textInfo: {
        type: Object,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: false
    },
    teacherName: {
        type: String,
        required: false
    },

})



const SubjectItem = mongoose.model('allexams', subjectSchema)


export default SubjectItem

