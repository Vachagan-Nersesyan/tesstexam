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
let firstQuestType = [];
let secondQuestType = [];
let thirdQuestType = [];
let forthQuestType = [];
const TestComp = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
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
    const [chAnsQuest, setChAnsQuest] = (0, react_1.useState)({
        examYear: 0,
        examType: '',
        subjectName: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChAnsQuest((prevData) => (Object.assign(Object.assign({}, prevData), { [name]: value })));
    };
    const getAllExamOthInfoCompFunc = () => {
        // if (Number(countValue) > 0) {
        // setActiveInpVal('')
        setNumSum(numSum += Number(countValue));
        saveInfo(getVariant);
        // }
        dispatch((0, testReducer_1.getAllExamInfoCountFunc)({ info: chAnsQuest }));
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
            name: 'Պնդումներով պատասխաններ',
            uniqName: 'shortandvariant',
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
    const allTtests = (0, react_redux_1.useSelector)((state) => state.testR.allTests);
    const [getAllTestss, setAllTestss] = (0, react_1.useState)(allTtests);
    (0, react_1.useEffect)(() => {
        setAllTestss(allTtests);
        updateQuestionInfo(allTtests);
    }, [allTtests]);
    const updateQuestionInfo = (arr) => {
        firstQuestType = [];
        secondQuestType = [];
        thirdQuestType = [];
        forthQuestType = [];
        arr.map((val) => {
            val.questions.map((val1) => {
                if (val1.uniqName === 'choose') {
                    val1.questionType.map((val2) => {
                        firstQuestType.push(val2);
                    });
                }
                else if (val1.uniqName === 'short') {
                    val1.questionType.map((val2) => {
                        secondQuestType.push(val2);
                    });
                }
                else if (val1.uniqName === 'shortandvariant') {
                    val1.questionType.map((val2) => {
                        thirdQuestType.push(val2);
                    });
                }
                else if (val1.uniqName === 'shortbtype') {
                    val1.questionType.map((val2) => {
                        forthQuestType.push(val2);
                    });
                }
            });
        });
        console.log(firstQuestType, secondQuestType, thirdQuestType, forthQuestType, 'firstQuestType, secondQuestType, thirdQuestTypefirstQuestType, secondQuestType, thirdQuestTypefirstQuestType, secondQuestType, thirdQuestType');
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
    const answerArr = [
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
    ];
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
    const [questionPoint, setPointAns] = (0, react_1.useState)('');
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
    const [answersInputs, setAnswersInputs] = (0, react_1.useState)({
        input0: '',
        input1: '',
        input2: '',
        input3: '',
    });
    const handleAnswerInputChange = (event) => {
        setAnswersInputs(Object.assign(Object.assign({}, answersInputs), { [event.target.name]: event.target.value }));
    };
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
    const [thirdTypeQsAnswers, setThirdTypeQsAnswers] = (0, react_1.useState)('');
    // const handleThirdAnswerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     // if (!isNaN(Number(event.target.value))) {
    //         setThirdTypeQsAnswers({
    //             ...thirdTypeQsAnswers,
    //             [event.target.name]: event.target.value,
    //         });
    //     // }
    // };
    const [forthTypeBQsAnswers, setForthTypeQsAnswers] = (0, react_1.useState)('');
    const sendNewQuestion = () => __awaiter(void 0, void 0, void 0, function* () {
        // updateQuestionInfo()
        let obj = null;
        if (selectedRpValue === 'choose') {
            obj = {
                selectedRpValue,
                questionPoint,
                questionDescText,
                questionText,
                selectedLvlValue,
                chckbxIndex,
                answersInputs
            };
        }
        else if (selectedRpValue === 'short') {
            obj = {
                selectedRpValue,
                selectedLvlValue,
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
                questionText,
                thirdTypeQsAnswers
            };
        }
        else {
            obj = {
                selectedLvlValue,
                selectedRpValue,
                questionDescText,
                questionPoint,
                questionText,
                forthTypeBQsAnswers
            };
        }
        console.log(obj, 'obj');
        dispatch((0, testReducer_1.addQuestionFunc)({ info: obj }));
        // await aDispatch(sendQuestionFunc({ info: obj }))
        // await aDispatch(getQuestionFunc())
    });
    // third part section
    const newTstItems = (0, react_redux_1.useSelector)((state) => state.makeTestR.allQuestTest);
    const [newTestItemArr, setNewTestItemArr] = (0, react_1.useState)(newTstItems);
    (0, react_1.useEffect)(() => {
        setNewTestItemArr(newTstItems);
    }, [newTstItems]);
    const [forthTypeQsAnswers, setForthypeQsAnswers] = (0, react_1.useState)({
        thchoose: '',
        thshort: '',
        thshortanvariant: '',
        thshortB: ''
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
        else if (thirdQuestType.length < Number(forthTypeQsAnswers.thshortanvariant)) {
            setIsWrongNumb('3');
        }
        else if (thirdQuestType.length < Number(forthTypeQsAnswers.thshortB)) {
            setIsWrongNumb('4');
        }
        else {
            let isValid = true;
            for (let i in nwTestsqInfo) {
                if (nwTestsqInfo[i] === '') {
                    isValid = false;
                }
            }
            console.log(nwTestsqInfo);
            if (isValid) {
                dispatch((0, nTestReducer_1.newTestQuestionsInfoFunc)({ info: nwTestsqInfo }));
                dispatch((0, nTestReducer_1.newTestQuestionsCountFunc)({ info: forthTypeQsAnswers }));
                navigate('/new-test');
            }
        }
    };
    const examName = (0, react_redux_1.useSelector)((state) => state.testR.testName);
    const subjjectName = (0, react_redux_1.useSelector)((state) => state.subjectR.saveSubjectNameFunc);
    const createExam = () => {
        console.log(subjjectName, 'subjjectNamesubjjectNamesubjjectNamesubjjectName');
        aDispatch((0, testReducerThunk_1.sendQuestionFunc)({ info: allTtests, name: examName, subjjectName }));
    };
    return (<div className={testStl_module_css_1.default.test_content}>
            <div className={testStl_module_css_1.default.test_content_container}>
                <div className={testStl_module_css_1.default.test_content_title}>
                    Ձևաթղթի ստեղծման համար
                </div>
                <div className={testStl_module_css_1.default.test_content_title}>
                    Խնդրում ենք լրացրեք դաշտերը
                </div>
                <div className={testStl_module_css_1.default.test_content_in_items}>
                    <div className={testStl_module_css_1.default.test_content_in_items_1}>
                        <div className={testStl_module_css_1.default.test_content_in_items_1_1}>
                            Խնդրում ենք նշեք քննության տարեթիվը
                        </div>
                        <div className={testStl_module_css_1.default.test_content_in_items_1_2}>
                            <input type="number" name='examYear' onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className={testStl_module_css_1.default.test_content_in_items_1}>
                        <div className={testStl_module_css_1.default.test_content_in_items_1_1}>
                            Խնդրում ենք նշեք քննության տեսակը
                        </div>
                        <div className={testStl_module_css_1.default.test_content_in_items_1_2}>
                            <input type="text" name='examType' onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className={testStl_module_css_1.default.test_content_in_items_1}>
                        <div className={testStl_module_css_1.default.test_content_in_items_1_1}>
                            Խնդրում ենք նշեք քննության առարկայի անունը
                        </div>
                        <div className={testStl_module_css_1.default.test_content_in_items_1_2}>
                            <input type="text" name='subjectName' onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <div className={testStl_module_css_1.default.test_content_inp_content}>
                    <div className={testStl_module_css_1.default.test_content_inp_content_in_items}>
                        {allCategoryArr.map((val, ind) => {
            // let itemFltLength = getAllTestss.filter((val1) => val1.selectedRpValue === val.uniqName)
            let itemFltLength;
            ind === 0 ? itemFltLength = firstQuestType : ind === 1 ? itemFltLength = secondQuestType : ind === 2 ? itemFltLength = thirdQuestType : itemFltLength = forthQuestType;
            // console.log(itemFltLength, 'itemFltLengthitemFltLengthitemFltLength')
            // setCountValue(String(itemFltLength.length))
            // if (itemFltLength.length > 0) {
            //     setInpVvalue(String(itemFltLength.length))
            //     setCountValue(String(itemFltLength.length))
            //     setSelectedValue(val.uniqName)
            //     setVariant(val.variant)
            //     setActiveInpVal(val.uniqName)
            //     setLongName(val.name)
            //     // saveInfo(true)
            // }
            return (<div className={testStl_module_css_1.default.test_content_inp_content_in_items_im}>
                                        <div className={testStl_module_css_1.default.test_content_in_items_1_1}>
                                            {val.name}
                                        </div>
                                        <div className={testStl_module_css_1.default.test_content_in_items_1_2_b}>
                                            {val.type === 'nw'
                    ?
                        <input type="number" 
                        // value={(val.uniqName === activeInpVal) ? inpVvalue : val.type === 'nw' ? itemFltLength.length : ''}
                        value={itemFltLength.length} onChange={(e) => {
                                setInpVvalue(e.target.value);
                                setCountValue(e.target.value);
                                setSelectedValue(val.uniqName);
                                setVariant(val.variant);
                                // setActiveInpVal(val.uniqName)
                                setLongName(val.name);
                            }}/>
                    :
                        <input type="number" 
                        // value={(val.uniqName === activeInpVal) ? inpVvalue : val.type === 'nw' ? itemFltLength.length : ''}
                        name={`${ind}`} onChange={(e) => {
                                handleQuestWrInputChange(e, ind);
                                // setInpVvalue(e.target.value)
                                // setCountValue(e.target.value)
                                // setSelectedValue(val.uniqName)
                                // setVariant(val.variant)
                                // setActiveInpVal(val.uniqName)
                                // setLongName(val.name)
                            }}/>}

                                        </div>
                                    </div>);
        })}
                    </div>

                    {/* <div className={styles.test_content_inp_content_in_items_btn}>
            <button onClick={() => {
                if (Number(countValue) > 0) {
                    // setActiveInpVal('')
                    setNumSum(numSum += Number(countValue))
                    saveInfo(getVariant)
                }
            }}>Հաստատել</button>
        </div> */}

                    {/* <div className={styles.test_content_inp_content_in_items_results_content}>
            {
                infoArr.map((val) => {
                    return (
                        <div className={styles.test_content_inp_content_in_items_results_content_items}>
                            {val.longName} {val.initNumber} համարից մինչև {val.initNumber + Number(val.countValue)} համարը
                        </div>
                    )
                })
            }
            {
                infoWrArr.map((val) => {
                    return (
                        <div className={styles.test_content_inp_content_in_items_results_content_items}>
                            {val.longName} {val.initNumber} համարից մինչև {val.initNumber + Number(val.countValue)} համարը

                        </div>
                    )
                })
            }
        </div> */}



                    <div className={testStl_module_css_1.default.test_content_inp_content_in_items_sec_btn}>
                        <button onClick={getAllExamOthInfoCompFunc}>Գեներացնել ձևաթուղթ</button>
                    </div>

                </div>
            </div>
            <div className={testStl_module_css_1.default.test_content_container_border}></div>
            <div className={testStl_module_css_1.default.right_side_content}>
                <div className={testStl_module_css_1.default.right_side_1}>
                    Գեներացնել թեսթը
                </div>
                <div className={testStl_module_css_1.default.right_side_2_1}>
                    <div className={testStl_module_css_1.default.right_side_2_1_1}>
                        Բարդություն
                    </div>
                    <div className={testStl_module_css_1.default.right_side_2_1_2}>
                        <select onChange={handleSelectLvlpChange}>
                            <option value="a" selected>A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>
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
                        <div className={testStl_module_css_1.default.right_side_2_2_3}>
                            <input type="number" onChange={(e) => setPointAns(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className={testStl_module_css_1.default.right_side_3}>
                    <div className={testStl_module_css_1.default.right_side_2_1_1}>
                        Խնդրում ենք գրեք հարցը
                    </div>
                    <div className={testStl_module_css_1.default.right_side_2_2_3_b_tp}>
                        <input type="text" onChange={(e) => setQuestionText(e.target.value)}/>
                    </div>
                </div>
                <div className={testStl_module_css_1.default.right_side_3}>
                    <div className={testStl_module_css_1.default.right_side_2_1_1}>
                        Խնդրում ենք գրեք նկարագրությունը
                    </div>
                    <div className={testStl_module_css_1.default.right_side_2_2_3_b_tp}>
                        <input type="text" onChange={(e) => setQuestionDescText(e.target.value)}/>
                    </div>
                </div>

                <div className={testStl_module_css_1.default.right_side_4}>
                    <div className={testStl_module_css_1.default.right_side_2_1_1}>
                        Խնդրում ենք գրեք պատասխանները
                    </div>
                    <div className={testStl_module_css_1.default.right_side_3_2}>
                        {selectedRpValue === 'choose'
            ?
                answerArr.map((val, ind) => {
                    return (<>
                                            <div className={testStl_module_css_1.default.right_side_3_2_t}>
                                                <div className={testStl_module_css_1.default.right_side_2_1_2_1}>
                                                    <input onClick={() => setChckbxIndex(val.id)} type="radio" name='tstf'/>
                                                </div>
                                                <div className={testStl_module_css_1.default.right_side_2_1_2_2}>
                                                    <input onChange={handleAnswerInputChange} type="text" name={`input${val.id}`}/>
                                                </div>
                                            </div>
                                        </>);
                })
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
                                                    <div>
                                                        <div>
                                                            chisht e
                                                        </div>
                                                        <div>
                                                            <input type="checkbox" onClick={() => setThirdTypeQsAnswers('yes')}/>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>
                                                            sxal e
                                                        </div>
                                                        <div>
                                                            <input type="checkbox" onClick={() => setThirdTypeQsAnswers('no')}/>
                                                        </div>
                                                    </div>
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
                                                <input type="text" onChange={(e) => setForthTypeQsAnswers(e.target.value)}/>
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
            ? newTestItemArr.filter((val) => val.selectedRpValue === 'choose').length
            : selectedRpValue === 'short'
                ? newTestItemArr.filter((val) => val.selectedRpValue === 'short').length
                : selectedRpValue === 'shortandvariant'
                    ? newTestItemArr.filter((val) => val.selectedRpValue === 'shortandvariant').length
                    :
                        selectedRpValue === 'shortbtype'
                            ?
                                newTestItemArr.filter((val) => val.selectedRpValue === 'shortbtype').length
                            :
                                null}
                        </div>
                    </div>
                    <div className={testStl_module_css_1.default.right_side_5_2}>
                        <button onClick={sendNewQuestion}>Ավելացնել</button>
                    </div>
                </div>
            </div>
            <div className={testStl_module_css_1.default.test_content_container_border}></div>
            <div className={testStl_module_css_1.default.create_test_content}>
                <div className={testStl_module_css_1.default.create_test_content_item_1}>
                    <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                        Խնդրում ենք նշեք ընտրովի հարցերի քանակը
                    </div>
                    <div className={testStl_module_css_1.default.create_test_content_item_1_txt_content}>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_1}>
                            <input type="text" name='thchoose' value={forthTypeQsAnswers['thchoose']} onChange={handleForthAnswerInputChange}/>
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_2}>
                            {
        // getAllTestss.filter((val) => val.selectedRpValue === 'choose').length
        firstQuestType.length}
                            <span>հարց</span>
                        </div>
                    </div>
                    {(isWrongNumb === '1') ? <div className={testStl_module_css_1.default.create_test_content_item_1_3d}>Այդպիսի քանակով հարցեր գոյություն չունեն</div> : null}
                </div>
                <div className={testStl_module_css_1.default.create_test_content_item_1}>
                    <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                        Խնդրում ենք նշեք կարճ պատասխանով հարցերի քանակը
                    </div>
                    <div className={testStl_module_css_1.default.create_test_content_item_1_txt_content}>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_1}>
                            <input type="text" name='thshort' value={forthTypeQsAnswers['thshort']} onChange={handleForthAnswerInputChange}/>
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_2}>
                            {
        // getAllTestss.filter((val) => val.selectedRpValue === 'short').length
        secondQuestType.length}
                            <span>հարց</span>
                        </div>
                    </div>
                    {(isWrongNumb === '2') ? <div className={testStl_module_css_1.default.create_test_content_item_1_3d}>Այդպիսի քանակով հարցեր գոյություն չունեն</div> : null}
                </div>
                <div className={testStl_module_css_1.default.create_test_content_item_1}>
                    <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                        Խնդրում ենք նշեք պնդումներով հարցերի քանակը
                    </div>
                    <div className={testStl_module_css_1.default.create_test_content_item_1_txt_content}>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_1}>
                            <input type="number" name='shortbtype' value={forthTypeQsAnswers['shortbtype']} onChange={handleForthAnswerInputChange}/>
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_2}>
                            {
        // getAllTestss.filter((val) => val.selectedRpValue === 'shortandvariant').length
        thirdQuestType.length}
                            <span>հարց</span>
                        </div>
                    </div>
                    {(isWrongNumb === '3') ? <div className={testStl_module_css_1.default.create_test_content_item_1_3d}>Այդպիսի քանակով հարցեր գոյություն չունեն</div> : null}
                </div>

                <div className={testStl_module_css_1.default.create_test_content_item_1}>
                    <div className={testStl_module_css_1.default.create_test_content_item_1_title}>
                        Խնդրում ենք նշեք կարճ պատասխանով (B) հարցերի քանակը
                    </div>
                    <div className={testStl_module_css_1.default.create_test_content_item_1_txt_content}>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_1}>
                            <input type="number" name='thshortanvariant' value={forthTypeQsAnswers['thshortanvariant']} onChange={handleForthAnswerInputChange}/>
                        </div>
                        <div className={testStl_module_css_1.default.create_test_content_item_1_2}>
                            {
        // getAllTestss.filter((val) => val.selectedRpValue === 'shortandvariant').length
        thirdQuestType.length}
                            <span>հարց</span>
                        </div>
                    </div>
                    {(isWrongNumb === '3') ? <div className={testStl_module_css_1.default.create_test_content_item_1_3d}>Այդպիսի քանակով հարցեր գոյություն չունեն</div> : null}
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




                <div className={testStl_module_css_1.default.create_test_content_item_2}>
                    <button onClick={makeNewTestCompFunc}>Ստեղծել թեստը</button>
                </div>
            </div>




            <div>
                <button>cancel</button>
                <button onClick={createExam}>stexcel</button>

            </div>
        </div>);
};
exports.TestComp = TestComp;
exports.default = exports.TestComp;
