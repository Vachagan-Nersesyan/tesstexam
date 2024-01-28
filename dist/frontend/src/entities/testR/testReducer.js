"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.addQuestionFunc = exports.clearArrFunc = exports.getInitInfoArr = exports.getAllWrongQuestionsCountFunc = exports.getAllExamInfoCountFunc = exports.getAllQuestionsCountFunc = exports.getAllQuestionsCount = exports.changeTestName = exports.changeAllTest = exports.updateTestsArr = exports.changeIsRndItm = exports.changeAllBetaTest = exports.changeAllBetaWorkTest = exports.getTestName = exports.getTestSubjectName = exports.getOtherInfo = exports.testSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const testReducerThunk_1 = require("./testReducerThunk");
// import { getQuestionFunc } from './testReducerThunk'
const allTestsConstructor = [
    {
        id: 0,
        category: 'A',
        questions: [
            {
                id: 0,
                questionType: [],
                uniqName: 'choose',
            }
        ]
    },
    {
        id: 1,
        category: 'B',
        questions: [
            {
                id: 1,
                questionType: [],
                uniqName: 'shortbtype',
            },
            {
                id: 2,
                questionType: [],
                uniqName: 'short',
            },
        ]
    },
    {
        id: 2,
        category: 'C',
        questions: [
            {
                id: 1,
                questionType: [],
                uniqName: 'shortandvariant',
            },
            {
                id: 2,
                questionType: [],
                uniqName: 'shortbtype',
            },
        ]
    },
];
const initialState = {
    loading: false,
    error: null,
    allInfo: {
        chooseAnswerQuest: '',
        shortAnswerQuest: '',
        shortAnswerBQuest: '',
        chooseAnswerBQuest: '',
        shortAnswerCQuest: '',
        shortAnswerDQuest: '',
        shortAnswerEQuest: '',
        wrongChooseAnswerQuest: '',
        wrongShortAnswerQuest: '',
    },
    allInfoArr: [],
    wrongQuestArr: [],
    subjectName: '',
    examYear: 0,
    examType: '',
    allTests: [...allTestsConstructor],
    allTestsBeta: [],
    isRnd: false,
    testName: '',
    testhrt: [],
    currentExamName: '',
    currentSubjectName: '',
    otherInfo: null,
    allExamflInfo: null
};
exports.testSlice = (0, toolkit_1.createSlice)({
    name: 'test',
    initialState,
    reducers: {
        getOtherInfo(state, action) {
            state.otherInfo = action.payload.info;
            console.log((0, toolkit_1.current)(state), 'getotherinfoooo');
        },
        getTestName(state, action) {
            state.currentExamName = action.payload.info;
        },
        getTestSubjectName(state, action) {
            state.currentSubjectName = action.payload.info;
        },
        changeAllTest(state, action) {
            state.allTests = action.payload.info;
        },
        updateTestsArr(state, action) {
            state.allTests = [...allTestsConstructor];
        },
        changeIsRndItm(state, action) {
            state.isRnd = action.payload;
        },
        changeAllBetaTest(state, action) {
            state.allTestsBeta = action.payload.info;
        },
        changeAllBetaWorkTest(state, action) {
            state.allTests = state.allTestsBeta;
        },
        addQuestionFunc(state, action) {
            console.log(action.payload.info, 'action.payload.infoaction.payload.infosss');
            state.testhrt.push(action.payload.info.selectedRpValue);
            state.allTests.map((val) => {
                if (val.category.toLowerCase() === action.payload.info.selectedLvlValue) {
                    val.questions.map((val1) => {
                        if (val1.uniqName === action.payload.info.selectedRpValue) {
                            val1.questionType.push(action.payload.info);
                        }
                    });
                }
            });
        },
        // deleteQuestionFunc(state: InitialStateType, action: PayloadAction<{ info: QuestionType }>) {
        //     state.testhrt.push(action.payload.info.selectedRpValue)
        //     state.allTests.map((val) => {
        //         if (val.category.toLowerCase() === action.payload.info.selectedLvlValue) {
        //             val.questions.map((val1, ind1) => {
        //                 if (val1.uniqName === action.payload.info.selectedRpValue) {
        //                     val1.questionType.splice(ind1, 1)
        //                 }
        //             })
        //         }
        //     })
        //     console.log(current(state), 'current(state)')
        // },
        changeTestName(state, action) {
            state.testName = action.payload.info;
        },
        getAllQuestionsCount(state, action) {
            state.allInfo = action.payload.info;
        },
        getAllQuestionsCountFunc(state, action) {
            state.allInfoArr.push(action.payload.info);
        },
        getAllWrongQuestionsCountFunc(state, action) {
            state.wrongQuestArr.push(action.payload.info);
        },
        getAllExamInfoCountFunc(state, action) {
            state.subjectName = action.payload.info.subjectName;
            state.examYear = action.payload.info.examYear;
            state.examType = action.payload.info.examType;
        },
        getInitInfoArr(state, action) {
            state.allInfoArr.push(action.payload.info);
        },
        clearArrFunc(state, action) {
            state.allInfoArr = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(testReducerThunk_1.updateQuestionFunc.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(testReducerThunk_1.updateQuestionFunc.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload, 'action.payloadaction.payloadaction.payloaddddddddddddddddddddddddddddd');
            console.log((0, toolkit_1.current)(state));
            for (let i in action.payload.exams) {
                console.log((0, toolkit_1.current)(state), 'stugum', action.payload.exams[i], state.currentExamName, 'outloop');
                if (action.payload.exams[i].name === state.currentExamName) {
                    console.log((0, toolkit_1.current)(state), 'stugum', action.payload.exams[i], 'inloop');
                    console.log(action.payload.exams[i], 'action.payload.exams[i]');
                    state.allTests = [...action.payload.exams[i].info];
                    state.allExamflInfo = Object.assign({}, action.payload.exams[i]);
                }
            }
            console.log((0, toolkit_1.current)(state), 'before');
        })
            .addCase(testReducerThunk_1.updateQuestionFunc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'An error occurred';
        })
            .addCase(testReducerThunk_1.deleteQuestionFunc.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(testReducerThunk_1.deleteQuestionFunc.fulfilled, (state, action) => {
            state.loading = false;
            // console.log(action.payload, 'action.payloadaction.payloadaction.payloaddddddddddddddddddddddddddddd')
            // console.log(current(state))
            action.payload.exams.map((val) => {
                if (val.name === state.currentExamName) {
                    state.allTests = val.info;
                }
            });
        })
            .addCase(testReducerThunk_1.deleteQuestionFunc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'An error occurred';
        });
    }
});
_a = exports.testSlice.actions, exports.getOtherInfo = _a.getOtherInfo, exports.getTestSubjectName = _a.getTestSubjectName, exports.getTestName = _a.getTestName, exports.changeAllBetaWorkTest = _a.changeAllBetaWorkTest, exports.changeAllBetaTest = _a.changeAllBetaTest, exports.changeIsRndItm = _a.changeIsRndItm, exports.updateTestsArr = _a.updateTestsArr, exports.changeAllTest = _a.changeAllTest, exports.changeTestName = _a.changeTestName, exports.getAllQuestionsCount = _a.getAllQuestionsCount, exports.getAllQuestionsCountFunc = _a.getAllQuestionsCountFunc, exports.getAllExamInfoCountFunc = _a.getAllExamInfoCountFunc, exports.getAllWrongQuestionsCountFunc = _a.getAllWrongQuestionsCountFunc, exports.getInitInfoArr = _a.getInitInfoArr, exports.clearArrFunc = _a.clearArrFunc, exports.addQuestionFunc = _a.addQuestionFunc;
exports.default = exports.testSlice.reducer;
