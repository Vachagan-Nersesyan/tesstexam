"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teacher_controller_1 = require("../controllers/teacher-controller");
const router = express_1.default.Router();
router.get('/get-teacher-info', teacher_controller_1.getTeacherInfo);
router.post('/password-valid', teacher_controller_1.checkPasswordValidFunc);
router.post('/log-out', teacher_controller_1.logOutFunc);
exports.default = router;
