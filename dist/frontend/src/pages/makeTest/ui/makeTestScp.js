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
const makeTestStl_module_css_1 = __importDefault(require("./makeTestStl.module.css"));
const redux_store_1 = require("entities/store/redux-store");
const react_redux_1 = require("react-redux");
const _1_png_1 = __importDefault(require("../images/1.png"));
const react_router_dom_1 = require("react-router-dom");
const testReducer_1 = require("entities/testR/testReducer");
const MakeTestComp = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch((0, testReducer_1.changeIsRndItm)(true));
    }, []);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const isAdminItem = (0, react_redux_1.useSelector)((state) => state.adminR.isAdmin);
    if (!isAdminItem) {
        navigate('/');
    }
    const aDispatch = (0, redux_store_1.useAppDispatch)();
    const allTestmk = (0, react_redux_1.useSelector)((state) => state.makeTestR.allQuestTest);
    const allTestArrmk = (0, react_redux_1.useSelector)((state) => state.testR.allTests);
    // console.log(allTestArrmk)
    const allTestInfo = (0, react_redux_1.useSelector)((state) => state.makeTestR.questCountInfo);
    console.log(allTestInfo, '4444441');
    const allTestTxtInfo = (0, react_redux_1.useSelector)((state) => state.makeTestR.questInfo);
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
        if (num === 0) {
            return arr;
        }
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
                setSecondArr(generateMiniArr(Number(allTestInfo.thshort), [...allTestArrmk[i].questions[0].questionType]));
                // setSecondBArr(allTestArrmk[i].questions[1].questionType)
                setSecondBArr(generateMiniArr(Number(allTestInfo.thshortb), [...allTestArrmk[i].questions[1].questionType]));
            }
            else {
                // setThirdArr(allTestArrmk[i].questions[0].questionType)
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
    return (<div className={makeTestStl_module_css_1.default.make_test_content}>

            <div className={makeTestStl_module_css_1.default.make_test_content_container}>


                <div className={makeTestStl_module_css_1.default.make_test_content_container_overlay}>
                    <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_1}>
                        <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_1_1}>
                            <img src={_1_png_1.default}/>
                        </div>
                        <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_1_2}>
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_1_2_1}>
                                «{allTestTxtHkInfo.building}»
                            </div>
                            {/* <div className={styles.make_test_content_container_title_content_in_1_2_1}>
            ՊԵՏԱԿԱՆ ՔՈԼԵՋ»
        </div> */}
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_1_2_1}>
                                <span>ԱՐԴՅՈՒՆՔ</span> {allTestTxtHkInfo.resultNum}
                            </div>
                        </div>
                        <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_1_3}>
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_1_3_1}>
                                Գնահաատական
                            </div>
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_1_3_2}>
                                <span>/20</span>
                            </div>
                        </div>
                    </div>
                    <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2}>
                        <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_b}>
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                Կուրս՝
                            </div>
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                Առարկա՝
                            </div>
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                Դասախոս՝
                            </div>
                        </div>
                        <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1}>
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                {allTestTxtHkInfo.clssNum}
                            </div>
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                {allTestTxtHkInfo.arName}
                            </div>
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                {allTestTxtHkInfo.teachName}
                            </div>
                        </div>
                        <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2_2}>
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                Խումբ՝ ______________________________
                            </div>
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1}>
                                Ուսանող՝ __________________________
                            </div>
                            <div className={makeTestStl_module_css_1.default.make_test_content_container_title_content_in_2_1_1_b}>
                                {/* <span>01</span> / <span>դեկտեմբեր</span> / 2023թ․ */}
                                {allTestTxtHkInfo.date}
                            </div>
                        </div>
                    </div>
                </div>




                <div className={makeTestStl_module_css_1.default.make_test_content_title}>
                    ՏԱՐԲԵՐԱԿ N ___
                </div>
                <div className={makeTestStl_module_css_1.default.make_test_content_container_overlay}>
                    <div className={makeTestStl_module_css_1.default.make_test_content_container_overla_in_itemy}>
                        {firstArr.length > 0
            ?
                <div className={makeTestStl_module_css_1.default.variant_content}>
                                    Ա մակարդակ
                                </div>
            :
                null}
                        <div className={makeTestStl_module_css_1.default.test_exam_questiokn_content}>
                            {firstArr.map((val, ind) => {
            // if (Number(ind) <= Number(allTestInfo.thchoose) - 1) {
            questCount += 1;
            if (val) {
                return (<div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1}>
                                                <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1}>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1c}>
                                                        <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1_1}>
                                                            {questCount}.
                                                        </div>
                                                        {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
                        {val.questionText}
                    </div> */}
                                                        <div dangerouslySetInnerHTML={{ __html: val.questionText }}>

                                                        </div>
                                                    </div>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1_2}>
                                                        {val.questionPoint} մ․
                                                    </div>
                                                </div>
                                                {val.questionDescText
                        ?
                            <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_2}>
                                                            {val.questionDescText}
                                                        </div>
                        :
                            null}
                                                {val.selectedImage
                        ?
                            <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_2}>
                                                            <img src={val.selectedImage} alt=""/>
                                                        </div>
                        :
                            null}
                                                {/* <div className={styles.make_test_content_in_item_in_1_3}>
                        <div style={{ width: Number(val.answersInputs?.input0.length) > 20 ? '100%' : '50%' }} className={styles.make_test_content_in_item_in_1_3_1}>
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
                        </div>
                    </div> */}

                                            </div>);
            }
            // }
        })}
                        </div>
                    </div>
                    {/* <div className={styles.make_test_content_in_item}> */}


                    {/* </div> */}

                    {/* <div className={styles.make_test_content_in_item}> */}
                    <div className={makeTestStl_module_css_1.default.make_test_content_container_overla_in_itemy}>
                        {secondArr.length > 0 || secondBArr.length > 0
            ?
                <div className={makeTestStl_module_css_1.default.variant_content}>
                                    Բ մակարդակ
                                </div>
            :
                null}
                        <div className={makeTestStl_module_css_1.default.test_exam_questiokn_content}>

                            {secondArr.map((val, ind) => {
            // if (Number(ind) <= Number(allTestInfo.thshort) - 1) {
            questCount += 1;
            if (val) {
                return (<div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1}>
                                                <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1}>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1c}>
                                                        <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1_1}>
                                                            {questCount}.
                                                        </div>
                                                        {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
                        {val.questionText}
                    </div> */}
                                                        <div dangerouslySetInnerHTML={{ __html: val.questionText }}>

                                                        </div>
                                                    </div>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1_2}>
                                                        {val.questionPoint} մ․
                                                    </div>
                                                </div>
                                                {val.questionDescText
                        ?
                            <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_2}>
                                                            {val.questionDescText}
                                                        </div>
                        :
                            null}

                                                <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_3_type}>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_txt_content_s_item_2}>
                                                        <input type="text"/>
                                                    </div>
                                                </div>
                                            </div>);
            }
            // }
        })}

                            {secondBArr.map((val, ind) => {
            // if (Number(ind) <= Number(allTestInfo.thshort) - 1) {
            questCount += 1;
            if (val) {
                return (<div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1}>
                                                <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1}>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1c}>
                                                        <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1_1}>
                                                            {questCount}.
                                                        </div>
                                                        {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
                        {val.questionText}
                    </div> */}
                                                        <div dangerouslySetInnerHTML={{ __html: val.questionText }}>

                                                        </div>
                                                    </div>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1_2}>
                                                        {val.questionPoint} մ․
                                                    </div>
                                                </div>
                                                {val.questionDescText
                        ?
                            <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_2}>
                                                            {val.questionDescText}
                                                        </div>
                        :
                            null}

                                                <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_3_type}>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_txt_content_s_item_2}>
                                                        {[...new Array(5)].map((val) => {
                        return (<div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_txt_content_s_item_2_1}>
                                                                        <input type="number" maxLength={1}/>
                                                                    </div>);
                    })}
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
                    <div className={makeTestStl_module_css_1.default.make_test_content_container_overla_in_itemy}>
                        {thirdArr.length > 0 || thirdBArr.length > 0
            ?
                <div className={makeTestStl_module_css_1.default.variant_content}>
                                    Գ մակարդակ
                                </div>
            :
                null}
                        <div className={makeTestStl_module_css_1.default.test_exam_questiokn_content}>

                            {thirdArr.map((val, ind) => {
            console.log(thirdArr, 'thirdArr');
            // if (Number(ind) <= Number(allTestInfo.thshortanvariant) - 1) {
            questCount += 1;
            if (val) {
                return (<div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1}>
                                                <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1}>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1c}>
                                                        <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1_1}>
                                                            {questCount}.
                                                        </div>
                                                        <div dangerouslySetInnerHTML={{ __html: val.questionText }}>

                                                        </div>
                                                        {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
                        {val.questionText}
                    </div> */}
                                                    </div>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1_2}>
                                                        {val.questionPoint} մ․
                                                    </div>
                                                </div>
                                                {val.questionDescText
                        ?
                            <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_2}>
                                                            {val.questionDescText}
                                                        </div>
                        :
                            null}
                                                <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_3_type}>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_txt_content_s_item_2}>
                                                        <div>
                                                            <div>
                                                                Ճիշտ է
                                                            </div>
                                                            <div>
                                                                <input type="radio" name={`${ind}`}/>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                Սխալ է
                                                            </div>
                                                            <div>
                                                                <input type="radio" name={`${ind}`}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>);
            }
        })}
                            {thirdBArr.map((val, ind) => {
            // if (Number(ind) <= Number(allTestInfo.thshortanvariant) - 1) {
            questCount += 1;
            if (val) {
                return (<div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1}>
                                                <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1}>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1c}>
                                                        <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1_1}>
                                                            {questCount}.
                                                        </div>
                                                        {/* <div className={styles.make_test_content_in_item_in_1_1_1_b}>
                        {val.questionText}
                    </div> */}
                                                        <div dangerouslySetInnerHTML={{ __html: val.questionText }}>

                                                        </div>
                                                    </div>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_1_2}>
                                                        {val.questionPoint} մ․
                                                    </div>
                                                </div>
                                                {val.questionDescText
                        ?
                            <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_2}>
                                                            {val.questionDescText}
                                                        </div>
                        :
                            null}
                                                <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_1_3_type}>
                                                    <div className={makeTestStl_module_css_1.default.make_test_content_in_item_in_txt_content_s_item_2}>
                                                        <input type="number"/>
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

            <div className={makeTestStl_module_css_1.default.printPart}>
                <button onClick={() => printMFunc()}>print</button>
            </div>
        </div>);
};
exports.default = MakeTestComp;
