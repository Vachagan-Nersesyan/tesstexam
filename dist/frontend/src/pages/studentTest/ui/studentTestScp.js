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
const studentTestStl_module_css_1 = __importDefault(require("./studentTestStl.module.css"));
const redux_store_1 = require("entities/store/redux-store");
const react_redux_1 = require("react-redux");
const _1_png_1 = __importDefault(require("../images/1.png"));
const react_router_dom_1 = require("react-router-dom");
const testReducer_1 = require("entities/testR/testReducer");
const studentReducer_1 = require("entities/student/studentReducer");
const fa6_1 = require("react-icons/fa6");
const StudentTestComp = () => {
    const allTestInfo = (0, react_redux_1.useSelector)((state) => state.studentR.numInfo);
    const allTestTxtInfo = (0, react_redux_1.useSelector)((state) => state.studentR.otherInfo);
    const allTestArrmk = (0, react_redux_1.useSelector)((state) => state.studentR.allTests);
    console.log(allTestInfo, allTestTxtInfo, allTestArrmk, '222222222223');
    const navigate = (0, react_router_dom_1.useNavigate)();
    // const isAdminItem = useSelector((state: AppStateType) => state.adminR.isAdmin)
    // if (!isAdminItem) {
    //     navigate('/')
    // }
    const aDispatch = (0, redux_store_1.useAppDispatch)();
    const allTestmk = (0, react_redux_1.useSelector)((state) => state.makeTestR.allQuestTest);
    // const allTestArrmk = useSelector((state: AppStateType) => state.testR.allTests)
    // console.log(allTestArrmk)
    // const allTestInfo: QuestCountInfoType = useSelector((state: AppStateType) => state.makeTestR.questCountInfo)
    console.log(allTestInfo, '4444441');
    // const allTestTxtInfo = useSelector((state: AppStateType) => state.makeTestR.questInfo)
    const [testQuestion, setTestQuestion] = (0, react_1.useState)(allTestmk);
    const [allTestTxtHkInfo, setAllTestTxtHkInfo] = (0, react_1.useState)(allTestTxtInfo);
    (0, react_1.useEffect)(() => {
        setAllTestTxtHkInfo(allTestTxtInfo);
    }, [allTestTxtInfo]);
    const [firstArr, setFirstArr] = (0, react_1.useState)([]);
    const [secondArr, setSecondArr] = (0, react_1.useState)([]);
    const [secondBArr, setSecondBArr] = (0, react_1.useState)([]);
    // const [forthArr, setforthArr] = useState<Array<QuestionType>>([])
    const [thirdArr, setThirdArr] = (0, react_1.useState)([]);
    const [thirdBArr, setThirddBArr] = (0, react_1.useState)([]);
    let typesArr = ['choose', 'short', 'shortandvariant', 'shortbtype'];
    // useEffect(() => {
    //     aDispatch(getTestQuestFunc())
    // }, [])
    (0, react_1.useEffect)(() => {
        filterArr();
    }, [allTestArrmk]);
    (0, react_1.useEffect)(() => {
        setTestQuestion(allTestmk);
    }, [allTestmk]);
    (0, react_1.useEffect)(() => {
        filterArr();
    }, [allTestmk]);
    const generateMiniArr = (num, arr) => {
        console.log(num, arr, 'num,arrnum,arrnum,arr');
        // if (num === 0) { return arr }
        let arrCloneSec = [...arr];
        let arrCloneSecB = [];
        for (let i = 0; i < num; i++) {
            let o = Math.floor(Math.random() * arrCloneSec.length);
            arrCloneSecB.push(arrCloneSec[o]);
            arrCloneSec.splice(o, 1);
        }
        return arrCloneSecB;
    };
    const filterArr = () => {
        for (let i = 0; i < allTestArrmk.length; i++) {
            // let arrCloneSec = [...allTestArrmk[i].questions[0].questionType]
            // let arrCloneSecB = []
            // for (let i in arrClone[0].questionType) {
            //     let o = Math.floor(Math.random() * arrCloneSec.length)
            //     arrCloneSecB.push(arrCloneSec[o])
            //     arrCloneSec.splice(o, 1)
            // }
            if (i === 0) {
                // let arrCloneSec = [...allTestArrmk[i].questions[0].questionType]
                setFirstArr(generateMiniArr(Number(allTestInfo.thchoose), [...allTestArrmk[i].questions[0].questionType]));
                // setFirstArr(arrCloneSecB)
            }
            else if (i === 1) {
                // setSecondArr(allTestArrmk[i].questions[0].questionType)
                setSecondArr(generateMiniArr(Number(allTestInfo.thshortb), [...allTestArrmk[i].questions[0].questionType]));
                // setSecondBArr(allTestArrmk[i].questions[1].questionType)
                setSecondBArr(generateMiniArr(Number(allTestInfo.thshort), [...allTestArrmk[i].questions[1].questionType]));
            }
            else {
                // setThirdArr(allTestArrmk[i].questions[0].questionType)
                console.log(allTestInfo.thshortanvariant, 'allTestInfo.thshortanvariantallTestInfo.thshortanvariant');
                setThirdArr(generateMiniArr(Number(allTestInfo.thshortanvariant), [...allTestArrmk[i].questions[0].questionType]));
                // setThirddBArr(allTestArrmk[i].questions[1].questionType)
                setThirddBArr(generateMiniArr(Number(allTestInfo.thshortcctgry), [...allTestArrmk[i].questions[1].questionType]));
            }
        }
        // let data
        // for (let i = 0; i < typesArr.length; i++) {
        //     let arrClone = allTestArrmk[i].questions.filter((val) => val.uniqName === typesArr[i] ? val.questionType : null)
        //     console.log(arrClone, 'arrClone')
        //     let arrCloneSec = [...arrClone[0].questionType]
        //     let arrCloneSecB = []
        //     for (let i in arrClone[0].questionType) {
        //         let o = Math.floor(Math.random() * arrCloneSec.length)
        //         arrCloneSecB.push(arrCloneSec[o])
        //         arrCloneSec.splice(o, 1)
        //     }
        //     if (i === 0) {
        //         setFirstArr(arrCloneSecB)
        //     } else if (i === 1) {
        //         setSecondArr(arrCloneSecB)
        //     } else if (i === 2) {
        //         setthirdArr(arrCloneSecB)
        //     } else {
        //         setforthArr(arrCloneSecB)
        //     }
        // };
    };
    const arrLtts = ['A', 'B', 'C', 'D'];
    // console.log(allTestInfo)
    const printMFunc = () => {
        window.print();
    };
    let questCount = 0;
    console.log(firstArr, secondArr, secondBArr, thirdArr, thirdBArr);
    const dispatch = (0, react_redux_1.useDispatch)();
    const generatenewWritettest = () => {
        // console.log(subjectArr, subjectName, examName, 'subjectArrsubjectArrsubjectArr')
        // subjectArr.map((val) => {
        //     if (val.subjectName === subjectName) {
        //         val.exams.map((val1) => {
        //             if (val1.name === examName) {
        //                 console.log(val1.info, val1.name, 'val1.info,val1.infoval1.info,val1.info')
        dispatch((0, testReducer_1.changeAllTest)({ info: allTestArrmk }));
        navigate('/write-new-test');
        // downloadFile()
        //             }
        //         })
        //     }
        // })
    };
    // test info
    let writeTestAnswersArr = [];
    const getWritenTestAnswers = (answer, questNum) => {
        let { name } = questNum.target;
        console.log(questNum);
        let obj = {
            questNum: name,
            answer
        };
        if (writeTestAnswersArr.length === 0) {
            writeTestAnswersArr.push(obj);
        }
        else {
            let isInc = false;
            for (let i in writeTestAnswersArr) {
                if (writeTestAnswersArr[i].questNum === obj.questNum) {
                    writeTestAnswersArr[i] = Object.assign({}, obj);
                    isInc = true;
                }
            }
            if (!isInc) {
                writeTestAnswersArr.push(obj);
            }
        }
        console.log(writeTestAnswersArr, 'writeTestAnswersArrwriteTestAnswersArrwriteTestAnswersArr');
        dispatch((0, studentReducer_1.updateArrAllAnswers)({ info: obj }));
    };
    const getWritenTestSecAnswers = (answerYesOrNot, questNum) => {
        let { name } = questNum.target;
        let obj = {
            questNum: name,
            answerYesOrNot
        };
        if (writeTestAnswersArr.length === 0) {
            writeTestAnswersArr.push(obj);
        }
        else {
            let isInc = false;
            for (let i in writeTestAnswersArr) {
                if (writeTestAnswersArr[i].questNum === obj.questNum) {
                    writeTestAnswersArr[i] = Object.assign({}, obj);
                    isInc = true;
                }
            }
            if (!isInc) {
                writeTestAnswersArr.push(obj);
            }
        }
        console.log(writeTestAnswersArr, 'writeTestAnswersArrwriteTestAnswersArrwriteTestAnswersArr');
        dispatch((0, studentReducer_1.updateArrAllAnswers)({ info: obj }));
    };
    const getWritenTestThirdAnswers = (answerBtype, questNum) => {
        let { name } = questNum.target;
        let obj = {
            questNum: name,
            answerBtype
        };
        if (writeTestAnswersArr.length === 0) {
            writeTestAnswersArr.push(obj);
        }
        else {
            let isInc = false;
            for (let i in writeTestAnswersArr) {
                if (writeTestAnswersArr[i].questNum === obj.questNum) {
                    writeTestAnswersArr[i] = Object.assign({}, obj);
                    isInc = true;
                }
            }
            if (!isInc) {
                writeTestAnswersArr.push(obj);
            }
        }
        console.log(writeTestAnswersArr, 'writeTestAnswersArrwriteTestAnswersArrwriteTestAnswersArr');
        dispatch((0, studentReducer_1.updateArrAllAnswers)({ info: obj }));
    };
    const getWritenTestForthAnswers = (shortAnswers, questNum) => {
        let { name } = questNum.target;
        let obj = {
            questNum: name,
            shortAnswers
        };
        if (writeTestAnswersArr.length === 0) {
            writeTestAnswersArr.push(obj);
        }
        else {
            let isInc = false;
            for (let i in writeTestAnswersArr) {
                if (writeTestAnswersArr[i].questNum === obj.questNum) {
                    writeTestAnswersArr[i] = Object.assign({}, obj);
                    isInc = true;
                }
            }
            if (!isInc) {
                writeTestAnswersArr.push(obj);
            }
        }
        console.log(writeTestAnswersArr, 'writeTestAnswersArrwriteTestAnswersArrwriteTestAnswersArr');
        dispatch((0, studentReducer_1.updateArrAllAnswers)({ info: obj }));
    };
    console.log(writeTestAnswersArr, 'writeTestAnswersArr333333333');
    const allAnswersItem = (0, react_redux_1.useSelector)((state) => state.studentR.allAnswers);
    console.log(allAnswersItem, 'allAnswersItemallAnswersItem');
    return (<div className={studentTestStl_module_css_1.default.make_test_content}>

            <div className={studentTestStl_module_css_1.default.make_test_content_container}>


                <div className={studentTestStl_module_css_1.default.make_test_content_container_overlay}>
                    <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_1}>
                        <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_1_1}>
                            <img src={_1_png_1.default}/>
                        </div>
                        <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_1_2}>
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_1_2_1}>
                                «{allTestTxtHkInfo.building}»
                            </div>
                            {/* <div className={styles.make_test_content_container_title_content_in_1_2_1}>
            ՊԵՏԱԿԱՆ ՔՈԼԵՋ»
        </div> */}
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_1_2_1}>
                                <span>ԱՐԴՅՈՒՆՔ</span> {allTestTxtHkInfo.resultNum}
                            </div>
                        </div>
                        <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_1_3}>
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_1_3_1}>
                                Գնահաատական
                            </div>
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_1_3_2}>
                                <span>/20</span>
                            </div>
                        </div>
                    </div>
                    <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2}>
                        <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_b}>
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                Կուրս՝
                            </div>
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                Առարկա՝
                            </div>
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                Դասախոս՝
                            </div>
                        </div>
                        <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1}>
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                {allTestTxtHkInfo.clssNum}
                            </div>
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                {allTestTxtHkInfo.arName}
                            </div>
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                {allTestTxtHkInfo.teachName}
                            </div>
                        </div>
                        <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2_2}>
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                Խումբ՝ ______________________________
                            </div>
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                Ուսանող՝ __________________________
                            </div>
                            <div className={studentTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1_b}>
                                {/* <span>01</span> / <span>դեկտեմբեր</span> / 2023թ․ */}
                                {allTestTxtHkInfo.date}
                            </div>
                        </div>
                    </div>
                </div>




                <div className={studentTestStl_module_css_1.default.make_test_content_title}>
                    ՏԱՐԲԵՐԱԿ N ___
                </div>
                <div className={studentTestStl_module_css_1.default.make_test_content_container_overlay}>
                    <div className={studentTestStl_module_css_1.default.make_test_content_container_overla_in_itemy}>
                        {firstArr.length > 0
            ?
                <div className={studentTestStl_module_css_1.default.variant_content}>
                                    Ա մակարդակ
                                </div>
            :
                null}
                        <div className={studentTestStl_module_css_1.default.test_exam_questiokn_content}>
                            {firstArr.map((val, ind) => {
            var _a;
            // if (Number(ind) <= Number(allTestInfo.thchoose) - 1) {
            questCount += 1;
            let fixInd = null;
            console.log('ddd');
            for (let i in allAnswersItem) {
                console.log(allAnswersItem[i].questNum, questCount, 'questNum, countBg');
                if (allAnswersItem[i].questNum == questCount) {
                    fixInd = allAnswersItem[i].answer;
                }
            }
            console.log(fixInd, 'fixInd');
            if (val) {
                return (<div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1}>
                                                <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1}>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1c}>
                                                        <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1_1}>
                                                            {questCount}.
                                                        </div>
                                                        {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
                        {val.questionText}
                    </div> */}
                                                        <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1_1_title} dangerouslySetInnerHTML={{ __html: val.questionText }}>

                                                        </div>
                                                    </div>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1_2}>
                                                        {val.questionPoint} մ․
                                                    </div>
                                                </div>
                                                {val.questionDescText
                        ?
                            <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_2}>
                                                            {val.questionDescText}
                                                        </div>
                        :
                            null}
                                                {val.selectedImage
                        ?
                            <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_2}>
                                                            <img src={val.selectedImage} alt=""/>
                                                        </div>
                        :
                            null}
                                                <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_3}>
                                                    {(_a = val.answersInputs) === null || _a === void 0 ? void 0 : _a.map((val4, ind4) => {
                        if (fixInd == ind4 + 1) {
                            return (<div style={{ width: val4.text.length > 20 ? '100%' : '50%' }} className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_3_1}>
                                                                        <div className={studentTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                            <input checked onClick={(e) => getWritenTestAnswers(ind4 + 1, e)} type="radio" name={`${questCount}`}/>
                                                                        </div>
                                                                        <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_3_1_1}>
                                                                            {ind4 === 0 ? 'ա)' : ind4 === 1 ? 'բ)' : ind4 === 2 ? 'գ)' : 'դ)'}
                                                                        </div>
                                                                        <div className={studentTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_122e3}>
                                                                            <img src={val4.picture} alt=""/>
                                                                        </div>
                                                                        <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_3_1_2}>

                                                                            {/* {ind4 === 0 ? val.answersInputs?.input0 : ind4 === 1 ? val.answersInputs?.input1 : ind4 === 2 ? val.answersInputs?.input2 : val.answersInputs?.input3} */}
                                                                            {val4.text}
                                                                        </div>
                                                                    </div>);
                            // return (
                            //     <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                            //         <input checked onClick={(e) => getWritenTestAnswers(ind4 + 1, e)} type="radio" name={`${countBg}`} />
                            //     </div>
                            // )
                        }
                        else {
                            return (<div style={{ width: val4.text.length > 20 ? '100%' : '50%' }} className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_3_1}>
                                                                        <div className={studentTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                            <input onClick={(e) => getWritenTestAnswers(ind4 + 1, e)} type="radio" name={`${questCount}`}/>
                                                                        </div>
                                                                        <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_3_1_1}>
                                                                            {ind4 === 0 ? 'ա)' : ind4 === 1 ? 'բ)' : ind4 === 2 ? 'գ)' : 'դ)'}
                                                                        </div>
                                                                        <div className={studentTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_122e3}>
                                                                            <img src={val4.picture} alt=""/>
                                                                        </div>
                                                                        <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_3_1_2}>
                                                                            {/* {ind4 === 0 ? val.answersInputs?.input0 : ind4 === 1 ? val.answersInputs?.input1 : ind4 === 2 ? val.answersInputs?.input2 : val.answersInputs?.input3} */}
                                                                            {val4.text}

                                                                        </div>
                                                                    </div>);
                            // return (
                            //     <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                            //         <input onClick={(e) => getWritenTestAnswers(ind4 + 1, e)} type="radio" name={`${countBg}`} />
                            //     </div>
                            // )
                        }
                    })}
                                                    {/* <div style={{ width: Number(val.answersInputs?.input0.length) > 20 ? '100%' : '50%' }} className={styles.make_test_content_in_item_in_1_3_1}>
                        <div className={styles.make_test_content_in_item_in_1_3_1_1}>
                            ա)
                        </div>
                        <div className={styles.make_test_content_in_item_in_1_3_1_2}>
                            {
                                val.answersInputs?.input0
                            }
                        </div>
                    </div>
                    <div style={{ width: Number(val.answersInputs?.input0.length) > 20 ? '100%' : '50%' }} className={styles.make_test_content_in_item_in_1_3_1}>
                        <div className={styles.make_test_content_in_item_in_1_3_1_1}>
                            բ)
                        </div>
                        <div className={styles.make_test_content_in_item_in_1_3_1_2}>
                            {
                                val.answersInputs?.input1
                            }
                        </div>
                    </div>
                    <div style={{ width: Number(val.answersInputs?.input0.length) > 20 ? '100%' : '50%' }} className={styles.make_test_content_in_item_in_1_3_1}>
                        <div className={styles.make_test_content_in_item_in_1_3_1_1}>
                            գ)
                        </div>
                        <div className={styles.make_test_content_in_item_in_1_3_1_2}>
                            {
                                val.answersInputs?.input2
                            }
                        </div>
                    </div>
                    <div style={{ width: Number(val.answersInputs?.input0.length) > 20 ? '100%' : '50%' }} className={styles.make_test_content_in_item_in_1_3_1}>
                        <div className={styles.make_test_content_in_item_in_1_3_1_1}>
                            դ)
                        </div>
                        <div className={styles.make_test_content_in_item_in_1_3_1_2}>
                            {
                                val.answersInputs?.input3
                            }
                        </div>
                    </div> */}
                                                </div>
                                            </div>);
            }
            // }
        })}
                        </div>
                    </div>
                    {/* <div className={styles.make_test_content_in_item}> */}


                    {/* </div> */}

                    {/* <div className={styles.make_test_content_in_item}> */}
                    <div className={studentTestStl_module_css_1.default.make_test_content_container_overla_in_itemy}>
                        {secondArr.length > 0 || secondBArr.length > 0
            ?
                <div className={studentTestStl_module_css_1.default.variant_content}>
                                    Բ մակարդակ
                                </div>
            :
                null}
                        <div className={studentTestStl_module_css_1.default.test_exam_questiokn_content}>

                            {secondArr.map((val, ind) => {
            // if (Number(ind) <= Number(allTestInfo.thshort) - 1) {
            questCount += 1;
            let fixInd = null;
            console.log('ddd');
            for (let i in allAnswersItem) {
                console.log(allAnswersItem[i].questNum, questCount, 'questNum, countBg');
                if (allAnswersItem[i].questNum == questCount) {
                    fixInd = allAnswersItem[i].answerBtype;
                }
            }
            console.log(fixInd, 'variant');
            if (val) {
                return (<div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1}>
                                                <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1}>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1c}>
                                                        <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1_1}>
                                                            {questCount}.
                                                        </div>
                                                        {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
                        {val.questionText}
                    </div> */}
                                                        <div dangerouslySetInnerHTML={{ __html: val.questionText }}>

                                                        </div>
                                                    </div>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1_2}>
                                                        {val.questionPoint} մ․
                                                    </div>
                                                </div>
                                                {val.questionDescText
                        ?
                            <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_2}>
                                                            {val.questionDescText}
                                                        </div>
                        :
                            null}

                                                <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_3_type}>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_txt_content_s_item_2}>
                                                        <input value={fixInd} onChange={(e) => getWritenTestThirdAnswers(e.target.value, e)} type="text" name={`${questCount}`}/>

                                                    </div>
                                                </div>
                                            </div>);
            }
            // }
        })}

                            {secondBArr.map((val, ind) => {
            let shortAnswrMinStrItem = '';
            // if (Number(ind) <= Number(allTestInfo.thshort) - 1) {
            questCount += 1;
            let fixInd = '';
            console.log('ddd');
            for (let i in allAnswersItem) {
                console.log(allAnswersItem[i].questNum, questCount, 'questNum, countBg');
                if (allAnswersItem[i].questNum == questCount) {
                    fixInd = allAnswersItem[i].shortAnswers;
                }
            }
            console.log(fixInd, 'variant');
            if (val) {
                return (<div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1}>
                                                <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1}>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1c}>
                                                        <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1_1}>
                                                            {questCount}.
                                                        </div>
                                                        {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
                        {val.questionText}
                    </div> */}
                                                        <div dangerouslySetInnerHTML={{ __html: val.questionText }}>

                                                        </div>
                                                    </div>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1_2}>
                                                        {val.questionPoint} մ․
                                                    </div>
                                                </div>
                                                {val.questionDescText
                        ?
                            <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_2}>
                                                            {val.questionDescText}
                                                        </div>
                        :
                            null}

                                                <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_3_type}>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_txt_content_s_item_2}>

                                                        {[...new Array(5)].map((val6, ind6) => {
                        return (<div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_txt_content_s_item_2_1}>
                                                                        <input onChange={(e) => {
                                shortAnswrMinStrItem += e.target.value;
                                if (ind6 === 4) {
                                    getWritenTestForthAnswers(shortAnswrMinStrItem, e);
                                }
                            }} type="text" value={fixInd[ind6]} name={`${questCount}`} maxLength={1} className={studentTestStl_module_css_1.default.txtinp}/>
                                                                    </div>);
                    })}
                                                        {/* {
                        [...new Array(5)].map((val) => {

                            return (
                                <div className={styles.make_test_content_in_item_in_txt_content_s_item_2_1}>
                                    <input onChange={(e) => {
                                        shortAnswrMinStrItem += e.target.value
                                        getWritenTestForthAnswers(shortAnswrMinStrItem, e)
                                    }} type="text" name={`${questCount}`} maxLength={1} className={styles.txtinp} />
                                </div>
                            )
                        })
                    } */}
                                                    </div>
                                                </div>
                                            </div>);
            }
            // }
        })}

                        </div>
                    </div>
                    {/* </div> */}

                    {/* <div className={styles.make_test_content_in_item}> */}
                    <div className={studentTestStl_module_css_1.default.make_test_content_container_overla_in_itemy}>
                        {thirdArr.length > 0 || thirdBArr.length > 0
            ?
                <div className={studentTestStl_module_css_1.default.variant_content}>
                                    Գ մակարդակ
                                </div>
            :
                null}
                        <div className={studentTestStl_module_css_1.default.test_exam_questiokn_content}>

                            {thirdArr.map((val, ind) => {
            console.log(thirdArr, 'thirdArr');
            // if (Number(ind) <= Number(allTestInfo.thshortanvariant) - 1) {
            questCount += 1;
            let fixInd = null;
            console.log('ddd');
            for (let i in allAnswersItem) {
                console.log(allAnswersItem[i].questNum, questCount, 'questNum, countBg');
                if (allAnswersItem[i].questNum == questCount) {
                    fixInd = allAnswersItem[i].answerYesOrNot;
                }
            }
            console.log(fixInd, 'variant');
            if (val) {
                return (<div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1}>
                                                <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1}>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1c}>
                                                        <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1_1}>
                                                            {questCount}.
                                                        </div>
                                                        {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
                        {val.questionText}
                    </div> */}
                                                        <div dangerouslySetInnerHTML={{ __html: val.questionText }}>

                                                        </div>
                                                    </div>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1_2}>
                                                        {val.questionPoint} մ․
                                                    </div>
                                                </div>
                                                {val.questionDescText
                        ?
                            <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_2}>
                                                            {val.questionDescText}
                                                        </div>
                        :
                            null}
                                                <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_3_type}>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_txt_content_s_item_2}>
                                                        {(fixInd === 'yes') ? <div className={studentTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                <input checked onClick={(e) => getWritenTestSecAnswers('yes', e)} name={`${questCount}`} type="radio"/>
                                                                <input onClick={(e) => getWritenTestSecAnswers('no', e)} name={`${questCount}`} type="radio"/>
                                                            </div>
                        : fixInd === 'no'
                            ?
                                <div className={studentTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                        <input onClick={(e) => getWritenTestSecAnswers('yes', e)} name={`${questCount}`} type="radio"/>
                                                                        <input checked onClick={(e) => getWritenTestSecAnswers('no', e)} name={`${questCount}`} type="radio"/>
                                                                    </div>
                            :
                                <div className={studentTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                        <input onClick={(e) => getWritenTestSecAnswers('yes', e)} name={`${questCount}`} type="radio"/>
                                                                        <input onClick={(e) => getWritenTestSecAnswers('no', e)} name={`${questCount}`} type="radio"/>
                                                                    </div>}
                                                        {/* {
                        ['Ճիշտ է', ' Սխալ է'].map((val5, ind5) => {
                            // let ysrntItem = ind2 === 0 ? 'yes' : 'no'
                            return (
                                <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                    <div>
                                        {val5}
                                    </div>
                                    <input onClick={(e) => getWritenTestSecAnswers(ind5 === 0 ? 'yes' : 'no', e)} name={`${questCount}`} type="radio" />
                                </div>
                            )
                        })
                    } */}
                                                        {/* <div>
                        <div>
                            Ճիշտ է
                        </div>
                        <div>
                            <input type="radio" name={`${ind}`} />
                        </div>
                    </div>
                    <div>
                        <div>
                            Սխալ է
                        </div>
                        <div>
                            <input type="radio" name={`${ind}`} />
                        </div>
                    </div> */}
                                                    </div>
                                                </div>
                                            </div>);
            }
        })}
                            {thirdBArr.map((val, ind) => {
            // if (Number(ind) <= Number(allTestInfo.thshortanvariant) - 1) {
            questCount += 1;
            let fixInd = null;
            console.log('ddd');
            for (let i in allAnswersItem) {
                console.log(allAnswersItem[i].questNum, questCount, 'questNum, countBg');
                if (allAnswersItem[i].questNum == questCount) {
                    fixInd = allAnswersItem[i].answerBtype;
                }
            }
            console.log(fixInd, 'variant');
            if (val) {
                return (<div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1}>
                                                <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1}>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1c}>
                                                        <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1_1}>
                                                            {questCount}.
                                                        </div>
                                                        {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
                        {val.questionText}
                    </div> */}
                                                        <div dangerouslySetInnerHTML={{ __html: val.questionText }}>

                                                        </div>
                                                    </div>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_1_2}>
                                                        {val.questionPoint} մ․
                                                    </div>
                                                </div>
                                                {val.questionDescText
                        ?
                            <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_2}>
                                                            {val.questionDescText}
                                                        </div>
                        :
                            null}
                                                <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_1_3_type}>
                                                    <div className={studentTestStl_module_css_1.default.make_test_content_in_item_in_txt_content_s_item_2}>
                                                        <input value={fixInd} onChange={(e) => getWritenTestThirdAnswers(e.target.value, e)} type="text" name={`${questCount}`}/>

                                                    </div>
                                                </div>
                                            </div>);
            }
            // }
        })}
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>

            <div className={studentTestStl_module_css_1.default.subject_exma_item_content_2_item_2_item_1_print_content_1}>
                <button onClick={() => generatenewWritettest()}>Ձևաթուղթ</button>

            </div>


            <div className={studentTestStl_module_css_1.default.printPart}>
                <button onClick={() => printMFunc()}><fa6_1.FaPrint /></button>
            </div>
        </div>);
};
exports.default = StudentTestComp;
// import React, { useEffect, useState } from 'react'
// import styles from './studentTestStl.module.css'
// import { OwnProps } from './studentTestTs.interface'
// import { AppStateType, useAppDispatch } from 'entities/store/redux-store'
// import { getTestQuestFunc } from 'entities/nTestR/nTestReducerThunk'
// import { useDispatch, useSelector } from 'react-redux'
// import { CategoryInfoType, NewTestInfoType, QuestionType } from 'entities/testR/testReducerTs.interface'
// import { QuestCountInfoType } from 'entities/nTestR/nTestReducerTs.interface'
// import logo from '../images/1.png'
// import { useNavigate } from 'react-router-dom'
// import { changeAllTest } from 'entities/testR/testReducer'
// import { AnwersArrType } from 'entities/wTestR/wTestReducerTs.interface'
// import { updateArrAllAnswers } from 'entities/student/studentReducer'
// import { FaPrint } from 'react-icons/fa6'
// import { SubjectExamType } from 'entities/subjectR/subjectReducerTs.interface'
// const StudentTestComp: React.FC<OwnProps> = () => {
//     const allTestInfoSc = useSelector((state: AppStateType) => state.testR.allExamflInfo)
//     const [allTestInfoScHk, setAllTestInfoScHk] = useState<null | SubjectExamType>(allTestInfoSc)
//     useEffect(() => {
//         setAllTestInfoScHk(allTestInfoSc)
//     }, [allTestInfoSc])
//     console.log(allTestInfoScHk, 'wwwwwwwwwwwwwwwwwwwwwwwwwwwww')
//     // const allTestInfo = useSelector((state: AppStateType) => state.studentR.numInfo)
//     // const allTestTxtInfo = useSelector((state: AppStateType) => state.studentR.otherInfo)
//     // const allTestArrmk = useSelector((state: AppStateType) => state.studentR.allTests)
//     const [allTestArrmk, setAllTestArrmk] = useState<Array<CategoryInfoType> | any>(null)
//     const [allTestTxtInfo, setAllTestInfo] = useState<NewTestInfoType | undefined>(undefined)
//     const [allTestInfo, setAllTestTxtInfo] = useState<QuestCountInfoType | undefined>(undefined)
//     useEffect(() => {
//         setAllTestArrmk(allTestInfoScHk?.info)
//         setAllTestInfo(allTestInfoScHk?.otherInfo)
//         setAllTestTxtInfo(allTestInfoScHk?.questionCount)
//     }, [allTestInfoScHk])
//     // const allTestInfo = useSelector((state: AppStateType) => state.studentR.numInfo)
//     // const allTestTxtInfo = useSelector((state: AppStateType) => state.studentR.otherInfo)
//     // const allTestArrmk = useSelector((state: AppStateType) => state.studentR.allTests)
//     // console.log(allTestInfo, allTestTxtInfo, allTestArrmk, '222222222223')
//     const navigate = useNavigate()
//     // const isAdminItem = useSelector((state: AppStateType) => state.adminR.isAdmin)
//     // if (!isAdminItem) {
//     //     navigate('/')
//     // }
//     const aDispatch = useAppDispatch()
//     const allTestmk = useSelector((state: AppStateType) => state.makeTestR.allQuestTest)
//     // const allTestArrmk = useSelector((state: AppStateType) => state.testR.allTests)
//     // console.log(allTestArrmk)
//     // const allTestInfo: QuestCountInfoType = useSelector((state: AppStateType) => state.makeTestR.questCountInfo)
//     console.log(allTestInfo, '4444441')
//     // const allTestTxtInfo = useSelector((state: AppStateType) => state.makeTestR.questInfo)
//     const [testQuestion, setTestQuestion] = useState(allTestmk)
//     const [allTestTxtHkInfo, setAllTestTxtHkInfo] = useState<NewTestInfoType | undefined>(allTestTxtInfo)
//     useEffect(() => {
//         setAllTestTxtHkInfo(allTestTxtInfo)
//     }, [allTestTxtInfo])
//     const [firstArr, setFirstArr] = useState<Array<QuestionType>>([])
//     const [secondArr, setSecondArr] = useState<Array<QuestionType>>([])
//     const [secondBArr, setSecondBArr] = useState<Array<QuestionType>>([])
//     // const [forthArr, setforthArr] = useState<Array<QuestionType>>([])
//     const [thirdArr, setThirdArr] = useState<Array<QuestionType>>([])
//     const [thirdBArr, setThirddBArr] = useState<Array<QuestionType>>([])
//     let typesArr = ['choose', 'short', 'shortandvariant', 'shortbtype']
//     // useEffect(() => {
//     //     aDispatch(getTestQuestFunc())
//     // }, [])
//     useEffect(() => {
//         filterArr()
//     }, [allTestArrmk])
//     useEffect(() => {
//         setTestQuestion(allTestmk)
//     }, [allTestmk])
//     useEffect(() => {
//         filterArr()
//     }, [allTestmk])
//     const generateMiniArr = (num: number, arr: Array<QuestionType>) => {
//         console.log(num, arr, 'num,arrnum,arrnum,arr')
//         if (num === 0) { return arr }
//         let arrCloneSec: Array<QuestionType> = [...arr]
//         let arrCloneSecB: Array<QuestionType> = []
//         for (let i = 0; i < num; i++) {
//             let o = Math.floor(Math.random() * arrCloneSec.length)
//             arrCloneSecB.push(arrCloneSec[o])
//             arrCloneSec.splice(o, 1)
//         }
//         return arrCloneSecB
//     }
//     const filterArr = () => {
//         if (allTestArrmk) {
//             for (let i = 0; i < allTestArrmk.length; i++) {
//                 // let arrCloneSec = [...allTestArrmk[i].questions[0].questionType]
//                 // let arrCloneSecB = []
//                 // for (let i in arrClone[0].questionType) {
//                 //     let o = Math.floor(Math.random() * arrCloneSec.length)
//                 //     arrCloneSecB.push(arrCloneSec[o])
//                 //     arrCloneSec.splice(o, 1)
//                 // }
//                 if (allTestInfo) {
//                     if (i === 0) {
//                         // let arrCloneSec = [...allTestArrmk[i].questions[0].questionType]
//                         setFirstArr(generateMiniArr(Number(allTestInfo.thchoose), [...allTestArrmk[i].questions[0].questionType]))
//                         // setFirstArr(arrCloneSecB)
//                     } else if (i === 1) {
//                         // setSecondArr(allTestArrmk[i].questions[0].questionType)
//                         setSecondArr(generateMiniArr(Number(allTestInfo.thshortb), [...allTestArrmk[i].questions[0].questionType]))
//                         // setSecondBArr(allTestArrmk[i].questions[1].questionType)
//                         setSecondBArr(generateMiniArr(Number(allTestInfo.thshort), [...allTestArrmk[i].questions[1].questionType]))
//                     } else {
//                         // setThirdArr(allTestArrmk[i].questions[0].questionType)
//                         console.log(allTestInfo.thshortanvariant, 'allTestInfo.thshortanvariantallTestInfo.thshortanvariant')
//                         setThirdArr(generateMiniArr(Number(allTestInfo.thshortanvariant), [...allTestArrmk[i].questions[0].questionType]))
//                         // setThirddBArr(allTestArrmk[i].questions[1].questionType)
//                         setThirddBArr(generateMiniArr(Number(allTestInfo.thshortcctgry), [...allTestArrmk[i].questions[1].questionType]))
//                     }
//                 }
//             }
//         }
//         // let data
//         // for (let i = 0; i < typesArr.length; i++) {
//         //     let arrClone = allTestArrmk[i].questions.filter((val) => val.uniqName === typesArr[i] ? val.questionType : null)
//         //     console.log(arrClone, 'arrClone')
//         //     let arrCloneSec = [...arrClone[0].questionType]
//         //     let arrCloneSecB = []
//         //     for (let i in arrClone[0].questionType) {
//         //         let o = Math.floor(Math.random() * arrCloneSec.length)
//         //         arrCloneSecB.push(arrCloneSec[o])
//         //         arrCloneSec.splice(o, 1)
//         //     }
//         //     if (i === 0) {
//         //         setFirstArr(arrCloneSecB)
//         //     } else if (i === 1) {
//         //         setSecondArr(arrCloneSecB)
//         //     } else if (i === 2) {
//         //         setthirdArr(arrCloneSecB)
//         //     } else {
//         //         setforthArr(arrCloneSecB)
//         //     }
//         // };
//     }
//     const arrLtts = ['A', 'B', 'C', 'D']
//     // console.log(allTestInfo)
//     const printMFunc = () => {
//         window.print()
//     }
//     let questCount: number = 0
//     console.log(firstArr, secondArr, secondBArr, thirdArr, thirdBArr)
//     const dispatch = useDispatch()
//     const generatenewWritettest = () => {
//         // console.log(subjectArr, subjectName, examName, 'subjectArrsubjectArrsubjectArr')
//         // subjectArr.map((val) => {
//         //     if (val.subjectName === subjectName) {
//         //         val.exams.map((val1) => {
//         //             if (val1.name === examName) {
//         //                 console.log(val1.info, val1.name, 'val1.info,val1.infoval1.info,val1.info')
//         dispatch(changeAllTest({ info: allTestArrmk }))
//         navigate('/write-new-test')
//         // downloadFile()
//         //             }
//         //         })
//         //     }
//         // })
//     }
//     // test info
//     let writeTestAnswersArr: Array<AnwersArrType> = []
//     const getWritenTestAnswers = (answer: number | null, questNum: any) => {
//         let { name } = questNum.target
//         console.log(questNum)
//         let obj = {
//             questNum: name,
//             answer
//         }
//         if (writeTestAnswersArr.length === 0) { writeTestAnswersArr.push(obj) } else {
//             let isInc = false
//             for (let i in writeTestAnswersArr) {
//                 if (writeTestAnswersArr[i].questNum === obj.questNum) {
//                     writeTestAnswersArr[i] = { ...obj }
//                     isInc = true
//                 }
//             }
//             if (!isInc) {
//                 writeTestAnswersArr.push(obj)
//             }
//         }
//         console.log(writeTestAnswersArr, 'writeTestAnswersArrwriteTestAnswersArrwriteTestAnswersArr')
//         dispatch(updateArrAllAnswers({ info: obj }))
//     }
//     const getWritenTestSecAnswers = (answerYesOrNot: string | null, questNum: any) => {
//         let { name } = questNum.target
//         let obj = {
//             questNum: name,
//             answerYesOrNot
//         }
//         if (writeTestAnswersArr.length === 0) { writeTestAnswersArr.push(obj) } else {
//             let isInc = false
//             for (let i in writeTestAnswersArr) {
//                 if (writeTestAnswersArr[i].questNum === obj.questNum) {
//                     writeTestAnswersArr[i] = { ...obj }
//                     isInc = true
//                 }
//             }
//             if (!isInc) {
//                 writeTestAnswersArr.push(obj)
//             }
//         }
//         console.log(writeTestAnswersArr, 'writeTestAnswersArrwriteTestAnswersArrwriteTestAnswersArr')
//         dispatch(updateArrAllAnswers({ info: obj }))
//     }
//     const getWritenTestThirdAnswers = (answerBtype: string | null, questNum: any) => {
//         let { name } = questNum.target
//         let obj = {
//             questNum: name,
//             answerBtype
//         }
//         if (writeTestAnswersArr.length === 0) { writeTestAnswersArr.push(obj) } else {
//             let isInc = false
//             for (let i in writeTestAnswersArr) {
//                 if (writeTestAnswersArr[i].questNum === obj.questNum) {
//                     writeTestAnswersArr[i] = { ...obj }
//                     isInc = true
//                 }
//             }
//             if (!isInc) {
//                 writeTestAnswersArr.push(obj)
//             }
//         }
//         console.log(writeTestAnswersArr, 'writeTestAnswersArrwriteTestAnswersArrwriteTestAnswersArr')
//         dispatch(updateArrAllAnswers({ info: obj }))
//     }
//     const getWritenTestForthAnswers = (shortAnswers: string | null, questNum: any) => {
//         let { name } = questNum.target
//         let obj = {
//             questNum: name,
//             shortAnswers
//         }
//         if (writeTestAnswersArr.length === 0) { writeTestAnswersArr.push(obj) } else {
//             let isInc = false
//             for (let i in writeTestAnswersArr) {
//                 if (writeTestAnswersArr[i].questNum === obj.questNum) {
//                     writeTestAnswersArr[i] = { ...obj }
//                     isInc = true
//                 }
//             }
//             if (!isInc) {
//                 writeTestAnswersArr.push(obj)
//             }
//         }
//         console.log(writeTestAnswersArr, 'writeTestAnswersArrwriteTestAnswersArrwriteTestAnswersArr')
//         dispatch(updateArrAllAnswers({ info: obj }))
//     }
//     console.log(writeTestAnswersArr, 'writeTestAnswersArr333333333')
//     const allAnswersItem = useSelector((state: AppStateType) => state.studentR.allAnswers)
//     console.log(allAnswersItem, 'allAnswersItemallAnswersItem')
//     return (
//         <div className={styles.make_test_content}>
//             <div className={styles.make_test_content_container}>
//                 <div className={styles.make_test_content_container_overlay}>
//                     <div className={styles.make_test_content_container_title_content_in_1}>
//                         <div className={styles.make_test_content_container_title_content_in_1_1}>
//                             <img src={logo} />
//                         </div>
//                         <div className={styles.make_test_content_container_title_content_in_1_2}>
//                             <div className={styles.make_test_content_container_title_content_in_1_2_1}>
//                                 «{allTestTxtHkInfo?.building}»
//                             </div>
//                             {/* <div className={styles.make_test_content_container_title_content_in_1_2_1}>
//                                 ՊԵՏԱԿԱՆ ՔՈԼԵՋ»
//                             </div> */}
//                             <div className={styles.make_test_content_container_title_content_in_1_2_1}>
//                                 <span>ԱՐԴՅՈՒՆՔ</span> {allTestTxtHkInfo?.resultNum}
//                             </div>
//                         </div>
//                         <div className={styles.make_test_content_container_title_content_in_1_3}>
//                             <div className={styles.make_test_content_container_title_content_in_1_3_1}>
//                                 Գնահաատական
//                             </div>
//                             <div className={styles.make_test_content_container_title_content_in_1_3_2}>
//                                 <span>/20</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={styles.make_test_content_container_title_content_in_2}>
//                         <div className={styles.make_test_content_container_title_content_in_2_1_b}>
//                             <div className={styles.make_test_content_container_title_content_in_2_1_1}>
//                                 Կուրս՝
//                             </div>
//                             <div className={styles.make_test_content_container_title_content_in_2_1_1}>
//                                 Առարկա՝
//                             </div>
//                             <div className={styles.make_test_content_container_title_content_in_2_1_1}>
//                                 Դասախոս՝
//                             </div>
//                         </div>
//                         <div className={styles.make_test_content_container_title_content_in_2_1}>
//                             <div className={styles.make_test_content_container_title_content_in_2_1_1}>
//                                 {allTestTxtHkInfo?.clssNum}
//                             </div>
//                             <div className={styles.make_test_content_container_title_content_in_2_1_1}>
//                                 {allTestTxtHkInfo?.arName}
//                             </div>
//                             <div className={styles.make_test_content_container_title_content_in_2_1_1}>
//                                 {allTestTxtHkInfo?.teachName}
//                             </div>
//                         </div>
//                         <div className={styles.make_test_content_container_title_content_in_2_2}>
//                             <div className={styles.make_test_content_container_title_content_in_2_1_1}>
//                                 Խումբ՝ ______________________________
//                             </div>
//                             <div className={styles.make_test_content_container_title_content_in_2_1_1}>
//                                 Ուսանող՝ __________________________
//                             </div>
//                             <div className={styles.make_test_content_container_title_content_in_2_1_1_b}>
//                                 {/* <span>01</span> / <span>դեկտեմբեր</span> / 2023թ․ */}
//                                 {allTestTxtHkInfo?.date}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={styles.make_test_content_title}>
//                     ՏԱՐԲԵՐԱԿ N ___
//                 </div>
//                 <div className={styles.make_test_content_container_overlay}>
//                     <div className={styles.make_test_content_container_overla_in_itemy}>
//                         {
//                             firstArr.length > 0
//                                 ?
//                                 <div className={styles.variant_content}>
//                                     Ա մակարդակ
//                                 </div>
//                                 :
//                                 null
//                         }
//                         <div className={styles.test_exam_questiokn_content}>
//                             {
//                                 firstArr.map((val, ind) => {
//                                     // if (Number(ind) <= Number(allTestInfo.thchoose) - 1) {
//                                     questCount += 1
//                                     let fixInd: any = null
//                                     console.log('ddd')
//                                     for (let i in allAnswersItem) {
//                                         console.log(allAnswersItem[i].questNum, questCount, 'questNum, countBg')
//                                         if (allAnswersItem[i].questNum == questCount) {
//                                             fixInd = allAnswersItem[i].answer
//                                         }
//                                     }
//                                     console.log(fixInd, 'fixInd')
//                                     if (val) {
//                                         return (
//                                             <div className={styles.make_test_content_in_item_in_1}>
//                                                 <div className={styles.make_test_content_in_item_in_1_1}>
//                                                     <div className={styles.make_test_content_in_item_in_1_1c}>
//                                                         <div className={styles.make_test_content_in_item_in_1_1_1}>
//                                                             {questCount}.
//                                                         </div>
//                                                         {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
//                                                             {val.questionText}
//                                                         </div> */}
//                                                         <div dangerouslySetInnerHTML={{ __html: val.questionText }} >
//                                                         </div>
//                                                     </div>
//                                                     <div className={styles.make_test_content_in_item_in_1_1_2}>
//                                                         {val.questionPoint} մ․
//                                                     </div>
//                                                 </div>
//                                                 {
//                                                     val.questionDescText
//                                                         ?
//                                                         <div className={styles.make_test_content_in_item_in_1_2}>
//                                                             {val.questionDescText}
//                                                         </div>
//                                                         :
//                                                         null
//                                                 }
//                                                 {
//                                                     val.selectedImage
//                                                         ?
//                                                         <div className={styles.make_test_content_in_item_in_1_2}>
//                                                             <img src={val.selectedImage} alt="" />
//                                                         </div>
//                                                         :
//                                                         null
//                                                 }
//                                                 <div className={styles.make_test_content_in_item_in_1_3}>
//                                                     {
//                                                         val.answersInputs?.map((val4, ind4) => {
//                                                             if (fixInd == ind4 + 1) {
//                                                                 return (
//                                                                     <div style={{ width: val4.text.length > 20 ? '100%' : '50%' }} className={styles.make_test_content_in_item_in_1_3_1}>
//                                                                         <div className={styles.test_content_third_content_3_2_3_1_2_1}>
//                                                                             <input checked onClick={(e) => getWritenTestAnswers(ind4 + 1, e)} type="radio" name={`${questCount}`} />
//                                                                         </div>
//                                                                         <div className={styles.make_test_content_in_item_in_1_3_1_1}>
//                                                                             {ind4 === 0 ? 'ա)' : ind4 === 1 ? 'բ)' : ind4 === 2 ? 'գ)' : 'դ)'}
//                                                                         </div>
//                                                                         <div className={styles.test_content_third_content_3_2_3_1_2_122e3}>
//                                                                             <img src={val4.picture} alt="" />
//                                                                         </div>
//                                                                         <div className={styles.make_test_content_in_item_in_1_3_1_2}>
//                                                                             {/* {ind4 === 0 ? val.answersInputs?.input0 : ind4 === 1 ? val.answersInputs?.input1 : ind4 === 2 ? val.answersInputs?.input2 : val.answersInputs?.input3} */}
//                                                                             {val4.text}
//                                                                         </div>
//                                                                     </div>
//                                                                 )
//                                                                 // return (
//                                                                 //     <div className={styles.test_content_third_content_3_2_3_1_2_1}>
//                                                                 //         <input checked onClick={(e) => getWritenTestAnswers(ind4 + 1, e)} type="radio" name={`${countBg}`} />
//                                                                 //     </div>
//                                                                 // )
//                                                             } else {
//                                                                 return (
//                                                                     <div style={{ width: val4.text.length > 20 ? '100%' : '50%' }} className={styles.make_test_content_in_item_in_1_3_1}>
//                                                                         <div className={styles.test_content_third_content_3_2_3_1_2_1}>
//                                                                             <input onClick={(e) => getWritenTestAnswers(ind4 + 1, e)} type="radio" name={`${questCount}`} />
//                                                                         </div>
//                                                                         <div className={styles.make_test_content_in_item_in_1_3_1_1}>
//                                                                             {ind4 === 0 ? 'ա)' : ind4 === 1 ? 'բ)' : ind4 === 2 ? 'գ)' : 'դ)'}
//                                                                         </div>
//                                                                         <div className={styles.test_content_third_content_3_2_3_1_2_122e3}>
//                                                                             <img src={val4.picture} alt="" />
//                                                                         </div>
//                                                                         <div className={styles.make_test_content_in_item_in_1_3_1_2}>
//                                                                             {/* {ind4 === 0 ? val.answersInputs?.input0 : ind4 === 1 ? val.answersInputs?.input1 : ind4 === 2 ? val.answersInputs?.input2 : val.answersInputs?.input3} */}
//                                                                             {val4.text}
//                                                                         </div>
//                                                                     </div>
//                                                                 )
//                                                                 // return (
//                                                                 //     <div className={styles.test_content_third_content_3_2_3_1_2_1}>
//                                                                 //         <input onClick={(e) => getWritenTestAnswers(ind4 + 1, e)} type="radio" name={`${countBg}`} />
//                                                                 //     </div>
//                                                                 // )
//                                                             }
//                                                         })
//                                                     }
//                                                     {/* <div style={{ width: Number(val.answersInputs?.input0.length) > 20 ? '100%' : '50%' }} className={styles.make_test_content_in_item_in_1_3_1}>
//                                                         <div className={styles.make_test_content_in_item_in_1_3_1_1}>
//                                                             ա)
//                                                         </div>
//                                                         <div className={styles.make_test_content_in_item_in_1_3_1_2}>
//                                                             {
//                                                                 val.answersInputs?.input0
//                                                             }
//                                                         </div>
//                                                     </div>
//                                                     <div style={{ width: Number(val.answersInputs?.input0.length) > 20 ? '100%' : '50%' }} className={styles.make_test_content_in_item_in_1_3_1}>
//                                                         <div className={styles.make_test_content_in_item_in_1_3_1_1}>
//                                                             բ)
//                                                         </div>
//                                                         <div className={styles.make_test_content_in_item_in_1_3_1_2}>
//                                                             {
//                                                                 val.answersInputs?.input1
//                                                             }
//                                                         </div>
//                                                     </div>
//                                                     <div style={{ width: Number(val.answersInputs?.input0.length) > 20 ? '100%' : '50%' }} className={styles.make_test_content_in_item_in_1_3_1}>
//                                                         <div className={styles.make_test_content_in_item_in_1_3_1_1}>
//                                                             գ)
//                                                         </div>
//                                                         <div className={styles.make_test_content_in_item_in_1_3_1_2}>
//                                                             {
//                                                                 val.answersInputs?.input2
//                                                             }
//                                                         </div>
//                                                     </div>
//                                                     <div style={{ width: Number(val.answersInputs?.input0.length) > 20 ? '100%' : '50%' }} className={styles.make_test_content_in_item_in_1_3_1}>
//                                                         <div className={styles.make_test_content_in_item_in_1_3_1_1}>
//                                                             դ)
//                                                         </div>
//                                                         <div className={styles.make_test_content_in_item_in_1_3_1_2}>
//                                                             {
//                                                                 val.answersInputs?.input3
//                                                             }
//                                                         </div>
//                                                     </div> */}
//                                                 </div>
//                                             </div>
//                                         )
//                                     }
//                                     // }
//                                 })
//                             }
//                         </div>
//                     </div>
//                     {/* <div className={styles.make_test_content_in_item}> */}
//                     {/* </div> */}
//                     {/* <div className={styles.make_test_content_in_item}> */}
//                     <div className={styles.make_test_content_container_overla_in_itemy}>
//                         {
//                             secondArr.length > 0 || secondBArr.length > 0
//                                 ?
//                                 <div className={styles.variant_content}>
//                                     Բ մակարդակ
//                                 </div>
//                                 :
//                                 null
//                         }
//                         <div className={styles.test_exam_questiokn_content}>
//                             {
//                                 secondArr.map((val, ind) => {
//                                     // if (Number(ind) <= Number(allTestInfo.thshort) - 1) {
//                                     questCount += 1
//                                     let fixInd: any = null
//                                     console.log('ddd')
//                                     for (let i in allAnswersItem) {
//                                         console.log(allAnswersItem[i].questNum, questCount, 'questNum, countBg')
//                                         if (allAnswersItem[i].questNum == questCount) {
//                                             fixInd = allAnswersItem[i].answerBtype
//                                         }
//                                     }
//                                     console.log(fixInd, 'variant')
//                                     if (val) {
//                                         return (
//                                             <div className={styles.make_test_content_in_item_in_1}>
//                                                 <div className={styles.make_test_content_in_item_in_1_1}>
//                                                     <div className={styles.make_test_content_in_item_in_1_1c}>
//                                                         <div className={styles.make_test_content_in_item_in_1_1_1}>
//                                                             {questCount}.
//                                                         </div>
//                                                         {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
//                                                             {val.questionText}
//                                                         </div> */}
//                                                         <div dangerouslySetInnerHTML={{ __html: val.questionText }} >
//                                                         </div>
//                                                     </div>
//                                                     <div className={styles.make_test_content_in_item_in_1_1_2}>
//                                                         {val.questionPoint} մ․
//                                                     </div>
//                                                 </div>
//                                                 {
//                                                     val.questionDescText
//                                                         ?
//                                                         <div className={styles.make_test_content_in_item_in_1_2}>
//                                                             {val.questionDescText}
//                                                         </div>
//                                                         :
//                                                         null
//                                                 }
//                                                 <div className={styles.make_test_content_in_item_in_1_3_type}>
//                                                     <div className={styles.make_test_content_in_item_in_txt_content_s_item_2}>
//                                                         <input value={fixInd} onChange={(e) => getWritenTestThirdAnswers(e.target.value, e)} type="text" name={`${questCount}`} />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )
//                                     }
//                                     // }
//                                 })
//                             }
//                             {
//                                 secondBArr.map((val, ind) => {
//                                     let shortAnswrMinStrItem = ''
//                                     // if (Number(ind) <= Number(allTestInfo.thshort) - 1) {
//                                     questCount += 1
//                                     let fixInd: any = ''
//                                     console.log('ddd')
//                                     for (let i in allAnswersItem) {
//                                         console.log(allAnswersItem[i].questNum, questCount, 'questNum, countBg')
//                                         if (allAnswersItem[i].questNum == questCount) {
//                                             fixInd = allAnswersItem[i].shortAnswers
//                                         }
//                                     }
//                                     console.log(fixInd, 'variant')
//                                     if (val) {
//                                         return (
//                                             <div className={styles.make_test_content_in_item_in_1}>
//                                                 <div className={styles.make_test_content_in_item_in_1_1}>
//                                                     <div className={styles.make_test_content_in_item_in_1_1c}>
//                                                         <div className={styles.make_test_content_in_item_in_1_1_1}>
//                                                             {questCount}.
//                                                         </div>
//                                                         {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
//                                                             {val.questionText}
//                                                         </div> */}
//                                                         <div dangerouslySetInnerHTML={{ __html: val.questionText }} >
//                                                         </div>
//                                                     </div>
//                                                     <div className={styles.make_test_content_in_item_in_1_1_2}>
//                                                         {val.questionPoint} մ․
//                                                     </div>
//                                                 </div>
//                                                 {
//                                                     val.questionDescText
//                                                         ?
//                                                         <div className={styles.make_test_content_in_item_in_1_2}>
//                                                             {val.questionDescText}
//                                                         </div>
//                                                         :
//                                                         null
//                                                 }
//                                                 <div className={styles.make_test_content_in_item_in_1_3_type}>
//                                                     <div className={styles.make_test_content_in_item_in_txt_content_s_item_2}>
//                                                         {
//                                                             [...new Array(5)].map((val6, ind6) => {
//                                                                 return (
//                                                                     <div className={styles.make_test_content_in_item_in_txt_content_s_item_2_1}>
//                                                                         <input onChange={(e) => {
//                                                                             shortAnswrMinStrItem += e.target.value
//                                                                             if (ind6 === 4) {
//                                                                                 getWritenTestForthAnswers(shortAnswrMinStrItem, e)
//                                                                             }
//                                                                         }} type="text" value={fixInd[ind6]} name={`${questCount}`} maxLength={1} className={styles.txtinp} />
//                                                                     </div>
//                                                                 )
//                                                             })
//                                                         }
//                                                         {/* {
//                                                             [...new Array(5)].map((val) => {
//                                                                 return (
//                                                                     <div className={styles.make_test_content_in_item_in_txt_content_s_item_2_1}>
//                                                                         <input onChange={(e) => {
//                                                                             shortAnswrMinStrItem += e.target.value
//                                                                             getWritenTestForthAnswers(shortAnswrMinStrItem, e)
//                                                                         }} type="text" name={`${questCount}`} maxLength={1} className={styles.txtinp} />
//                                                                     </div>
//                                                                 )
//                                                             })
//                                                         } */}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )
//                                     }
//                                     // }
//                                 })
//                             }
//                         </div>
//                     </div>
//                     {/* </div> */}
//                     {/* <div className={styles.make_test_content_in_item}> */}
//                     <div className={styles.make_test_content_container_overla_in_itemy}>
//                         {
//                             thirdArr.length > 0 || thirdBArr.length > 0
//                                 ?
//                                 <div className={styles.variant_content}>
//                                     Գ մակարդակ
//                                 </div>
//                                 :
//                                 null
//                         }
//                         <div className={styles.test_exam_questiokn_content}>
//                             {
//                                 thirdArr.map((val, ind) => {
//                                     console.log(thirdArr, 'thirdArr')
//                                     // if (Number(ind) <= Number(allTestInfo.thshortanvariant) - 1) {
//                                     questCount += 1
//                                     let fixInd: any = null
//                                     console.log('ddd')
//                                     for (let i in allAnswersItem) {
//                                         console.log(allAnswersItem[i].questNum, questCount, 'questNum, countBg')
//                                         if (allAnswersItem[i].questNum == questCount) {
//                                             fixInd = allAnswersItem[i].answerYesOrNot
//                                         }
//                                     }
//                                     console.log(fixInd, 'variant')
//                                     if (val) {
//                                         return (
//                                             <div className={styles.make_test_content_in_item_in_1}>
//                                                 <div className={styles.make_test_content_in_item_in_1_1}>
//                                                     <div className={styles.make_test_content_in_item_in_1_1c}>
//                                                         <div className={styles.make_test_content_in_item_in_1_1_1}>
//                                                             {questCount}.
//                                                         </div>
//                                                         {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
//                                                             {val.questionText}
//                                                         </div> */}
//                                                         <div dangerouslySetInnerHTML={{ __html: val.questionText }} >
//                                                         </div>
//                                                     </div>
//                                                     <div className={styles.make_test_content_in_item_in_1_1_2}>
//                                                         {val.questionPoint} մ․
//                                                     </div>
//                                                 </div>
//                                                 {
//                                                     val.questionDescText
//                                                         ?
//                                                         <div className={styles.make_test_content_in_item_in_1_2}>
//                                                             {val.questionDescText}
//                                                         </div>
//                                                         :
//                                                         null
//                                                 }
//                                                 <div className={styles.make_test_content_in_item_in_1_3_type}>
//                                                     <div className={styles.make_test_content_in_item_in_txt_content_s_item_2}>
//                                                         {
//                                                             (fixInd === 'yes') ? <div className={styles.test_content_third_content_3_2_3_1_2_1}>
//                                                                 <input checked onClick={(e) => getWritenTestSecAnswers('yes', e)} name={`${questCount}`} type="radio" />
//                                                                 <input onClick={(e) => getWritenTestSecAnswers('no', e)} name={`${questCount}`} type="radio" />
//                                                             </div>
//                                                                 : fixInd === 'no'
//                                                                     ?
//                                                                     <div className={styles.test_content_third_content_3_2_3_1_2_1}>
//                                                                         <input onClick={(e) => getWritenTestSecAnswers('yes', e)} name={`${questCount}`} type="radio" />
//                                                                         <input checked onClick={(e) => getWritenTestSecAnswers('no', e)} name={`${questCount}`} type="radio" />
//                                                                     </div>
//                                                                     :
//                                                                     <div className={styles.test_content_third_content_3_2_3_1_2_1}>
//                                                                         <input onClick={(e) => getWritenTestSecAnswers('yes', e)} name={`${questCount}`} type="radio" />
//                                                                         <input onClick={(e) => getWritenTestSecAnswers('no', e)} name={`${questCount}`} type="radio" />
//                                                                     </div>
//                                                         }
//                                                         {/* {
//                                                             ['Ճիշտ է', ' Սխալ է'].map((val5, ind5) => {
//                                                                 // let ysrntItem = ind2 === 0 ? 'yes' : 'no'
//                                                                 return (
//                                                                     <div className={styles.test_content_third_content_3_2_3_1_2_1}>
//                                                                         <div>
//                                                                             {val5}
//                                                                         </div>
//                                                                         <input onClick={(e) => getWritenTestSecAnswers(ind5 === 0 ? 'yes' : 'no', e)} name={`${questCount}`} type="radio" />
//                                                                     </div>
//                                                                 )
//                                                             })
//                                                         } */}
//                                                         {/* <div>
//                                                             <div>
//                                                                 Ճիշտ է
//                                                             </div>
//                                                             <div>
//                                                                 <input type="radio" name={`${ind}`} />
//                                                             </div>
//                                                         </div>
//                                                         <div>
//                                                             <div>
//                                                                 Սխալ է
//                                                             </div>
//                                                             <div>
//                                                                 <input type="radio" name={`${ind}`} />
//                                                             </div>
//                                                         </div> */}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )
//                                     }
//                                 })
//                             }
//                             {
//                                 thirdBArr.map((val, ind) => {
//                                     // if (Number(ind) <= Number(allTestInfo.thshortanvariant) - 1) {
//                                     questCount += 1
//                                     let fixInd: any = null
//                                     console.log('ddd')
//                                     for (let i in allAnswersItem) {
//                                         console.log(allAnswersItem[i].questNum, questCount, 'questNum, countBg')
//                                         if (allAnswersItem[i].questNum == questCount) {
//                                             fixInd = allAnswersItem[i].answerBtype
//                                         }
//                                     }
//                                     console.log(fixInd, 'variant')
//                                     if (val) {
//                                         return (
//                                             <div className={styles.make_test_content_in_item_in_1}>
//                                                 <div className={styles.make_test_content_in_item_in_1_1}>
//                                                     <div className={styles.make_test_content_in_item_in_1_1c}>
//                                                         <div className={styles.make_test_content_in_item_in_1_1_1}>
//                                                             {questCount}.
//                                                         </div>
//                                                         {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
//                                                             {val.questionText}
//                                                         </div> */}
//                                                         <div dangerouslySetInnerHTML={{ __html: val.questionText }} >
//                                                         </div>
//                                                     </div>
//                                                     <div className={styles.make_test_content_in_item_in_1_1_2}>
//                                                         {val.questionPoint} մ․
//                                                     </div>
//                                                 </div>
//                                                 {
//                                                     val.questionDescText
//                                                         ?
//                                                         <div className={styles.make_test_content_in_item_in_1_2}>
//                                                             {val.questionDescText}
//                                                         </div>
//                                                         :
//                                                         null
//                                                 }
//                                                 <div className={styles.make_test_content_in_item_in_1_3_type}>
//                                                     <div className={styles.make_test_content_in_item_in_txt_content_s_item_2}>
//                                                         <input value={fixInd} onChange={(e) => getWritenTestThirdAnswers(e.target.value, e)} type="text" name={`${questCount}`} />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )
//                                     }
//                                     // }
//                                 })
//                             }
//                         </div>
//                     </div>
//                     {/* </div> */}
//                 </div>
//             </div>
//             <div className={styles.subject_exma_item_content_2_item_2_item_1_print_content_1}>
//                 <button onClick={() => generatenewWritettest()}>Ձևաթուղթ</button>
//             </div>
//             <div className={styles.printPart}>
//                 <button onClick={() => printMFunc()}><FaPrint /></button>
//             </div>
//         </div >
//     )
// }
// export default StudentTestComp
