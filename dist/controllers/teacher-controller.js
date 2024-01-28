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
exports.logOutFunc = exports.checkPasswordValidFunc = exports.getTeacherInfo = void 0;
const teacherModel_1 = __importDefault(require("../models/teacherModel"));
const getTeacherInfo = (req, res) => {
    console.log('getting info');
    teacherModel_1.default
        .find()
        .then((data) => {
        console.log(data, 'teacher info data');
        res.send(data);
    })
        .catch((error) => {
        console.log(error);
    });
};
exports.getTeacherInfo = getTeacherInfo;
const checkPasswordValidFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let dataArr = [];
    console.log(req.body.info, 'req.body.info');
    yield teacherModel_1.default
        .find({ password: req.body.info.info })
        .then((data) => {
        dataArr = [...data];
        console.log(dataArr, 'admin password');
    })
        .catch((error) => {
        console.log(error);
    });
    if (dataArr.length === 0) {
        console.log('empty');
        res.send(null);
    }
    else {
        dataArr[0].isAuth = true;
        yield teacherModel_1.default
            .updateOne({ password: req.body.info.info }, { $set: { isAuth: dataArr[0].isAuth } })
            .then((data) => {
            console.log(data, 'data');
            // console.log(dataArr[0].picture, 'picture]')
            res.send(dataArr[0]);
            console.log('successed');
        })
            .catch((error) => {
            console.log(error);
        });
        // res.send({})
        console.log(dataArr, 'admin password');
    }
});
exports.checkPasswordValidFunc = checkPasswordValidFunc;
const logOutFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let dataArr = [];
    console.log(req.body.info, 'req.body.info');
    yield teacherModel_1.default
        .find({ password: req.body.info.info })
        .then((data) => {
        dataArr = [...data];
        console.log(dataArr, 'admin password');
    })
        .catch((error) => {
        console.log(error);
    });
    dataArr[0].isAuth = false;
    yield teacherModel_1.default
        .updateOne({ password: req.body.info.info }, { $set: { isAuth: dataArr[0].isAuth } })
        .then((data) => {
        console.log(data, 'data');
        // console.log(dataArr[0].picture, 'picture]')
        res.send(dataArr[0]);
        console.log('successed');
    })
        .catch((error) => {
        console.log(error);
    });
    // res.send({})
    console.log(dataArr, 'admin password');
});
exports.logOutFunc = logOutFunc;
