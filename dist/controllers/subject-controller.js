"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSubject = void 0;
const subjectModel_1 = __importDefault(require("../models/subjectModel"));
const addSubject = (req, res) => {
    const subjectItem = new subjectModel_1.default(Object.assign({}, req.body.info));
    // console.log(subjectItem, 'subjectItem')
    subjectItem
        .save()
        .then((data) => res.send(data))
        .catch((error) => {
        console.log(error);
        res.redirect('/');
    });
};
exports.addSubject = addSubject;
