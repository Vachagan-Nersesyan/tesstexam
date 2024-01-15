"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const question_controller_1 = require("../controllers/question-controller");
const router = express_1.default.Router();
router.post('/add-question', question_controller_1.addQuestion);
// router.get('/get-tests', getQuestion)
exports.default = router;
