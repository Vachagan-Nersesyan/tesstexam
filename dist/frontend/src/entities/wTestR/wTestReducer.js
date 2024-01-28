"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    loading: false,
    error: null,
};
exports.testSlice = (0, toolkit_1.createSlice)({
    name: 'test',
    initialState,
    reducers: {
    // getTestName(state: InitialStateType, action: PayloadAction<{ info: string }>) {
    //     state.currentExamName = action.payload.info
    // },
    }
});
