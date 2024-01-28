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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePicFunc = exports.addSubject = void 0;
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
const changePicFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body.info, 'req.body.info first')
    let dataArr = [];
    yield subjectModel_1.default
        .find({ subjectName: req.body.info.subjectName })
        .then((data) => {
        dataArr = [...data];
        // console.log(dataArr, 'finded datagggggggggggggggArr')
        // console.log(dataArr, 'dataArr')
    })
        .catch((error) => {
        console.log(error);
    });
    // console.log(dataArr, 'dataArrdataArr')
    // console.log(dataArr[0].picture, '[icicic')
    // console.log(req.body.info.picture, 'req.body.info.picture')
    dataArr[0].picture = req.body.info.picture;
    yield subjectModel_1.default
        .updateOne({ subjectName: req.body.info.subjectName }, { $set: { picture: dataArr[0].picture } })
        .then((data) => {
        // console.log(data, 'data')
        // console.log(dataArr[0].picture, 'picture]')
        // res.send(data)
        console.log('successed');
    })
        .catch((error) => {
        console.log(error);
    });
});
exports.changePicFunc = changePicFunc;
