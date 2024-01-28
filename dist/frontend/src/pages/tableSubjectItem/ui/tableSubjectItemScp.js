"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const tableSubjectItemStl_module_css_1 = __importDefault(require("./tableSubjectItemStl.module.css"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const redux_store_1 = require("entities/store/redux-store");
const subjectReducerThunk_1 = require("entities/subjectR/subjectReducerThunk");
const testReducerThunk_1 = require("entities/testR/testReducerThunk");
const testReducer_1 = require("entities/testR/testReducer");
const TableSubjectItem = () => {
    const params = (0, react_router_dom_1.useParams)();
    const aDispatch = (0, redux_store_1.useAppDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const allExamsArr = (0, react_redux_1.useSelector)((state) => state.subjectR.allExams);
    const [allExamsArrHk, setAllExamsArrHk] = (0, react_1.useState)(allExamsArr);
    const loader = (0, react_redux_1.useSelector)((state) => state.subjectR.loading);
    const [currentExamsArrHk, setCurrentExamsArrHk] = (0, react_1.useState)(null);
    const [loaderHk, setLoaderHk] = (0, react_1.useState)(loader);
    (0, react_1.useEffect)(() => {
        console.log('workedworkedworkedworked');
        setLoaderHk(loader);
        setAllExamsArrHk(filterArrFunc(allExamsArr));
    }, [loader]);
    (0, react_1.useEffect)(() => {
        console.log('workedworkedworkedworked');
        setAllExamsArrHk(filterArrFunc(allExamsArr));
    }, [allExamsArr]);
    (0, react_1.useEffect)(() => {
        aDispatch((0, subjectReducerThunk_1.getExamsFunc)());
    }, []);
    (0, react_1.useEffect)(() => {
        let dataClone = [];
        allExamsArrHk.map((val) => {
            val.exams.map((val1, ind1) => {
                var _a, _b, _c;
                console.log(val1, 'val1');
                console.log(params.id, (_a = val1.textInfo) === null || _a === void 0 ? void 0 : _a.examType, 'params.id, val1.textInfo.examType', params.id === ((_b = val1.textInfo) === null || _b === void 0 ? void 0 : _b.examType));
                if (((_c = val1.textInfo) === null || _c === void 0 ? void 0 : _c.examType) === params.id) {
                    dataClone.push(val1);
                }
            });
        });
        console.log(dataClone, 'dataClone');
        setCurrentExamsArrHk(dataClone);
    }, [allExamsArrHk]);
    const filterArrFunc = (arr) => {
        let dataClone = [];
        let data = arr.filter((val) => {
            // console.log(data, 'data ')
            if (val.teacherName === (currentTeacherInfoCmHk === null || currentTeacherInfoCmHk === void 0 ? void 0 : currentTeacherInfoCmHk.password)) {
                console.log(val, 'includesss');
                dataClone.push(val);
            }
        });
        console.log(data, dataClone, 'data');
        return dataClone;
    };
    const currentTeacherInfoCm = (0, react_redux_1.useSelector)((state) => state.adminR.curentTeacherInfo);
    const [currentTeacherInfoCmHk, setCurrentTeacherInfoCmHk] = (0, react_1.useState)(currentTeacherInfoCm);
    (0, react_1.useEffect)(() => {
        setCurrentTeacherInfoCmHk(currentTeacherInfoCm);
    }, [currentTeacherInfoCm]);
    console.log(allExamsArrHk, currentTeacherInfoCmHk, 'allExamsArrHk');
    console.log(params, 'params table item');
    const [allTtests, setAllTtestsHk] = (0, react_1.useState)(null);
    const [currentExamNameClone, setCurrentExamNameClone] = (0, react_1.useState)('');
    const [forthTypeQsCloneAnswers, setForthTypeQsCloneAnswers] = (0, react_1.useState)({
        firstNum: '',
        secondNum: '',
        thirdNum: '',
    });
    const handlenewdwqInfInputChange = (event) => {
        // if (!isNaN(Number(event.target.value))) {
        setForthTypeQsCloneAnswers(Object.assign(Object.assign({}, forthTypeQsCloneAnswers), { [event.target.name]: event.target.value }));
        // }
    };
    console.log(forthTypeQsCloneAnswers, 'forthTypeQsAnswersforthTypeQsAnswersssswq');
    const [currentSubjectName, setCurrentSubjectName] = (0, react_1.useState)(undefined);
    const [chAnsQuest, setChAnsQuest] = (0, react_1.useState)(null);
    const [nwTestsqInfo, setNwTestsqInfo] = (0, react_1.useState)(null);
    const [forthTypeQsAnswers, setForthTypeQsAnswers] = (0, react_1.useState)(null);
    const dispatch = (0, react_redux_1.useDispatch)();
    const changeArrFunc = (number, arr) => {
        console.log(number, arr, 'number, arr');
        let numberInfoClone = {};
        // for (let i in number) {
        // console.log(number[ind])
        arr === null || arr === void 0 ? void 0 : arr.map((val, ind) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            let o = ind === 0 ? forthTypeQsCloneAnswers.firstNum : ind === 1 ? forthTypeQsCloneAnswers.secondNum : forthTypeQsCloneAnswers.thirdNum;
            console.log(val, 'valval');
            console.log(o, 'ooooooooooooooooooooo');
            let itemsLength = 0;
            val.questions.map((val2, ind2) => {
                itemsLength += val2.questionType.length;
            });
            console.log(itemsLength, 'itemsLengthitemsLength');
            if (itemsLength <= Number(o)) {
                // console.log(number[`${ind}`], itemsLength)
                if (ind === 0) {
                    // numberInfoClone?.thchoose = `${arr[0].questions[0].questionType.length}`
                    // if (numberInfoClone) {
                    numberInfoClone.thchoose = `${(_b = (_a = arr[0]) === null || _a === void 0 ? void 0 : _a.questions[0]) === null || _b === void 0 ? void 0 : _b.questionType.length}`;
                    // }    
                }
                else if (ind === 1) {
                    // if (numberInfoClone) {
                    numberInfoClone.thshort = `${(_d = (_c = arr[1]) === null || _c === void 0 ? void 0 : _c.questions[0]) === null || _d === void 0 ? void 0 : _d.questionType.length}`;
                    numberInfoClone.thshortb = `${(_f = (_e = arr[1]) === null || _e === void 0 ? void 0 : _e.questions[1]) === null || _f === void 0 ? void 0 : _f.questionType.length}`;
                    // }
                }
                else if (ind === 2) {
                    // if (numberInfoClone) {
                    numberInfoClone.thshortanvariant = `${(_h = (_g = arr[2]) === null || _g === void 0 ? void 0 : _g.questions[0]) === null || _h === void 0 ? void 0 : _h.questionType.length}`;
                    numberInfoClone.thshortcctgry = `${(_k = (_j = arr[2]) === null || _j === void 0 ? void 0 : _j.questions[1]) === null || _k === void 0 ? void 0 : _k.questionType.length}`;
                    // }
                }
                console.log(numberInfoClone, 'first');
            }
            else {
                if (ind === 0) {
                    // if (numberInfoClone) {
                    numberInfoClone.thchoose = o;
                    // }
                }
                else if (ind === 1) {
                    let firstNum = Math.ceil((Math.random() * ((_m = (_l = arr[1]) === null || _l === void 0 ? void 0 : _l.questions[0]) === null || _m === void 0 ? void 0 : _m.questionType.length)) + 0);
                    let secondNum = Number(o) - firstNum;
                    console.log(firstNum, secondNum);
                    // if (numberInfoClone) {
                    numberInfoClone.thshort = String(firstNum);
                    numberInfoClone.thshortb = String(secondNum);
                    // }
                }
                else if (ind === 2) {
                    let firstNum = Math.ceil((Math.random() * ((_p = (_o = arr[2]) === null || _o === void 0 ? void 0 : _o.questions[0]) === null || _p === void 0 ? void 0 : _p.questionType.length)) + 0);
                    let secondNum = Number(o) - firstNum;
                    console.log(firstNum, secondNum);
                    // if (numberInfoClone) {
                    numberInfoClone.thshortanvariant = String(firstNum);
                    numberInfoClone.thshortcctgry = String(secondNum);
                    // }
                }
                console.log(numberInfoClone, 'second');
            }
        });
        // }
        console.log(numberInfoClone, 'numberInfoClonewwwwwwwwwwwnumberInfoClone');
        return numberInfoClone;
    };
    const changeTestInfo = (val) => {
        console.log(val, 'valval');
        // allExamsArrHk.
        setAllTtestsHk(val.info);
        setCurrentExamNameClone(val.name);
        setCurrentSubjectName(val.subjjectName);
        setChAnsQuest(val.textInfo);
        setNwTestsqInfo(val.otherInfo);
        setNwTestsqInfo(val.otherInfo);
        dispatch((0, testReducer_1.getTestName)({ info: val.name }));
        // setForthTypeQsAnswers(val.questionCount)
        setForthTypeQsAnswers(changeArrFunc(forthTypeQsCloneAnswers, val.info));
        // dispatch(changeAllTest({ info: val.info }))
        console.log(allTtests, 'allTtests');
    };
    const getAllExamOthInfoCompFunc = () => {
        console.log(currentSubjectName, 'currentSubjectName');
        aDispatch((0, testReducerThunk_1.updateQuestionFunc)({ info: allTtests, name: currentExamNameClone, subjjectName: currentSubjectName, textInfo: chAnsQuest, otherInfo: nwTestsqInfo, questionCount: forthTypeQsAnswers }));
        navigate('/test');
    };
    return (<div>
            {loaderHk
            ?
                <div>
                        Loading ........
                    </div>
            :
                currentExamsArrHk === null || currentExamsArrHk === void 0 ? void 0 : currentExamsArrHk.map((val) => {
                    return (<div>
                                <div>
                                    <button onClick={() => changeTestInfo(val)}>change</button>
                                </div>
                                {val.name}
                                <div>
                                    <div>
                                        <div>
                                            A
                                        </div>

                                        <div>
                                            <input name='firstNum' onChange={handlenewdwqInfInputChange} type="text"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            B
                                        </div>

                                        <div>
                                            <input name='secondNum' onChange={handlenewdwqInfInputChange} type="text"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            C
                                        </div>

                                        <div>
                                            <input name='thirdNum' onChange={handlenewdwqInfInputChange} type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>);
                })}
            <div className={tableSubjectItemStl_module_css_1.default.test_content_inp_content_in_items_sec_btn}>
                <button onClick={getAllExamOthInfoCompFunc}>Գեներացնել ձևաթուղթ</button>
            </div>
            table item
        </div>);
};
exports.default = TableSubjectItem;
