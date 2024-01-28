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
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOutFunc = exports.isPasswordValidFunc = exports.getTeacherInfoFunc = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.getTeacherInfoFunc = (0, toolkit_1.createAsyncThunk)('test/getTeacherInfoFunc', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('/get-teacher-info');
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const data = yield response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
}));
exports.isPasswordValidFunc = (0, toolkit_1.createAsyncThunk)('test/isPasswordValidFunc', (item) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(item, 'passwor admin info');
    try {
        const response = yield fetch(`/password-valid`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ info: item }),
        });
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const data = yield response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
}));
exports.logOutFunc = (0, toolkit_1.createAsyncThunk)('test/logOutFunc', (item) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(item, 'passwor admin info');
    try {
        const response = yield fetch(`/log-out`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ info: item }),
        });
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const data = yield response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
}));
