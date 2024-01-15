"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSubjectNameFunc = exports.subjectSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const subjectReducerThunk_1 = require("./subjectReducerThunk");
const initialState = {
    loading: false,
    error: null,
    allExams: [],
    saveSubjectNameFunc: ''
};
exports.subjectSlice = (0, toolkit_1.createSlice)({
    name: 'subject',
    initialState,
    reducers: {
        saveSubjectNameFunc(state, action) {
            state.saveSubjectNameFunc = action.payload.info;
            console.log((0, toolkit_1.current)(state));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(subjectReducerThunk_1.addSubjectFunc.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(subjectReducerThunk_1.addSubjectFunc.fulfilled, (state, action) => {
            state.loading = false;
            state.allExams.push(action.payload);
        })
            .addCase(subjectReducerThunk_1.addSubjectFunc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'An error occurred';
        })
            .addCase(subjectReducerThunk_1.getExamsFunc.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(subjectReducerThunk_1.getExamsFunc.fulfilled, (state, action) => {
            state.loading = false;
            state.allExams = action.payload;
        })
            .addCase(subjectReducerThunk_1.getExamsFunc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'An error occurred';
        });
    }
});
exports.saveSubjectNameFunc = exports.subjectSlice.actions.saveSubjectNameFunc;
exports.default = exports.subjectSlice.reducer;
