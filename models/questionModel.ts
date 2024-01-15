import mongoose from "mongoose"

const Schema = mongoose.Schema

const addQuestionSchema = new Schema({
    info: {
        type: Array,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    subjjectName: {
        type: String,
        required: false
    }

})



const AddQuestionItem = mongoose.model('allexams', addQuestionSchema)


export default AddQuestionItem

