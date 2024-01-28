import express from "express"
import { checkPasswordValidFunc, getTeacherInfo, logOutFunc } from "../controllers/teacher-controller"
const router = express.Router()

router.get('/get-teacher-info', getTeacherInfo)
router.post('/password-valid', checkPasswordValidFunc)
router.post('/log-out',logOutFunc)

export default router 