"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subject_controller_1 = require("../controllers/subject-controller");
const question_controller_1 = require("../controllers/question-controller");
const router = express_1.default.Router();
router.post('/add-subject', subject_controller_1.addSubject);
router.get('/get-subject', question_controller_1.getAllExams);
exports.default = router;
