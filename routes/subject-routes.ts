import express from "express"
import { addSubject } from "../controllers/subject-controller"
import { getAllExams } from "../controllers/question-controller"

const router = express.Router()

router.post('/add-subject', addSubject)
router.get('/get-subject', getAllExams)

export default router 