"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllExams = exports.addQuestion = void 0;
const subjectModel_1 = __importDefault(require("../models/subjectModel"));
const addQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body.info, 'req.body.info')
    // const questionItem = new AddQuestionItem({ ...req.body.info })
    // console.log(questionItem)
    // console.log(questionItem, 'questionItemquestionItemquestionItem')
    // questionItem
    //     .save()
    //     .then((data) => res.send(data))
    //     .catch((error) => {
    //         console.log(error)
    //         res.redirect('/')
    //     })
    console.log(req.body.info.subjjectName, 'req.body.info.subjjectName');
    let dataArr = [];
    yield subjectModel_1.default
        .find({ subjectName: req.body.info.subjjectName })
        .then((data) => {
        console.log(data);
        dataArr = [...data];
        console.log(dataArr);
        dataArr[0].exams.push(req.body.info);
        console.log(dataArr);
    })
        .catch((error) => {
        console.log(error);
    });
    yield subjectModel_1.default
        .updateOne({ subjectName: req.body.info.subjjectName }, { $set: { exams: dataArr[0].exams } })
        .then((data) => {
        console.log(data, 'data');
    })
        .catch((error) => {
        console.log(error);
    });
});
exports.addQuestion = addQuestion;
// export const getQuestion = (req: Request, res: Response) => {
//     AddQuestionItem
//         .find()
//         .then((data) => {
//             res.send(data)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }
const getAllExams = (req, res) => {
    subjectModel_1.default
        .find()
        .then((data) => {
        res.send(data);
    })
        .catch((error) => {
        console.log(error);
    });
};
exports.getAllExams = getAllExams;
