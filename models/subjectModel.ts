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
    }

})



const SubjectItem = mongoose.model('allexams', subjectSchema)


export default SubjectItem

