import express from "express"
import { addQuestion } from "../controllers/question-controller"

const router = express.Router()

router.post('/add-question', addQuestion)
// router.get('/get-tests', getQuestion)


export default router 