import express from "express"
import { addQuestion, updateTestFunc,deletePostFunc } from "../controllers/question-controller.js"


const router = express.Router()

router.post('/add-question', addQuestion)
router.post('/update-test', updateTestFunc)
router.post('/delete-test', deletePostFunc)

export default router 