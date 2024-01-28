"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStudentNumInfo = exports.adminSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const adminThunk_1 = require("./adminThunk");
const initialState = {
    loading: false,
    error: null,
    password: 'ozuazk',
    isAdmin: false,
    allTeacherInfo: [],
    curentTeacherInfo: null
};
exports.adminSlice = (0, toolkit_1.createSlice)({
    name: 'subject',
    initialState,
    reducers: {
        changeStudentNumInfo(state, action) {
            // if (state.password === action.payload.info) {
            //     state.isAdmin = true
            // } else {
            //     state.isAdmin = false
            // }
            state.curentTeacherInfo = action.payload.info;
            console.log((0, toolkit_1.current)(state));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminThunk_1.getTeacherInfoFunc.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(adminThunk_1.getTeacherInfoFunc.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            console.log(action.payload, 'action.payload');
            state.allTeacherInfo = action.payload;
            console.log((0, toolkit_1.current)(state), 'getting teacher info');
        })
            .addCase(adminThunk_1.getTeacherInfoFunc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'An error occurred';
        })
            .addCase(adminThunk_1.isPasswordValidFunc.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(adminThunk_1.isPasswordValidFunc.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            console.log(action.payload);
            if (action.payload) {
                state.curentTeacherInfo = action.payload;
            }
            console.log((0, toolkit_1.current)(state), 'current(state)');
        })
            .addCase(adminThunk_1.isPasswordValidFunc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'An error occurred';
        })
            .addCase(adminThunk_1.logOutFunc.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(adminThunk_1.logOutFunc.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.curentTeacherInfo = null;
            console.log((0, toolkit_1.current)(state), 'current(state)');
        })
            .addCase(adminThunk_1.logOutFunc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'An error occurred';
        });
    }
});
exports.changeStudentNumInfo = exports.adminSlice.actions.changeStudentNumInfo;
exports.default = exports.adminSlice.reducer;
