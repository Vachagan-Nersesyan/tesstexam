import express from "express"
import { addSubject, changePicFunc, endExamFunc } from "../controllers/subject-controller.js"
import { getAllExams } from "../controllers/question-controller.js"

const router = express.Router()

router.post('/add-subject', addSubject)
router.get('/get-subject', getAllExams)
router.post('/change-picture', changePicFunc)
router.post('/send-completed-exam-info', endExamFunc)

export default router 