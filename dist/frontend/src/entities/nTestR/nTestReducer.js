"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.newTestQuestionsInfoFunc = exports.newTestQuestionsCountFunc = exports.newTestSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const nTestReducerThunk_1 = require("./nTestReducerThunk");
const initialState = {
    loading: false,
    error: null,
    questCountInfo: {
        thchoose: '',
        thshort: '',
        thshortanvariant: ''
    },
    allQuestTest: [],
    questInfo: {
        building: '',
        resultNum: '',
        clssNum: '',
        arName: '',
        teachName: '',
        date: '',
    }
};
exports.newTestSlice = (0, toolkit_1.createSlice)({
    name: 'newTestSlice',
    initialState,
    reducers: {
        newTestQuestionsCountFunc(state, action) {
            state.questCountInfo = action.payload.info;
        },
        newTestQuestionsInfoFunc(state, action) {
            state.questInfo = action.payload.info;
            console.log((0, toolkit_1.current)(state), 'current(state)current(state)');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(nTestReducerThunk_1.getTestQuestFunc.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(nTestReducerThunk_1.getTestQuestFunc.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload, 'action.payloadaction.payloadaction.payldddoad');
            state.allQuestTest = action.payload;
        })
            .addCase(nTestReducerThunk_1.getTestQuestFunc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'An error occurred';
        });
    }
});
_a = exports.newTestSlice.actions, exports.newTestQuestionsCountFunc = _a.newTestQuestionsCountFunc, exports.newTestQuestionsInfoFunc = _a.newTestQuestionsInfoFunc;
exports.default = exports.newTestSlice.reducer;
