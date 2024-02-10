import express from "express"
import { getTeacherInfo, checkPasswordValidFunc, logOutFunc, getInstituteInfoFunc } from "../controllers/teacher-controller.js"


const router = express.Router()

router.get('/get-teacher-info', getTeacherInfo)
router.post('/password-valid', checkPasswordValidFunc)
router.post('/log-out', logOutFunc)
router.get('/get-institute-info', getInstituteInfoFunc)

export default router

