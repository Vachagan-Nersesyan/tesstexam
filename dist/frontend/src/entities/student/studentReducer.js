"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArrAllAnswers = exports.changeStudentTestsInfo = exports.changeStudentNumstInfo = exports.changeStudentOthInfo = exports.changeExistsExamInfo = exports.studentSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    loading: false,
    error: null,
    numInfo: {
        thchoose: '',
        thshort: '',
        thshortanvariant: '',
        thshortb: '',
        thshortcctgry: ''
    },
    otherInfo: {
        building: '',
        resultNum: '',
        clssNum: '',
        arName: '',
        teachName: '',
        date: '',
        clssNm: ''
    },
    allTests: [],
    allExamExists: [],
    allAnswers: []
};
exports.studentSlice = (0, toolkit_1.createSlice)({
    name: 'studentt',
    initialState,
    reducers: {
        updateArrAllAnswers(state, action) {
            let isIncludes = false;
            for (let i in state.allAnswers) {
                if (state.allAnswers[i].questNum === action.payload.info.questNum) {
                    state.allAnswers[i] = action.payload.info;
                    isIncludes = true;
                }
            }
            if (!isIncludes) {
                state.allAnswers.push(action.payload.info);
            }
            console.log((0, toolkit_1.current)(state));
        },
        changeStudentOthInfo(state, action) {
            state.otherInfo = action.payload.info;
        },
        changeStudentNumstInfo(state, action) {
            state.numInfo = action.payload.info;
        },
        changeStudentTestsInfo(state, action) {
            state.allTests = action.payload.info;
        },
        changeExistsExamInfo(state, action) {
            state.allExamExists = action.payload.info;
            console.log((0, toolkit_1.current)(state));
        },
    },
});
_a = exports.studentSlice.actions, exports.changeExistsExamInfo = _a.changeExistsExamInfo, exports.changeStudentOthInfo = _a.changeStudentOthInfo, exports.changeStudentNumstInfo = _a.changeStudentNumstInfo, exports.changeStudentTestsInfo = _a.changeStudentTestsInfo, exports.updateArrAllAnswers = _a.updateArrAllAnswers;
exports.default = exports.studentSlice.reducer;
