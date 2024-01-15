"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.addQuestionFunc = exports.clearArrFunc = exports.getInitInfoArr = exports.getAllWrongQuestionsCountFunc = exports.getAllExamInfoCountFunc = exports.getAllQuestionsCountFunc = exports.getAllQuestionsCount = exports.changeTestName = exports.changeAllTest = exports.testSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
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
    testName: '',
    testhrt: []
};
exports.testSlice = (0, toolkit_1.createSlice)({
    name: 'test',
    initialState,
    reducers: {
        changeAllTest(state, action) {
            state.allTests = action.payload.info;
        },
        addQuestionFunc(state, action) {
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
        // builder
        //     .addCase(getQuestionFunc.pending, (state) => {
        //         state.loading = true;
        //         state.error = null;
        //     })
        //     .addCase(getQuestionFunc.fulfilled, (state, action) => {
        //         state.loading = false;
        //         console.log(action.payload, 'action.payloadaction.payloadaction.payload')
        //         state.allTests = action.payload
        //     })
        //     .addCase(getQuestionFunc.rejected, (state, action) => {
        //         state.loading = false;
        //         state.error = action.error.message || 'An error occurred';
        //     })
    }
});
_a = exports.testSlice.actions, exports.changeAllTest = _a.changeAllTest, exports.changeTestName = _a.changeTestName, exports.getAllQuestionsCount = _a.getAllQuestionsCount, exports.getAllQuestionsCountFunc = _a.getAllQuestionsCountFunc, exports.getAllExamInfoCountFunc = _a.getAllExamInfoCountFunc, exports.getAllWrongQuestionsCountFunc = _a.getAllWrongQuestionsCountFunc, exports.getInitInfoArr = _a.getInitInfoArr, exports.clearArrFunc = _a.clearArrFunc, exports.addQuestionFunc = _a.addQuestionFunc;
exports.default = exports.testSlice.reducer;
