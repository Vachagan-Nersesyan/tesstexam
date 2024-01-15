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
exports.sendQuestionFunc = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
// import { QuestionType } from "./testReducerTs.interface";
exports.sendQuestionFunc = (0, toolkit_1.createAsyncThunk)('test/sendQuestion', (item) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`/add-question`, {
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
// export const getQuestionFunc = createAsyncThunk(
//     'test/getQuestionFunc',
//     async () => {
//         try {
//             const response = await fetch('/get-tests')
//             if (!response.ok) {
//                 throw new Error('Request failed');
//             }
//             const data = await response.json();
//             return data
//         } catch (error) {
//             throw error
//         }
//     }
// )
