"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const addQuestionSchema = new Schema({
    info: {
        type: Array,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    subjjectName: {
        type: String,
        required: false
    }
});
const AddQuestionItem = mongoose_1.default.model('allexams', addQuestionSchema);
exports.default = AddQuestionItem;
