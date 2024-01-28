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
exports.deletePostFunc = exports.updateTestFunc = exports.getAllExams = exports.addQuestion = void 0;
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
    console.log(req.body.info, 'req.body.info.subjjectName');
    let dataArr = [];
    yield subjectModel_1.default
        .find({ subjectName: req.body.info.subjjectName })
        .then((data) => {
        console.log(data);
        dataArr = [...data];
        console.log(dataArr);
        dataArr[0].textInfo = req.body.info.textInfo;
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
const updateTestFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let dataArr = [];
    let currentExam = {};
    yield subjectModel_1.default
        .find({ subjectName: req.body.info.subjjectName })
        .then((data) => {
        dataArr = [...data];
    })
        .catch((error) => {
        console.log(error);
    });
    console.log(req.body.info, 'req.body.info');
    console.log(dataArr, 'dataArr');
    console.log(dataArr[0].exams, 'before');
    dataArr[0].exams.map((val) => {
        if (val.name === req.body.info.name) {
            val.info = [...req.body.info.info];
            console.log(val, 'valvalval');
            let isValidOtherInfo = true;
            // for (let i in req.body.info.otherInfo) {
            //     if (req.body.info.otherInfo[i] === '') {
            //         isValidOtherInfo = false
            //     }
            // }
            // for (let i in req.body.info.questionCount) {
            //     if (req.body.info.otherInfo[i] === '') {
            //         console.log(val.questionCount)
            //         isValidOtherInfo = false
            //     }
            // }
            // for (let i in req.body.info.textInfo) {
            //     if (req.body.info.otherInfo[i] === '') {
            //         console.log(val.textInfo)
            //         isValidOtherInfo = false
            //     }
            // }
            if (isValidOtherInfo) {
                console.log('okay');
                val.otherInfo = Object.assign({}, req.body.info.otherInfo);
                val.questionCount = Object.assign({}, req.body.info.questionCount);
                // val.textInfo = { ...req.body.info.textInfo }
            }
        }
    });
    console.log(dataArr[0].exams, 'after');
    yield subjectModel_1.default
        .updateOne({ subjectName: req.body.info.subjjectName }, { $set: { exams: dataArr[0].exams } })
        .then((data) => {
        // console.log(data, 'data')
        console.log('successed');
        res.send(dataArr[0]);
    })
        .catch((error) => {
        console.log(error);
    });
    console.log(currentExam, 'currentExamcurrentExam');
});
exports.updateTestFunc = updateTestFunc;
const deletePostFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.info, 'req.body.infosd223231321');
    // req.body.info.val1.questions.map((val2: any) => {
    //     if (val2.uniqName === req.body.info.val.selectedRpValue) {
    //         // console.log(val2.questionType, 'dd')
    //         val2.questionType.map((val3: any, ind3: any) => {
    //             if (val3.questionDescText === req.body.info.val.questionDescText) {
    //                 // arrClone = [...val2.questionType]
    //                 // console.log(arrClone, val2.questionType, 'arrClone')
    //                 // arrClone.splice(ind3, 1)
    //                 val2.questionType.splice(ind3, 1)
    //             }
    //         })
    //     }
    // })
    // console.log(req.body.info, 'req.body.before')
    let dataArr = [];
    let currentExam = {};
    yield subjectModel_1.default
        .find({ subjectName: req.body.info.subjjectName })
        .then((data) => {
        dataArr = [...data];
    })
        .catch((error) => {
        console.log(error);
    });
    // console.log(req.body.info, 'req.body.info')
    // console.log(dataArr, 'dataArr')
    dataArr[0].exams.map((val) => {
        if (val.name === req.body.info.name) {
            // console.log(val,'val',newArr)
            val.info.map((val1) => {
                if (val1.category === req.body.info.val1.category) {
                    val1.questions.map((val2) => {
                        if (val2.uniqName === req.body.info.val.selectedRpValue) {
                            // console.log(val2.questionType, 'dd')
                            val2.questionType.map((val3, ind3) => {
                                if (val3.questionDescText === req.body.info.val.questionDescText) {
                                    // arrClone = [...val2.questionType]
                                    // console.log(arrClone, val2.questionType, 'arrClone')
                                    console.log(val2.questionType, 'val2.questionType');
                                    // arrClone.splice(ind3, 1)
                                    val2.questionType.splice(ind3, 1);
                                }
                            });
                        }
                    });
                }
            });
        }
    });
    yield subjectModel_1.default
        .updateOne({ subjectName: req.body.info.subjjectName }, { $set: { exams: dataArr[0].exams } })
        .then((data) => {
        console.log('successed');
        // console.log(data, 'data')
        res.send(dataArr[0]);
    })
        .catch((error) => {
        console.log(error);
    });
    // let dataArr: any = []
    // let currentExam: any = {}
    // await SubjectItem
    //     .find({ subjectName: req.body.info.subjjectName })
    //     .then((data) => {
    //         dataArr = [...data]
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // console.log(req.body.info, 'req.body.info')
    // console.log(dataArr, 'dataArr')
    // console.log(dataArr[0].exams, 'before')
    // dataArr[0].exams.map((val: any) => {
    //     if (val.name === req.body.info.name) {
    //         val.info = [...req.body.info.info]
    //         val.otherInfo = { ...req.body.info.otherInfo }
    //         val.questionCount = { ...req.body.info.questionCount }
    //         val.textInfo = { ...req.body.info.textInfo }
    //     }
    // })
    // // console.log(dataArr[0].exams, 'after')
    // await SubjectItem
    //     .updateOne({ subjectName: req.body.info.subjjectName }, { $set: { exams: dataArr[0].exams } })
    //     .then((data) => {
    //         // console.log(data, 'data')
    //         console.log('successed')
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // console.log(currentExam, 'currentExamcurrentExam')
});
exports.deletePostFunc = deletePostFunc;
