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
exports.TestComp = void 0;
const react_1 = __importStar(require("react"));
const testStl_module_css_1 = __importDefault(require("./testStl.module.css"));
const react_redux_1 = require("react-redux");
const testReducer_1 = require("entities/testR/testReducer");
const redux_store_1 = require("entities/store/redux-store");
const react_router_dom_1 = require("react-router-dom");
const nTestReducer_1 = require("entities/nTestR/nTestReducer");
const testReducerThunk_1 = require("entities/testR/testReducerThunk");
const studentReducer_1 = require("entities/student/studentReducer");
const antd_1 = require("antd");
const TabPane_1 = __importDefault(require("antd/es/tabs/TabPane"));
const uuid_1 = require("uuid");
const _1_png_1 = __importDefault(require("../images/1.png"));
const _2_gif_1 = __importDefault(require("../images/2.gif"));
require("froala-editor/css/froala_style.min.css");
require("froala-editor/css/froala_editor.pkgd.min.css");
const react_quill_1 = __importDefault(require("react-quill"));
require("react-quill/dist/quill.snow.css");
const fa6_1 = require("react-icons/fa6");
// let firstQuestType: Array<QuestionType> = []
// let secondQuestType: Array<QuestionType> = []
// let thirdQuestType: Array<QuestionType> = []
// let forthQuestType: Array<QuestionType> = []
const TestComp = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const isAdminItem = (0, react_redux_1.useSelector)((state) => state.adminR.isAdmin);
    // if (!isAdminItem) {
    //     navigate('/')
    // }
    const [isuporNot, setIsuporNot] = (0, react_1.useState)(false);
    const currentExamName = (0, react_redux_1.useSelector)((state) => state.testR.currentExamName);
    const currentSubjectName = (0, react_redux_1.useSelector)((state) => state.testR.currentSubjectName);
    const allExams = (0, react_redux_1.useSelector)((state) => state.subjectR.allExams);
    const [allExamsHk, setAllExams] = (0, react_1.useState)(allExams);
    (0, react_1.useEffect)(() => {
        setAllExams(allExams);
        console.log(allExams, currentSubjectName, currentExamName);
        allExams.map((val) => {
            if (val.subjectName === currentSubjectName) {
                console.log(val, 'val');
                val.exams.map((val1) => {
                    console.log(val, 'val');
                    if (val1.name === currentExamName && currentExamName !== '') {
                        console.log(val1, 'val');
                        setIsuporNot(true);
                    }
                });
            }
        });
    }, [allExams]);
    // useEffect(() => {
    //     console.log(allExams, currentExamName, 'allExams,currentExamName')
    //     setAllExams(allExams)
    //     allExamsHk.map((val) => {
    //         val.exams.map((val1) => {
    //             if (val1.name === currentExamName) {
    //                 setIsuporNot(true)
    //             }
    //         })
    //     })
    // }, [])
    console.log(allExamsHk, currentExamName, '444444444442');
    console.log(isuporNot, 'isuporNot');
    const allTtests = (0, react_redux_1.useSelector)((state) => state.testR.allTests);
    const [getAllTestss, setAllTestss] = (0, react_1.useState)(allTtests);
    console.log(allTtests, 'allTtestsallTtestsallTtests');
    // useEffect(() => {
    //     dispatch(updateTestsArr())
    //     dispatch(changeAllBetaWorkTest())
    // }, [])
    (0, react_1.useEffect)(() => {
        console.log('changed', allTtests);
        setAllTestss(allTtests);
    }, [allTtests]);
    (0, react_1.useEffect)(() => {
        console.log('changed', allTtests);
        setAllTestss(allTtests);
        updateQuestionInfo(allTtests);
    }, [allTtests]);
    const isRndComp = (0, react_redux_1.useSelector)((state) => state.testR.isRnd);
    // uxxelellelele
    // if (!isRndComp) {
    //     navigate('/all-exams')
    // }
    (0, react_1.useEffect)(() => {
        return () => {
            dispatch((0, testReducer_1.changeIsRndItm)(false));
            setIsuporNot(false);
            dispatch((0, testReducer_1.getTestName)({ info: '' }));
            // dispatch(updateTestsArr())
        };
    }, []);
    const aDispatch = (0, redux_store_1.useAppDispatch)();
    const allInfoArr = (0, react_redux_1.useSelector)((state) => state.testR.allInfoArr);
    // const [chAnsQuest, setChAnsQuest] = useState({
    //     chooseAnswerQuest: '',
    //     shortAnswerQuest: '',
    //     shortAnswerBQuest: '',
    //     chooseAnswerBQuest: '',
    //     shortAnswerCQuest: '',
    //     shortAnswerDQuest: '',
    //     shortAnswerEQuest: '',
    //     wrongChooseAnswerQuest: '',
    //     wrongShortAnswerQuest: '',
    // });
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setChAnsQuest((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };
    const [selectedValue, setSelectedValue] = (0, react_1.useState)('');
    let [countValue, setCountValue] = (0, react_1.useState)('');
    let [longName, setLongName] = (0, react_1.useState)('');
    const [getVariant, setVariant] = (0, react_1.useState)(null);
    // ddddddddd
    let wrQstPrtArr = [{
            id: 0,
            name: 'Սխալ Ընտրովի պատասխաններ',
            uniqName: 'wrchoose',
            variant: false,
            countValue: '',
            text: ''
        },
        {
            id: 1,
            name: 'Սխալ Կարճ պատասխաններ',
            uniqName: 'wrshort',
            variant: false,
            countValue: '',
            text: ''
        },
        {
            id: 2,
            name: 'Սխալ Կարճ և տարբերակներով պատասխաններ',
            uniqName: 'wrshortandvariant',
            countValue: '',
            variant: false,
            text: ''
        }];
    const [questWrInputs, setQuestWrInputs] = (0, react_1.useState)({});
    const handleQuestWrInputChange = (event, ind) => {
        wrQstPrtArr[ind - 3].text = event.target.value;
    };
    // dddddd
    const handleSelectChange = (event) => {
        // Update the state with the selected value
        setSelectedValue(event.target.value);
        // You can perform additional actions here based on the selected value
        console.log("Selected value: " + event.target.value);
    };
    const [infoArr, setInfoArr] = (0, react_1.useState)(allInfoArr);
    (0, react_1.useEffect)(() => {
        setInfoArr(allInfoArr);
    }, [allInfoArr]);
    const saveInfo = (tp) => {
        let wrQstPrtArrClone = wrQstPrtArr.filter((val) => Number(val.text) > 0);
        for (let i in wrQstPrtArrClone) {
            let obj = {
                id: infoArr.length,
                longName: wrQstPrtArrClone[i].name,
                countValue: wrQstPrtArrClone[i].text,
                selectedValue: wrQstPrtArrClone[i].uniqName,
                isLoopEnd: false,
                lastIndex: 0,
                initNumber: numSum - Number(countValue)
            };
            // if (tp) {
            //     dispatch(getAllQuestionsCountFunc({ info: obj }))
            // } else {
            dispatch((0, testReducer_1.getAllWrongQuestionsCountFunc)({ info: obj }));
            // }
        }
    };
    const allWrInfoArr = (0, react_redux_1.useSelector)((state) => state.testR.wrongQuestArr);
    const [infoWrArr, setInfoWRArr] = (0, react_1.useState)(allWrInfoArr);
    (0, react_1.useEffect)(() => {
        setInfoWRArr(allWrInfoArr);
    }, [allWrInfoArr]);
    // const saveWrQInfo = () => {
    //     let obj = {
    //         id: infoArr.length,
    //         countValue,
    //         selectedValue,
    //         isLoopEnd: false,
    //         lastIndex: 0
    //     }
    //     dispatch(getAllWrongQuestionsCountFunc({ info: obj }))
    // }
    // const chosenAnswerQuestionAnswerCompFunc = () => {
    //     // dispatch(getAllQuestionsCount({ info: chAnsQuest }))
    //     // console.log(infoArr,'infoArrinfoArr')
    //     navigate('/test')
    // }
    const otherInfoComp = (0, react_redux_1.useSelector)((state) => state.testR.otherInfo);
    const [chAnsQuest, setChAnsQuest] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        setChAnsQuest(otherInfoComp);
    }, [otherInfoComp]);
    // const [chAnsQuest, setChAnsQuest] = useState<AllExamInfoType>({
    //     examYear: 0,
    //     examType: '',
    //     subjectName: '',
    // });
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setChAnsQuest((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };
    const getAllExamOthInfoCompFunc = () => {
        // if (Number(countValue) > 0) {
        // setActiveInpVal('')
        setNumSum(numSum += Number(countValue));
        saveInfo(getVariant);
        // }
        // dispatch(getAllExamInfoCountFunc({ info: chAnsQuest }))
        navigate('/test');
    };
    const [activeInpVal, setActiveInpVal] = (0, react_1.useState)('');
    const [inpVvalue, setInpVvalue] = (0, react_1.useState)('');
    let [numSum, setNumSum] = (0, react_1.useState)(0);
    const allCategoryArr = [
        {
            id: 0,
            name: 'Ընտրովի պատասխաններ',
            uniqName: 'choose',
            variant: true,
            type: 'nw'
        },
        {
            id: 1,
            name: 'Կարճ պատասխաններ',
            uniqName: 'short',
            variant: true,
            type: 'nw'
        },
        {
            id: 2,
            name: 'Կարճ պատասխաններ (B)',
            uniqName: 'shortbtype',
            variant: true,
            type: 'nw'
        },
        {
            id: 3,
            name: 'Կարճ պատասխաններ (B)',
            uniqName: 'shortbtype',
            variant: true,
            type: 'nw'
        },
        {
            id: 4,
            name: 'Պնդումներով պատասխաններ',
            uniqName: 'shortandvariant',
            variant: true,
            type: 'nw'
        },
        // {
        //     id: 3,
        //     name: 'Սխալ Ընտրովի պատասխաններ',
        //     uniqName: 'wrchoose',
        //     variant: false,
        //     type: 'yw'
        // },
        // {
        //     id: 4,
        //     name: 'Սխալ Կարճ պատասխաններ',
        //     uniqName: 'wrshort',
        //     variant: false,
        //     type: 'yw'
        // },
        // {
        //     id: 5,
        //     name: 'Սխալ Կարճ և տարբերակներով պատասխաններ',
        //     uniqName: 'wrshortandvariant',
        //     variant: false,
        //     type: 'yw'
        // },
    ];
    // second side part start functionality
    // useEffect(() => {
    //     aDispatch(getQuestionFunc())
    //     aDispatch(getTestQuestFunc())
    // }, [])
    let [firstQuestType, setfirstQuestType] = (0, react_1.useState)([]);
    let [secondQuestType, setsecondQuestType] = (0, react_1.useState)([]);
    let [thirdQuestType, setthirdQuestType] = (0, react_1.useState)([]);
    let [forthQuestType, setforthQuestType] = (0, react_1.useState)([]);
    let [fivthQuestType, setfivthQuestType] = (0, react_1.useState)([]);
    const updateQuestionInfo = (arr) => {
        setfirstQuestType([]);
        setsecondQuestType([]);
        setthirdQuestType([]);
        setforthQuestType([]);
        setfivthQuestType([]);
        // debugger
        // console.log('weqqqqq')
        arr.map((val) => {
            if (val.category === 'A') {
                val.questions.map((val) => {
                    setfirstQuestType(val.questionType);
                });
            }
            else if (val.category === 'B') {
                val.questions.map((val) => {
                    if (val.uniqName === 'short') {
                        setsecondQuestType(val.questionType);
                    }
                    else {
                        setthirdQuestType(val.questionType);
                    }
                });
            }
            else {
                val.questions.map((val) => {
                    if (val.uniqName === 'shortbtype') {
                        setforthQuestType(val.questionType);
                    }
                    else {
                        setfivthQuestType(val.questionType);
                    }
                });
            }
            // val.questions.map((val1) => {
            //     if (val1.uniqName === 'choose') {
            //         setfirstQuestType(val1.questionType)
            //         // val1.questionType.map((val2) => {
            //         //     setfirstQuestType([...firstQuestType, val2])
            //         //     // firstQuestType.push(val2)
            //         // })
            //     } else if (val1.uniqName === 'short') {
            //         setsecondQuestType(val1.questionType)
            //         // val1.questionType.map((val2) => {
            //         //     // secondQuestType.push(val2)
            //         //     setsecondQuestType([...secondQuestType, val2])
            //         // })
            //     } else if (val1.uniqName === 'shortandvariant') {
            //         setthirdQuestType(val1.questionType)
            //         // val1.questionType.map((val2) => {
            //         //     // thirdQuestType.push(val2)
            //         //     setthirdQuestType([...thirdQuestType, val2])
            //         // })
            //     } else if (val1.uniqName === 'shortbtype') {
            //         setforthQuestType(val1.questionType)
            //         // val1.questionType.map((val2) => {
            //         //     // forthQuestType.push(val2)
            //         //     setforthQuestType([...forthQuestType, val2])
            //         // })
            //     }
            // })
        });
        console.log(firstQuestType, secondQuestType, thirdQuestType, forthQuestType, fivthQuestType, 'firstQuestType, secondQuestType, thirdQuestTypefirstQuestType, secondQuestType, thirdQuestTypefirstQuestType, secondQuestType, thirdQuestType');
        // dispatch(clearArrFunc())
        // for (let i = 0; i < 3; i++) {
        //     // debugger
        //     let lng = allTtests.filter((val) => val.selectedRpValue === allCategoryArr[i].uniqName)
        //     setNumSum(numSum += lng.length)
        //     let obj = {
        //         id: Number(i),
        //         longName: allCategoryArr[i].name,
        //         countValue: String(lng.length),
        //         selectedValue: allCategoryArr[i].uniqName,
        //         isLoopEnd: false,
        //         lastIndex: 0,
        //         initNumber: numSum - lng.length
        //     }
        //     dispatch(getInitInfoArr({ info: obj }))
        // }
    };
    // const answerArr = [
    //     {
    //         id: 0,
    //         text: 'first',
    //         picture: ''
    //     },
    //     {
    //         id: 1,
    //         text: 'second',
    //         picture: ''
    //     },
    //     {
    //         id: 2,
    //         text: 'third',
    //         picture: ''
    //     },
    //     {
    //         id: 3,
    //         text: 'forth',
    //         picture: ''
    //     },
    // ]
    const [answerArr, setAnswerArr] = (0, react_1.useState)([
        {
            id: (0, uuid_1.v4)(),
            idNum: 0,
            text: 'first',
            picture: ''
        },
        {
            id: (0, uuid_1.v4)(),
            idNum: 1,
            text: 'second',
            picture: ''
        },
        {
            id: (0, uuid_1.v4)(),
            idNum: 2,
            text: 'third',
            picture: ''
        },
        {
            id: (0, uuid_1.v4)(),
            idNum: 3,
            text: 'forth',
            picture: ''
        },
    ]);
    const ansSecArr = [
        {
            id: 0,
            name: 'first'
        },
        {
            id: 1,
            name: 'second'
        },
        {
            id: 2,
            name: 'third'
        },
        {
            id: 3,
            name: 'forth'
        },
        {
            id: 4,
            name: 'fivth'
        },
    ];
    const ansThirdArr = [
        {
            id: 0,
            name: 'first',
            apl: 'A'
        },
        {
            id: 1,
            name: 'second',
            apl: 'B'
        },
        {
            id: 2,
            name: 'third',
            apl: 'C'
        },
        {
            id: 3,
            name: 'forth',
            apl: 'D'
        }
    ];
    const [selectedRpValue, setSelectedVRpalue] = (0, react_1.useState)('choose');
    const [questionPoint, setPointAns] = (0, react_1.useState)('0.25');
    const [questionText, setQuestionText] = (0, react_1.useState)('');
    const [questionDescText, setQuestionDescText] = (0, react_1.useState)('');
    const [chckbxIndex, setChckbxIndex] = (0, react_1.useState)(0);
    const handleSelectRpChange = (event) => {
        setSelectedVRpalue(event.target.value);
    };
    const [selectedLvlValue, setSelectedVLvlalue] = (0, react_1.useState)('a');
    const handleSelectLvlpChange = (event) => {
        let str = event.target.value === 'a' ? 'choose' : event.target.value === 'b' ? 'short' : event.target.value === 'c' ? 'shortbtype' : '';
        setSelectedVRpalue(str);
        setSelectedVLvlalue(event.target.value);
    };
    // const [answersInputs, setAnswersInputs] = useState<AnswersInputsType>({
    //     input0: '',
    //     input1: '',
    //     input2: '',
    //     input3: '',
    // });
    // const handleAnswerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setAnswersInputs({
    //         ...answersInputs,
    //         [event.target.name]: event.target.value,
    //     });
    // };
    const [secTypeQsAnswers, setSecTypeQsAnswers] = (0, react_1.useState)({
        input0: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
    });
    const handleSecAnswerInputChange = (event) => {
        if (!isNaN(Number(event.target.value))) {
            setSecTypeQsAnswers(Object.assign(Object.assign({}, secTypeQsAnswers), { [event.target.name]: event.target.value }));
        }
    };
    const [thirdTypeQsAnswers, setThirdTypeQsAnswers] = (0, react_1.useState)('yes');
    // const handleThirdAnswerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     // if (!isNaN(Number(event.target.value))) {
    //         setThirdTypeQsAnswers({
    //             ...thirdTypeQsAnswers,
    //             [event.target.name]: event.target.value,
    //         });
    //     // }
    // };
    const [forthTypeBQsAnswers, setForthTypeQsAnswers] = (0, react_1.useState)('');
    const [selectedImage, setSelectedImage] = (0, react_1.useState)('');
    const [body, setBody] = (0, react_1.useState)('');
    const loadComp = (0, react_redux_1.useSelector)((state) => state.testR.loading);
    const [loadCompHk, setLoadCompHk] = (0, react_1.useState)(loadComp);
    (0, react_1.useEffect)(() => {
        setLoadCompHk(loadComp);
    }, [loadComp]);
    const sendNewQuestion = () => __awaiter(void 0, void 0, void 0, function* () {
        // updateQuestionInfo()
        // debugger
        let isChooseTypeInpValid = true;
        for (let i in answerArr) {
            if (answerArr[i].text === '') {
                isChooseTypeInpValid = false;
            }
        }
        if (questionText && questionPoint && ((isChooseTypeInpValid && selectedRpValue === 'choose') ||
            (secTypeQsAnswers.input0 && secTypeQsAnswers.input1 && secTypeQsAnswers.input2 && secTypeQsAnswers.input3 && secTypeQsAnswers.input4 && selectedRpValue === 'short') ||
            (forthTypeBQsAnswers && selectedRpValue === 'shortbtype') ||
            (thirdTypeQsAnswers && selectedRpValue === 'shortandvariant'))) {
            let obj = null;
            console.log('adwdwdw');
            if (selectedRpValue === 'choose') {
                obj = {
                    selectedRpValue,
                    questionPoint,
                    questionDescText,
                    questionText,
                    selectedLvlValue,
                    chckbxIndex,
                    selectedImage,
                    answersInputs: answerArr
                };
            }
            else if (selectedRpValue === 'short') {
                obj = {
                    selectedRpValue,
                    selectedLvlValue,
                    selectedImage,
                    questionDescText,
                    questionPoint,
                    questionText,
                    secTypeQsAnswers
                };
            }
            else if (selectedRpValue === 'shortandvariant') {
                obj = {
                    selectedLvlValue,
                    selectedRpValue,
                    questionDescText,
                    questionPoint,
                    selectedImage,
                    questionText,
                    thirdTypeQsAnswers
                };
            }
            else {
                obj = {
                    selectedLvlValue,
                    selectedRpValue,
                    questionDescText,
                    selectedImage,
                    questionPoint,
                    questionText,
                    forthTypeBQsAnswers
                };
            }
            console.log(obj, 'obj');
            dispatch((0, testReducer_1.addQuestionFunc)({ info: obj }));
            setBody('');
            setPointAns('0.25');
            setQuestionText('');
            setQuestionDescText('');
            setChckbxIndex(0);
            setForthTypeQsAnswers('');
            setThirdTypeQsAnswers('yes');
            setSelectedImage('');
            setSecTypeQsAnswers({
                input0: '',
                input1: '',
                input2: '',
                input3: '',
                input4: '',
            });
            setAnswerArr([
                {
                    id: (0, uuid_1.v4)(),
                    idNum: 0,
                    text: 'first',
                    picture: ''
                },
                {
                    id: (0, uuid_1.v4)(),
                    idNum: 1,
                    text: 'second',
                    picture: ''
                },
                {
                    id: (0, uuid_1.v4)(),
                    idNum: 2,
                    text: 'third',
                    picture: ''
                },
                {
                    id: (0, uuid_1.v4)(),
                    idNum: 3,
                    text: 'forth',
                    picture: ''
                }
            ]);
            // setAnswersInputs({
            //     input0: '',
            //     input1: '',
            //     input2: '',
            //     input3: '',
            // })
        }
        // await aDispatch(sendQuestionFunc({ info: obj }))
        // await aDispatch(getQuestionFunc())
    });
    console.log(questionDescText, 'questionDescText');
    // third part section
    const newTstItems = (0, react_redux_1.useSelector)((state) => state.makeTestR.allQuestTest);
    const [newTestItemArr, setNewTestItemArr] = (0, react_1.useState)(newTstItems);
    (0, react_1.useEffect)(() => {
        setNewTestItemArr(newTstItems);
    }, [newTstItems]);
    const [forthTypeQsAnswers, setForthypeQsAnswers] = (0, react_1.useState)({
        // a
        thchoose: '0',
        // b
        thshort: '0',
        thshortb: '0',
        // c
        thshortanvariant: '0',
        thshortcctgry: '0'
    });
    const handleForthAnswerInputChange = (event) => {
        if (!isNaN(Number(event.target.value))) {
            setForthypeQsAnswers(Object.assign(Object.assign({}, forthTypeQsAnswers), { [event.target.name]: event.target.value }));
        }
    };
    const [isWrongNumb, setIsWrongNumb] = (0, react_1.useState)('');
    const [nwTestsqInfo, setNwTestsqInfo] = (0, react_1.useState)({
        building: '',
        resultNum: '',
        clssNum: '',
        arName: '',
        teachName: '',
        date: '',
        clssNm: ''
    });
    const handlenewTstInfInputChange = (event) => {
        // if (!isNaN(Number(event.target.value))) {
        setNwTestsqInfo(Object.assign(Object.assign({}, nwTestsqInfo), { [event.target.name]: event.target.value }));
        // }
    };
    const makeNewTestCompFunc = () => {
        if (firstQuestType.length < Number(forthTypeQsAnswers.thchoose)) {
            setIsWrongNumb('1');
        }
        else if (secondQuestType.length < Number(forthTypeQsAnswers.thshort)) {
            setIsWrongNumb('2');
        }
        else if (thirdQuestType.length < Number(forthTypeQsAnswers.thshortb)) {
            setIsWrongNumb('3');
        }
        else if (forthQuestType.length < Number(forthTypeQsAnswers.thshortcctgry)) {
            setIsWrongNumb('4');
        }
        else if (fivthQuestType.length < Number(forthTypeQsAnswers.thshortanvariant)) {
            setIsWrongNumb('5');
        }
        else {
            for (let i in forthTypeQsAnswers) {
                if (forthTypeQsAnswers[i] === '' || forthTypeQsAnswers[i] === '0') {
                    switch (true) {
                        case forthTypeQsAnswers.thchoose === '0':
                            forthTypeQsAnswers.thchoose = String(firstQuestType.length);
                            break;
                        case forthTypeQsAnswers.thshort === '0':
                            forthTypeQsAnswers.thshort = String(secondQuestType.length);
                            break;
                        case forthTypeQsAnswers.thshortb === '0':
                            forthTypeQsAnswers.thshortb = String(thirdQuestType.length);
                            break;
                        case forthTypeQsAnswers.thshortcctgry === '0':
                            forthTypeQsAnswers.thshortcctgry = String(forthQuestType.length);
                            break;
                        case forthTypeQsAnswers.thshortanvariant === '0':
                            forthTypeQsAnswers.thshortanvariant = String(fivthQuestType.length);
                            break;
                        default:
                            break;
                    }
                }
            }
            console.log(forthTypeQsAnswers, 'forthTypeQsAnswers');
            let isValid = true;
            console.log(nwTestsqInfo, 'nwTestsqInfo');
            for (let i in nwTestsqInfo) {
                if (nwTestsqInfo[i] === '') {
                    isValid = false;
                }
            }
            console.log(nwTestsqInfo);
            if (isValid) {
                console.log(forthTypeQsAnswers, 'forthTypeQsAnswers');
                dispatch((0, nTestReducer_1.newTestQuestionsInfoFunc)({ info: nwTestsqInfo }));
                console.log(forthTypeQsAnswers, '22223445222222');
                dispatch((0, nTestReducer_1.newTestQuestionsCountFunc)({ info: forthTypeQsAnswers }));
                console.log(forthTypeQsAnswers, allTtests, 'forthTypeQsAnswers,allTtestsforthTypeQsAnswers,allTtests');
                dispatch((0, studentReducer_1.changeStudentNumstInfo)({ info: forthTypeQsAnswers }));
                dispatch((0, studentReducer_1.changeStudentTestsInfo)({ info: allTtests }));
                // navigate('/new-test')
            }
        }
    };
    const examName = (0, react_redux_1.useSelector)((state) => state.testR.testName);
    const subjjectName = (0, react_redux_1.useSelector)((state) => state.subjectR.saveSubjectName);
    const currentExamNameClone = (0, react_redux_1.useSelector)((state) => state.testR.currentExamName);
    // const currentExamName = useSelector((state: AppStateType) => state.testR.currentExamName)
    // const currentSubjectName = useSelector((state: AppStateType) => state.testR.currentSubjectName)
    const createExam = () => {
        makeNewTestCompFunc();
        console.log(subjjectName, currentSubjectName, currentExamName, 'subjjectName');
        aDispatch((0, testReducerThunk_1.sendQuestionFunc)({ info: allTtests, name: examName, subjjectName: currentSubjectName, textInfo: chAnsQuest, otherInfo: nwTestsqInfo, questionCount: forthTypeQsAnswers }));
    };
    const updateExam = () => {
        makeNewTestCompFunc();
        console.log(subjjectName, examName);
        console.log(subjjectName, currentSubjectName, currentExamName, 'subjjectName');
        aDispatch((0, testReducerThunk_1.updateQuestionFunc)({ info: allTtests, name: currentExamNameClone, subjjectName: currentSubjectName, textInfo: chAnsQuest, otherInfo: nwTestsqInfo, questionCount: forthTypeQsAnswers }));
    };
    // sss image part
    const setImageFunc = (e) => {
        const fileInput = e.target;
        const selectedFile = fileInput.files && fileInput.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                var _a;
                setSelectedImage((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    const [allQuestionArr, setAllQuestionArr] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        let fstArr = [];
        getAllTestss.map((val) => {
            val.questions.map((val1) => {
                val1.questionType.map((val2) => {
                    fstArr.push(val2);
                });
            });
        });
        console.log(fstArr);
        setAllQuestionArr(fstArr);
    }, [getAllTestss]);
    const [isShow, setIsShow] = (0, react_1.useState)(true);
    // edit djid
    // const [body, setBody] = useState('')
    const handleBody = (e) => {
        console.log(e);
        setBody(e);
        // setQuestionText(e.target.value)
        setQuestionText(body);
    };
    const deletFuncCom = (val) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(allTtests, currentExamNameClone, currentSubjectName, chAnsQuest, nwTestsqInfo, forthTypeQsAnswers);
        console.log(getAllTestss, val, 'dwdgetAllTestss, val');
        // deleteQuestionFunc({ info: val })
        let arrClone = [];
        getAllTestss.map((val1) => {
            if (val1.category.toLowerCase() === val.selectedLvlValue) {
                val1.questions.map((val2) => {
                    if (val2.uniqName === val.selectedRpValue) {
                        console.log(val2.questionType, 'dd');
                        // val2.questionType = val2.questionType.filter(x => x.questionDescText !== val.questionDescText);
                        aDispatch((0, testReducerThunk_1.deleteQuestionFunc)({ val, val1, subjjectName: currentSubjectName, name: subjjectName }));
                        // await aDispatch(getExamsFunc())
                        // const index = val2.questionType.findIndex(x => x.questionDescText === val.questionDescText);
                        // if (index !== -1) {
                        //     // Check if val2.questionType is an array before attempting to splice
                        //     if (Array.isArray(val2.questionType)) {
                        //         val2.questionType.splice(index, 1);
                        //         console.log("Element removed successfully");
                        //         console.log(val2.questionType);
                        //     } else {
                        //         console.error("val2.questionType is not an array");
                        //     }
                        // } else {
                        //     console.error("Element not found in val2.questionType");
                        // }
                        // val2.questionType.map((val3, ind3) => {
                        //     if (val3.questionDescText === val.questionDescText) {
                        //         // arrClone = [...val2.questionType]
                        //         // console.log(arrClone, val2.questionType, 'arrClone')
                        //         // arrClone.splice(ind3, 1)
                        //         val2.questionType.splice(ind3, 1)
                        //     }
                        // })
                    }
                });
            }
        });
        console.log(getAllTestss, 'getAllTestssgetAllTestss222');
        // aDispatch(updateQuestionFunc({ info: allTtests, name: currentExamNameClone, subjjectName: currentSubjectName, textInfo: chAnsQuest, otherInfo: nwTestsqInfo, questionCount: forthTypeQsAnswers }))
    });
    const deleteInpFunc = (id) => {
        let arrClone = [...answerArr];
        arrClone.map((val, ind) => {
            if (val.id === id) {
                arrClone.splice(ind, 1);
            }
        });
        arrClone.map((val, ind) => {
            val.idNum = ind;
        });
        setAnswerArr(arrClone);
        console.log(arrClone);
    };
    const addInput = () => {
        let arrClone = [...answerArr];
        if (arrClone.length < 4) {
            let obj = {
                id: (0, uuid_1.v4)(),
                text: '',
                picture: '',
                idNum: arrClone.length,
            };
            arrClone.push(obj);
        }
        setAnswerArr(arrClone);
        console.log(arrClone, 'answerArr adding');
    };
    const changeInpTextFunc = (e, id) => {
        let arrClone = [...answerArr];
        arrClone.map((val) => {
            if (val.id === id) {
                val.text += e;
            }
        });
        setAnswerArr(arrClone);
        console.log(arrClone, 'answerArr change textt');
    };
    const setInpImageFunc = (e, id) => {
        const fileInput = e.target;
        const selectedFile = fileInput.files && fileInput.files[0];
        let arrClone = [...answerArr];
        arrClone.map((val) => {
            if (val.id === id && selectedFile) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    var _a;
                    val.picture = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                    setAnswerArr(arrClone);
                };
                reader.readAsDataURL(selectedFile);
            }
        });
        // setAnswerArr(arrClone)
        console.log(arrClone, 'answerArr change textt');
    };
    const items = [
        // {
        //     key: '1',
        //     label: 'Թեստի նախնական տեսք',
        //     children: (
        //         <div className={styles.test_content_container}>
        //             <div className={styles.test_content_title}>
        //                 Ձևաթղթի ստեղծման համար
        //             </div>
        //             <div className={styles.test_content_title}>
        //                 Խնդրում ենք լրացրեք դաշտերը
        //             </div>
        //             <div className={styles.test_content_in_items}>
        //                 <div className={styles.test_content_in_items_1}>
        //                     <div className={styles.test_content_in_items_1_1}>
        //                         Խնդրում ենք նշեք քննության տարեթիվը
        //                     </div>
        //                     <div className={styles.test_content_in_items_1_2}>
        //                         <input type="number" name='examYear' onChange={handleInputChange} />
        //                     </div>
        //                 </div>
        //                 <div className={styles.test_content_in_items_1}>
        //                     <div className={styles.test_content_in_items_1_1}>
        //                         Խնդրում ենք նշեք քննության տեսակը
        //                     </div>
        //                     <div className={styles.test_content_in_items_1_2}>
        //                         <input type="text" name='examType' onChange={handleInputChange} />
        //                     </div>
        //                 </div>
        //                 <div className={styles.test_content_in_items_1}>
        //                     <div className={styles.test_content_in_items_1_1}>
        //                         Խնդրում ենք նշեք քննության առարկայի անունը
        //                     </div>
        //                     <div className={styles.test_content_in_items_1_2}>
        //                         <input type="text" name='subjectName' onChange={handleInputChange} />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className={styles.test_content_inp_content}>
        //                 <div className={styles.test_content_inp_content_in_items}>
        //                     {
        //                         allCategoryArr.map((val, ind) => {
        //                             // let itemFltLength = getAllTestss.filter((val1) => val1.selectedRpValue === val.uniqName)
        //                             let itemFltLength
        //                             ind === 0 ? itemFltLength = firstQuestType : ind === 1 ? itemFltLength = secondQuestType : ind === 2 ? itemFltLength = thirdQuestType : ind === 3 ? itemFltLength = forthQuestType : itemFltLength = fivthQuestType
        //                             // console.log(itemFltLength, 'itemFltLengthitemFltLengthitemFltLength')
        //                             // setCountValue(String(itemFltLength.length))
        //                             // if (itemFltLength.length > 0) {
        //                             //     setInpVvalue(String(itemFltLength.length))
        //                             //     setCountValue(String(itemFltLength.length))
        //                             //     setSelectedValue(val.uniqName)
        //                             //     setVariant(val.variant)
        //                             //     setActiveInpVal(val.uniqName)
        //                             //     setLongName(val.name)
        //                             //     // saveInfo(true)
        //                             // }
        //                             return (
        //                                 <div className={styles.test_content_inp_content_in_items_im}>
        //                                     <div className={styles.test_content_in_items_1_1}>
        //                                         {val.name}
        //                                     </div>
        //                                     <div className={styles.test_content_in_items_1_2_b}>
        //                                         {
        //                                             val.type === 'nw'
        //                                                 ?
        //                                                 <input
        //                                                     type="number"
        //                                                     // value={(val.uniqName === activeInpVal) ? inpVvalue : val.type === 'nw' ? itemFltLength.length : ''}
        //                                                     value={itemFltLength.length}
        //                                                     onChange={(e) => {
        //                                                         setInpVvalue(e.target.value)
        //                                                         setCountValue(e.target.value)
        //                                                         setSelectedValue(val.uniqName)
        //                                                         setVariant(val.variant)
        //                                                         // setActiveInpVal(val.uniqName)
        //                                                         setLongName(val.name)
        //                                                     }} />
        //                                                 :
        //                                                 <input
        //                                                     type="number"
        //                                                     // value={(val.uniqName === activeInpVal) ? inpVvalue : val.type === 'nw' ? itemFltLength.length : ''}
        //                                                     name={`${ind}`}
        //                                                     onChange={(e) => {
        //                                                         handleQuestWrInputChange(e, ind)
        //                                                         // setInpVvalue(e.target.value)
        //                                                         // setCountValue(e.target.value)
        //                                                         // setSelectedValue(val.uniqName)
        //                                                         // setVariant(val.variant)
        //                                                         // setActiveInpVal(val.uniqName)
        //                                                         // setLongName(val.name)
        //                                                     }} />
        //                                         }
        //                                     </div>
        //                                 </div>
        //                             )
        //                         })
        //                     }
        //                 </div>
        //                 {/* <div className={styles.test_content_inp_content_in_items_btn}>
        //                 <button onClick={() => {
        //                     if (Number(countValue) > 0) {
        //                         // setActiveInpVal('')
        //                         setNumSum(numSum += Number(countValue))
        //                         saveInfo(getVariant)
        //                     }
        //                 }}>Հաստատել</button>
        //             </div> */}
        //                 {/* <div className={styles.test_content_inp_content_in_items_results_content}>
        //                 {
        //                     infoArr.map((val) => {
        //                         return (
        //                             <div className={styles.test_content_inp_content_in_items_results_content_items}>
        //                                 {val.longName} {val.initNumber} համարից մինչև {val.initNumber + Number(val.countValue)} համարը
        //                             </div>
        //                         )
        //                     })
        //                 }
        //                 {
        //                     infoWrArr.map((val) => {
        //                         return (
        //                             <div className={styles.test_content_inp_content_in_items_results_content_items}>
        //                                 {val.longName} {val.initNumber} համարից մինչև {val.initNumber + Number(val.countValue)} համարը
        //                             </div>
        //                         )
        //                     })
        //                 }
        //             </div> */}
        //                 <div className={styles.test_content_inp_content_in_items_sec_btn}>
        //                     <button onClick={getAllExamOthInfoCompFunc}>Գեներացնել ձևաթուղթ</button>
        //                 </div>
        //             </div>
        //         </div>
        //     ),
        // },
        {
            key: '2',
            label: (<div onClick={() => setIsShow(true)}>Հարցերի ավելացում</div>),
            children: (<>
                    <div className={testStl_module_css_1.default.question_big_content_s}>
                        {allQuestionArr.map((val) => {
                    return (<div className={testStl_module_css_1.default.question_big_content_s_1_content}>
                                        <div className={testStl_module_css_1.default.question_big_content_s_1} dangerouslySetInnerHTML={{ __html: val.questionText }}>

                                        </div>
                                        <div className={testStl_module_css_1.default.question_big_content_s_2} onClick={() => deletFuncCom(val)}>
                                            {loadCompHk
                            ?
                                <div className={testStl_module_css_1.default.login_content_text_item_loader}>
                                                        <img src={_2_gif_1.default} alt=""/>
                                                    </div>
                            :
                                null}
                                            <button><fa6_1.FaTrash /></button>
                                        </div>
                                    </div>);
                })}
                    </div>

                    {isShow
                    ?
                        <div className={testStl_module_css_1.default.add_tstt_btn_ovrl}>
                                <button className={testStl_module_css_1.default.add_tstt_btn} onClick={() => setIsShow(false)}>
                                    Ավելացնել հարց
                                </button>
                            </div>
                    :
                        <>
                                <div className={testStl_module_css_1.default.right_side_content}>
                                    <div className={testStl_module_css_1.default.right_side_1}>
                                        Գեներացնել թեստը
                                    </div>
                                    <div className={testStl_module_css_1.default.right_side_2_1}>
                                        <div className={testStl_module_css_1.default.right_side_2_1_1}>
                                            Բարդություն
                                        </div>
                                        <div className={testStl_module_css_1.default.right_side_2_1_2}>
                                            <select onChange={handleSelectLvlpChange}>
                                                <option value="a" selected>A մակարդակ</option>
                                                <option value="b">B մակարդակ</option>
                                                <option value="c">C մակարդակ</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={testStl_module_css_1.default.right_side_2}>
                                        <div className={testStl_module_css_1.default.right_side_2_1}>
                                            <div className={testStl_module_css_1.default.right_side_2_1_1}>
                                                Կատեգորիա
                                            </div>
                                            <div className={testStl_module_css_1.default.right_side_2_1_2}>
                                                {selectedLvlValue === 'a'
                                ?
                                    <select onChange={handleSelectRpChange}>
                                                            <option value="choose" selected>Ընտրովի պատասխաններ</option>
                                                        </select>
                                :
                                    selectedLvlValue === 'b'
                                        ?
                                            <select onChange={handleSelectRpChange}>
                                                                <option value="short" selected>Կարճ պատասխաններ</option>
                                                                <option value="shortbtype">Կարճ պատասխաններ B</option>

                                                            </select>
                                        :
                                            selectedLvlValue === 'c'
                                                ?
                                                    <select onChange={handleSelectRpChange}>
                                                                    <option value="shortbtype" selected>Կարճ պատասխաններ B</option>
                                                                    <option value="shortandvariant">Կարճ և տարբերակներով պատասխաններ</option>
                                                                </select>
                                                :
                                                    null}
                                            </div>
                                        </div>
                                        <div className={testStl_module_css_1.default.right_side_2_2}>
                                            <div className={testStl_module_css_1.default.right_side_2_1_1_b}>
                                                Միավոր
                                            </div>
                                            <div className={testStl_module_css_1.default.right_side_2_1_2}>
                                                <select onChange={(e) => setPointAns(e.target.value)}>
                                                    <option value="0.25" selected>0.25 միավոր</option>
                                                    <option value="0.5">0.5 միավոր</option>
                                                    <option value="1">1 միավոր</option>
                                                </select>
                                                {/* <input type="number" value={questionPoint} onChange={(e) => setPointAns(e.target.value)} /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={testStl_module_css_1.default.right_side_3}>
                                        <div className={testStl_module_css_1.default.right_side_2_1_1}>
                                            Խնդրում ենք գրեք հարցը
                                        </div>
                                        <div className={testStl_module_css_1.default.right_side_2_2_3_b_tp_2}>
                                            <react_quill_1.default placeholder='fegrkg' onChange={handleBody} value={body} modules={{
                                toolbar: [
                                    [
                                        { header: "1" },
                                        { header: "2" },
                                        { header: [3, 4, 5, 6] },
                                    ],
                                    [
                                        "bold",
                                        "italic",
                                        "underline",
                                        "strike",
                                        "blockquote"
                                    ],
                                    ["code-block"]
                                ]
                            }}/>
                                            {/* <input type="text" value={questionText} onChange={(e) => setQuestionText(e.target.value)} /> */}
                                        </div>
                                    </div>
                                    <div className={testStl_module_css_1.default.right_side_3}>
                                        <div className={testStl_module_css_1.default.right_side_2_1_1}>
                                            Խնդրում ենք գրեք նկարագրությունը
                                        </div>
                                        <div className={testStl_module_css_1.default.right_side_2_2_3_b_tp}>
                                            <input type="text" value={questionDescText} onChange={(e) => setQuestionDescText(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className={testStl_module_css_1.default.right_side_3}>
                                        <div className={testStl_module_css_1.default.right_side_2_1_1}>
                                            Խնդրում ենք տեղադրեք նկար
                                        </div>
                                        <div className={testStl_module_css_1.default.right_side_2_2_3_b_tp}>
                                            <input type="file" onChange={setImageFunc} accept="image/png, image/jpeg"/>
                                        </div>
                                        <div className={testStl_module_css_1.default.right_side_2_2_3_b_tp_pic}>
                                            <img src={selectedImage ? selectedImage : ''} alt=""/>
                                        </div>
                                    </div>

                                    <div className={testStl_module_css_1.default.right_side_4}>
                                        <div className={testStl_module_css_1.default.right_side_2_1_1}>
                                            Խնդրում ենք գրեք պատասխանները
                                        </div>
                                        <div className={testStl_module_css_1.default.right_side_3_2}>
                                            {selectedRpValue === 'choose'
                                ?
                                    <>
                                                        {answerArr.map((val, ind) => {
                                            return (<>
                                                                        <div className={testStl_module_css_1.default.right_side_3_2_t}>
                                                                            <div className={testStl_module_css_1.default.right_side_2_1_2_1}>
                                                                                {ind === chckbxIndex
                                                    ?
                                                        <input checked onClick={() => setChckbxIndex(val.idNum)} type="radio" name='tstf'/>
                                                    :
                                                        <input onClick={() => setChckbxIndex(val.idNum)} type="radio" name='tstf'/>}
                                                                            </div>
                                                                            <div onClick={() => deleteInpFunc(val.id)} className={testStl_module_css_1.default.right_side_2_1_2_2_del}>
                                                                                <fa6_1.FaRegTrashCan />
                                                                            </div>

                                                                            <div className={testStl_module_css_1.default.right_side_2_1_2_2}>
                                                                                {/* <input value={ind === 0 ? answersInputs.input0 : ind === 1 ? answersInputs.input1 : ind === 2 ? answersInputs.input2 : answersInputs.input3} onChange={handleAnswerInputChange} type="text" name={`input${val.id}`} /> */}
                                                                                <input placeholder='Խնդրում ենք գրեք հարցի պատասխանը' type="text" onChange={(e) => changeInpTextFunc(e.target.value, val.id)}/>
                                                                            </div>
                                                                            <div className={testStl_module_css_1.default.right_side_2_1_2_3c_img_prt}>
                                                                                <div className={testStl_module_css_1.default.right_side_2_1_2_3c_img_prt_1}>
                                                                                    <input type="file" onChange={(e) => setInpImageFunc(e, val.id)} accept="image/png, image/jpeg"/>
                                                                                </div>
                                                                                <div className={testStl_module_css_1.default.right_side_2_1_2_3c_img_prt_2}>
                                                                                    <img src={val.picture ? val.picture : _1_png_1.default} alt=""/>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </>);
                                        })}
                                                        {/* <div> */}
                                                        <div onClick={() => addInput()} className={testStl_module_css_1.default.right_side_2_1_2_2_del}><fa6_1.FaPlus /></div>
                                                        {/* </div> */}
                                                    </>
                                :
                                    selectedRpValue === 'short'
                                        ?
                                            <div className={testStl_module_css_1.default.right_side_4_sq}>
                                                            {ansSecArr.map((val, ind) => {
                                                    let propertyName = `input${val.id}`;
                                                    return (<div className={testStl_module_css_1.default.test_content_third_content_4_1_1_2_1}>
                                                                            <input onChange={handleSecAnswerInputChange} id={`inp${ind}`} onInput={() => {
                                                            var _a;
                                                            (_a = document.getElementById(`inp${ind + 1}`)) === null || _a === void 0 ? void 0 : _a.focus();
                                                        }} value={secTypeQsAnswers[propertyName]} type="text" name={`input${val.id}`} maxLength={1} className={testStl_module_css_1.default.txtinp}/>
                                                                        </div>);
                                                })}
                                                        </div>
                                        :
                                            selectedRpValue === 'shortandvariant'
                                                ?
                                                    <div className={testStl_module_css_1.default.right_side_4_sq}>
                                                                {/* {
                                        ansThirdArr.map((val, ind) => {

                                            return ( */}
                                                                <div className={testStl_module_css_1.default.right_side_4_sq_e}>
                                                                    {/* <div className={styles.right_side_4_sq_e_lttr}>
                                                    {val.apl}
                                                </div>
                                                <div className={styles.test_content_third_content_4_1_1_2_1_b}>
                                                    <input onChange={handleThirdAnswerInputChange} id={`inp${ind}`} onInput={() => {

                                                        document.getElementById(`inp${ind + 1}`)?.focus()

                                                    }} value={thirdTypeQsAnswers[val.apl]} type="text" name={val.apl} maxLength={1} className={styles.txtinp} />
                                                </div> */}



                                                                    <div className={testStl_module_css_1.default.right_side_4_sq_e}>
                                                                        {thirdTypeQsAnswers === 'yes'
                                                            ?
                                                                <>

                                                                                    <div>
                                                                                        <div>
                                                                                            Ճիշտ է
                                                                                        </div>
                                                                                        <div>

                                                                                            <input checked type="radio" name='1' onClick={() => setThirdTypeQsAnswers('yes')}/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div>
                                                                                            Սխալ է
                                                                                        </div>
                                                                                        <div>
                                                                                            <input type="radio" name='1' onClick={() => setThirdTypeQsAnswers('no')}/>
                                                                                        </div>
                                                                                    </div>
                                                                                </>
                                                            :
                                                                <>

                                                                                    <div>
                                                                                        <div>
                                                                                            Ճիշտ է
                                                                                        </div>
                                                                                        <div>

                                                                                            <input type="radio" name='1' onClick={() => setThirdTypeQsAnswers('yes')}/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div>
                                                                                            Սխալ է
                                                                                        </div>
                                                                                        <div>
                                                                                            <input type="radio" name='1' onClick={() => setThirdTypeQsAnswers('no')}/>
                                                                                        </div>
                                                                                    </div>
                                                                                </>}


                                                                    </div>
                                                                </div>
                                                                {/* )
                                        })
                                    } */}
                                                            </div>
                                                :
                                                    selectedRpValue === 'shortbtype'
                                                        ?
                                                            <div>
                                                                    <input value={forthTypeBQsAnswers} type="text" onChange={(e) => setForthTypeQsAnswers(e.target.value)}/>
                                                                </div>
                                                        :
                                                            null}





                                        </div>
                                    </div>
                                    <div className={testStl_module_css_1.default.right_side_5}>
                                        <div className={testStl_module_css_1.default.right_side_5_1}>
                                            <div className={testStl_module_css_1.default.right_side_5_1_1}>
                                                <span>Հարցերի քանակը</span>
                                                {selectedRpValue === 'choose'
                                // ? newTestItemArr.filter((val) => val.selectedRpValue === 'choose').length
                                ? firstQuestType.length
                                : selectedRpValue === 'short'
                                    // ? newTestItemArr.filter((val) => val.selectedRpValue === 'short').length
                                    ? secondQuestType.length
                                    : selectedRpValue === 'shortandvariant'
                                        // ? newTestItemArr.filter((val) => val.selectedRpValue === 'shortandvariant').length
                                        ? thirdQuestType.length
                                        :
                                            selectedRpValue === 'shortbtype'
                                                ?
                                                    // newTestItemArr.filter((val) => val.selectedRpValue === 'shortbtype').length
                                                    forthQuestType.length
                                                :
                                                    null}
                                            </div>
                                        </div>

                                        {loadCompHk
                                ?
                                    <div className={testStl_module_css_1.default.login_content_text_item_loader}>
                                                    <img src={_2_gif_1.default}/>
                                                </div>
                                :
                                    null}

                                        <div className={testStl_module_css_1.default.right_side_5_2}>
                                            <button onClick={sendNewQuestion}>Ավելացնել</button>
                                        </div>
                                        <div className={testStl_module_css_1.default.right_side_5_2}>
                                            <button onClick={() => setIsShow(true)}>Չեղարկել</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {/* ss */}
                                    {/* <FroalaEditorComponent
                                model={model}
                                onModelChange={(e: any) => setModel(e)}
                                config={{
                                    placeholder: 'Խնդում ենք գրեք հարցը։',
                                    toolbarButtons: {
                                        moreText: {
                                            buttons: [
                                                'bold',
                                                'italic',
                                                'underline',
                                                'strikeThrough',
                                                'subscript',


                                            ]
                                        }
                                    }
                                }}

                            /> */}

                                    {/* <ReactQuill
                                placeholder='fegrkg'
                                onChange={handleBody}
                                value={body}
                                modules={
                                    {
                                        toolbar: [
                                            [
                                                { header: "1" },
                                                { header: "2" },
                                                { header: [3, 4, 5, 6] },

                                            ],
                                            [
                                                "bold",
                                                "italic",
                                                "underline",
                                                "strike",
                                                "blockquote"
                                            ],
                                            ["code-block"]
                                        ]
                                    }
                                }
                            /> */}
                                </div>
                                {/* <div dangerouslySetInnerHTML={{ __html: body }}>

                            </div>
                            <div dangerouslySetInnerHTML={{ __html: '<h2 style="color:red"}>ewewe</h2>' }}>

                            </div> */}
                            </>}
                </>),
        },
        {
            key: '3',
            label: 'Թեստի տվյալների փոփոխում',
            children: (<div className={testStl_module_css_1.default.create_test_content}>
                    <div className={testStl_module_css_1.default.create_test_content_item_1}>
                        <div className={testStl_module_css_1.default.create_test_content_item_1ctg}>
                            A մակարդակ
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                            Խնդրում ենք նշեք ընտրովի հարցերի քանակը
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_txt_content}>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_1}>
                                <input type="text" name='thchoose' onChange={handleForthAnswerInputChange}/>
                            </div>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_2}>
                                {
                // getAllTestss.filter((val) => val.selectedRpValue === 'choose').length
                // forthTypeQsAnswers['thchoose']
                // getAllTestss[0].questions[0].questionType.length
                firstQuestType.length}
                                <span>հարց</span>
                            </div>
                        </div>
                        {(isWrongNumb === '1') ? <div className={testStl_module_css_1.default.create_test_content_item_1_3d}>Այդպիսի քանակով հարցեր գոյություն չունեն</div> : null}
                    </div>
                    <div className={testStl_module_css_1.default.create_test_content_item_1}>
                        <div className={testStl_module_css_1.default.create_test_content_item_1ctg}>
                            B մակարդակ
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                            Խնդրում ենք նշեք կարճ պատասխանով հարցերի քանակը
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_txt_content}>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_1}>
                                <input type="text" name='thshort' onChange={handleForthAnswerInputChange}/>
                            </div>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_2}>
                                {
                // getAllTestss.filter((val) => val.selectedRpValue === 'short').length
                // forthTypeQsAnswers['thshort']
                // getAllTestss[1].questions[0].questionType.length
                secondQuestType.length}
                                <span>հարց</span>
                            </div>
                        </div>
                        {(isWrongNumb === '2') ? <div className={testStl_module_css_1.default.create_test_content_item_1_3d}>Այդպիսի քանակով հարցեր գոյություն չունեն</div> : null}
                    </div>

                    <div className={testStl_module_css_1.default.create_test_content_item_1}>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                            Խնդրում ենք նշեք կարճ պատասխանով (B) հարցերի քանակը
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_txt_content}>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_1}>
                                <input type="number" name='thshortb' onChange={handleForthAnswerInputChange}/>
                            </div>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_2}>
                                {
                // getAllTestss.filter((val) => val.selectedRpValue === 'shortandvariant').length
                // forthTypeQsAnswers['thshortb']
                // getAllTestss[1].questions[1].questionType.length
                thirdQuestType.length}
                                <span>հարց</span>
                            </div>
                        </div>
                        {(isWrongNumb === '3') ? <div className={testStl_module_css_1.default.create_test_content_item_1_3d}>Այդպիսի քանակով հարցեր գոյություն չունեն</div> : null}
                    </div>

                    <div className={testStl_module_css_1.default.create_test_content_item_1}>
                        <div className={testStl_module_css_1.default.create_test_content_item_1ctg}>
                            C մակարդակ
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                            Խնդրում ենք նշեք կարճ պատասխանով հարցերի քանակը
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_txt_content}>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_1}>
                                <input type="text" name='thshortcctgry' onChange={handleForthAnswerInputChange}/>
                            </div>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_2}>
                                {
                // getAllTestss.filter((val) => val.selectedRpValue === 'short').length
                // forthTypeQsAnswers['thshortcctgry']
                // getAllTestss[2].questions[0].questionType.length
                forthQuestType.length}
                                <span>հարց</span>
                            </div>
                        </div>
                        {(isWrongNumb === '5') ? <div className={testStl_module_css_1.default.create_test_content_item_1_3d}>Այդպիսի քանակով հարցեր գոյություն չունեն</div> : null}
                    </div>
                    <div className={testStl_module_css_1.default.create_test_content_item_1}>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                            Խնդրում ենք նշեք պնդումներով հարցերի քանակը
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_txt_content}>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_1}>
                                <input type="number" name='thshortanvariant' onChange={handleForthAnswerInputChange}/>
                            </div>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_2}>
                                {
                // getAllTestss.filter((val) => val.selectedRpValue === 'shortandvariant').length
                // forthTypeQsAnswers['thshortanvariant']
                // getAllTestss[2].questions[1].questionType.length
                fivthQuestType.length}
                                <span>հարց</span>
                            </div>
                        </div>
                        {(isWrongNumb === '4') ? <div className={testStl_module_css_1.default.create_test_content_item_1_3d}>Այդպիսի քանակով հարցեր գոյություն չունեն</div> : null}
                    </div>


                    <div className={testStl_module_css_1.default.create_test_content_inp_q_content}>
                        <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item}>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                                Հաստատության անվանումը՝
                            </div>
                            <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item_2}>
                                <input type="text" name='building' onChange={handlenewTstInfInputChange}/>
                            </div>
                        </div>

                        <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item}>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                                Խմբի համարը
                            </div>
                            <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item_2}>
                                <input type="text" name='clssNm' onChange={handlenewTstInfInputChange}/>
                            </div>
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item}>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                                Արդյունքի համարը՝
                            </div>
                            <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item_2}>
                                <input type="text" name='resultNum' onChange={handlenewTstInfInputChange}/>
                            </div>
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item}>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                                Կուրսի համարը՝
                            </div>
                            <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item_2}>
                                <input type="text" name='clssNum' onChange={handlenewTstInfInputChange}/>
                            </div>
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item}>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                                Առարկայի անվանումը՝
                            </div>
                            <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item_2}>
                                <input type="text" name='arName' onChange={handlenewTstInfInputChange}/>
                            </div>
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item}>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                                Դասախոսի անունը՝
                            </div>
                            <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item_2}>
                                <input type="text" name='teachName' onChange={handlenewTstInfInputChange}/>
                            </div>
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item}>
                            <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                                Օր՝
                            </div>
                            <div className={testStl_module_css_1.default.create_test_content_inp_q_content_1_item_2}>
                                <input type="date" name='date' onChange={handlenewTstInfInputChange}/>
                            </div>
                        </div>
                    </div>




                    {/* <div className={styles.create_test_content_item_2}>
                <button onClick={makeNewTestCompFunc}>Ստեղծել թեստը</button>
            </div> */}
                </div>),
        },
    ];
    return (<>
            <div className={testStl_module_css_1.default.test_content}>




                <antd_1.Tabs 
    // tabPosition={'left'}
    items={items} type="card" style={{ width: '100%', paddingTop: '3em' }}>
                    {items.map(item => (<TabPane_1.default tab={item.key} key={item.key}>
                            {item.children}
                        </TabPane_1.default>))}
                </antd_1.Tabs>

            </div>
            <div className={testStl_module_css_1.default.create_button_contents}>
                <button onClick={() => {
            navigate('/admin');
        }}>Չեղարկել</button>
                {isuporNot
            ?
                <button onClick={updateExam}>Թարմացնել</button>
            :
                <button onClick={createExam}>Ստեղծել</button>}

            </div>
        </>);
};
exports.TestComp = TestComp;
exports.default = exports.TestComp;
