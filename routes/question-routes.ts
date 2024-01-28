import express from "express"
import { addQuestion, deletePostFunc, updateTestFunc } from "../controllers/question-controller"

const router = express.Router()

router.post('/add-question', addQuestion)
router.post('/update-test', updateTestFunc)
// router.get('/get-tests', getQuestion)
router.post('/delete-test', deletePostFunc)

export default router 