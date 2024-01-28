import mongoose from "mongoose"

const Schema = mongoose.Schema

const endExamSchema = new Schema({
    id: {
        type: String,
        required: false
    },
    nameFirst: {
        type: String,
        required: false
    },
    nameSecond: {
        type: String,
        required: false
    },
    nameThird: {
        type: String,
        required: false
    },
    classNumber: {
        type: String,
        required: false
    },
    testNumber: {
        type: Number,
        required: false
    },
    isWriten: {
        type: Boolean,
        required: false
    },
    answersArr: {
        type: Array,
        required: false
    },

})


const ExamEndItem = mongoose.model('answers', endExamSchema)


export default ExamEndItem