"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppDispatch = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const nTestReducer_1 = __importDefault(require("entities/nTestR/nTestReducer"));
const subjectReducer_1 = __importDefault(require("entities/subjectR/subjectReducer"));
const testReducer_1 = __importDefault(require("entities/testR/testReducer"));
const react_redux_1 = require("react-redux");
const store = (0, toolkit_1.configureStore)({
    reducer: {
        testR: testReducer_1.default,
        makeTestR: nTestReducer_1.default,
        subjectR: subjectReducer_1.default
    }
});
exports.useAppDispatch = react_redux_1.useDispatch;
exports.default = store;
