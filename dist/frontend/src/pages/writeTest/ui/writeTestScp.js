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
const react_redux_1 = require("react-redux");
const writeTestStl_module_css_1 = __importDefault(require("./writeTestStl.module.css"));
const _1_png_1 = __importDefault(require("../images/1.png"));
const _2_png_1 = __importDefault(require("../images/2.png"));
const react_router_dom_1 = require("react-router-dom");
const studentReducer_1 = require("entities/student/studentReducer");
const WriteTestComp = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const allTestInfo = (0, react_redux_1.useSelector)((state) => state.studentR.numInfo);
    const allTestTxtInfo = (0, react_redux_1.useSelector)((state) => state.studentR.otherInfo);
    const allTestArrmk = (0, react_redux_1.useSelector)((state) => state.studentR.allTests);
    const arrAllInfoss = (0, react_redux_1.useSelector)((state) => state.testR.allTests);
    const [arrAllInfossHkArr, setArrAllInfossHkArr] = (0, react_1.useState)(arrAllInfoss);
    console.log(allTestInfo, allTestTxtInfo, allTestArrmk, arrAllInfoss, '23333333333333333');
    const filterArr = () => {
        console.log(allTestArrmk, arrAllInfossHkArr, 'allTestArrmk');
        for (let i = 0; i < arrAllInfoss.length; i++) {
            if (i === 0) {
                arrAllInfoss[i].questions[0].questionType = arrAllInfoss[i].questions[0].questionType.slice(0, Number(allTestInfo.thchoose));
                let objClone = Object.assign({}, arrAllInfoss[i].questions[0]);
                // objClone.questionType = [...objClone.questionType.slice(0, Number(allTestInfo.thchoose))]
                // console.log(objClone, 'arrClonearrClonearrClone')
                // arrAllInfossHkArr[i].questions[0] = objClone
                // arrAllInfoss[i].questions.splice(0, 1);
                // arrAllInfoss[i].questions.push(objClone)
                // console.log(arrAllInfoss[i], '2223arrClone')
                // setFirstArr(generateMiniArr(Number(allTestInfo.thchoose), [...allTestArrmk[i].questions[0].questionType]))
                // setFirstArr(arrCloneSecB)
            }
            else if (i === 1) {
                arrAllInfoss[i].questions[0].questionType = arrAllInfoss[i].questions[0].questionType.slice(0, Number(allTestInfo.thshort));
                arrAllInfoss[i].questions[1].questionType = arrAllInfoss[i].questions[1].questionType.slice(0, Number(allTestInfo.thshortb));
                // setSecondArr(generateMiniArr(Number(allTestInfo.thshort), [...allTestArrmk[i].questions[0].questionType]))
                // setSecondBArr(generateMiniArr(Number(allTestInfo.thshortb), [...allTestArrmk[i].questions[1].questionType]))
            }
            else {
                arrAllInfoss[i].questions[0].questionType = arrAllInfoss[i].questions[0].questionType.slice(0, Number(allTestInfo.thshortanvariant));
                arrAllInfoss[i].questions[1].questionType = arrAllInfoss[i].questions[1].questionType.slice(0, Number(allTestInfo.thshortcctgry));
                // setThirdArr(generateMiniArr(Number(allTestInfo.thshortanvariant), [...allTestArrmk[i].questions[0].questionType]))
                // setThirddBArr(generateMiniArr(Number(allTestInfo.thshortcctgry), [...allTestArrmk[i].questions[1].questionType]))
            }
        }
        console.log(allTestArrmk, 'allTestArrmk before');
    };
    (0, react_1.useEffect)(() => {
        // filterArr()
    }, []);
    const isAdminItem = (0, react_redux_1.useSelector)((state) => state.adminR.isAdmin);
    if (isAdminItem) {
        navigate('/');
    }
    const chAnsQuestCountItem = (0, react_redux_1.useSelector)((state) => state.testR.allInfo);
    const [inputValues, setInputValues] = (0, react_1.useState)({
        num1: '',
        num2: '',
        num3: '',
        num4: '',
        num5: '',
        num6: '',
    });
    // using array for wrong answers
    const [inputSecValues, setInputSecValues] = (0, react_1.useState)(['', '', '']);
    const handleSecChange = (index) => (event) => {
        // Limit the input length to 5 characters
        const newValue = event.target.value.length <= 5 ? event.target.value : inputSecValues[index];
        setInputSecValues((prevValues) => {
            const newInputValues = [...prevValues];
            newInputValues[index] = newValue;
            return newInputValues;
        });
    };
    const handleChange = (inputName) => (event) => {
        // Limit the input length to 5 characters
        const newValue = event.target.value.length <= 1 ? event.target.value : inputValues[inputName];
        setInputValues((prevValues) => (Object.assign(Object.assign({}, prevValues), { [inputName]: newValue })));
    };
    // first part items
    // const [infoSttngs, setInfoSttngs] = useState<number>(Math.ceil(Number(chAnsQuestCountItem.chooseAnswerQuest) / 19))
    let lastIndex = 0;
    let isLoopEnd = false;
    // second part items
    // const infoSecSettings = Math.ceil(Number(chAnsQuestCountItem.shortAnswerQuest) / 3)
    let isSecLoopEnd = false;
    let lastSecIndex = 0;
    const infoForthSettings = Math.ceil(Number(chAnsQuestCountItem.chooseAnswerBQuest) / 19);
    let isForthLoopEnd = false;
    let lastForthIndex = 0;
    const infoFivthSettings = Math.ceil(Number(chAnsQuestCountItem.shortAnswerCQuest) / 3);
    let isFivthLoopEnd = false;
    let lastFivthIndex = 0;
    const infoSixthSettings = Math.ceil(Number(chAnsQuestCountItem.shortAnswerDQuest) / 3);
    let isSixthLoopEnd = false;
    let lastSixthIndex = 0;
    // const infoSeventhSettings = Math.ceil(Number(chAnsQuestCountItem.shortAnswerEQuest) / 10)
    // let isSeventhLoopEnd = false
    // let lastSeventhIndex = 0
    // const infoEightSettings = Math.ceil(Number(chAnsQuestCountItem.wrongChooseAnswerQuest) / 3)
    // let isEightLoopEnd = false
    // let lastEightIndex = 0
    // const infoNinethSettings = Math.ceil(Number(chAnsQuestCountItem.wrongShortAnswerQuest) / 3)
    // let isNinethLoopEnd = false
    // let lastNinethIndex = 0
    // dd start
    let startIndex = 0;
    let startIndexCount = 0;
    let startSecIndexCount = 0;
    let lastSeccIndex = 0;
    let startSecIndex = 0;
    let startIndexSecCount = 0;
    let lastThirddIndex = 0;
    let startThirdIndex = 0;
    let startIndexThsirdCount = 0;
    let startIndexThsirddCount = 0;
    let lastThirdSIndex = 0;
    // console.log(infoSeventhSettings, chAnsQuestCountItem.shortAnswerEQuest, 'infoSeventhSettingsinfoSeventhSettings')
    // console.log(infoSttngs, Math.ceil(Number(chAnsQuestCountItem.chooseAnswerQuest) / 19), 'infoSttngsinfoSttngsinfoSttngs')
    // console.log(chAnsQuestCountItem.chooseAnswerQuest, infoSttngs.toFixed(1)[infoSttngs.toFixed(1).length - 1], 'chAnsQuestCountItem.chooseAnswerQuest')
    // console.log(Math.ceil(Number(chAnsQuestCountItem.shortAnswerQuest) / 3), chAnsQuestCountItem.shortAnswerQuest, 'chAnsQuestCountItem.shortAnswerQuest')
    // console.log((Number(chAnsQuestCountItem.chooseAnswerQuest) / 19).toFixed(1), (Number(chAnsQuestCountItem.chooseAnswerQuest) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1], 'ss')
    // console.log(infoSecSettings - ((Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount), 'startSecIndexCount')
    // console.log(infoThirdSettings, startSecIndex, 'infoThirdSettingsinfoThirdSettingsinfoThirdSettings')
    // debugger
    // let o = infoThirdSettings - ((infoThirdSettings - ((Math.floor((infoThirdSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount)))
    // console.log((o / 4) * 4, o, infoThirdSettings, 'ssss')
    // let o = infoThirdSettings - (infoThirdSettings - ((Math.floor((infoThirdSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount))
    // console.log(infoSecSettings - ((Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount))
    // console.log(o - (Math.floor(o / 4) * 4), o, infoSecSettings - ((Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount), 'infoThirdSettingsinfoThirdSettings')
    // console.log(infoThirdSettings, 'dddd')
    let countBg = 0;
    const printFunc = () => {
        window.print();
    };
    // // here start
    // const arrAllInfoss = useSelector((state: AppStateType) => state.testR.allTests)
    // const [arrAllInfossHkArr, setArrAllInfossHkArr] = useState<Array<CategoryInfoType>>(arrAllInfoss)
    console.log(arrAllInfoss, 'arrAllInfossarrAllInfossarrAllInfoss');
    (0, react_1.useEffect)(() => {
        setArrAllInfossHkArr(arrAllInfoss);
    }, [arrAllInfoss]);
    // hhere end
    const arrAllInfo = (0, react_redux_1.useSelector)((state) => state.testR.allInfoArr);
    const [arrInfo, setArrInfo] = (0, react_1.useState)(arrAllInfo);
    (0, react_1.useEffect)(() => {
        setArrInfo(arrAllInfo);
        console.log(arrInfo, 'arrInfoarrInfo');
    }, [arrAllInfo]);
    let infoSttngs = 0;
    let infoSecSettings = 0;
    let infoThirdSettings = 0;
    const subjectName = (0, react_redux_1.useSelector)((state) => state.testR.subjectName);
    const examYear = (0, react_redux_1.useSelector)((state) => state.testR.examYear);
    const examType = (0, react_redux_1.useSelector)((state) => state.testR.examType);
    // wrong asnwer part
    const arrAllQuestInfo = (0, react_redux_1.useSelector)((state) => state.testR.wrongQuestArr);
    const [arrWrInfo, setArrWrInfo] = (0, react_1.useState)(arrAllQuestInfo);
    (0, react_1.useEffect)(() => {
        setArrWrInfo(arrAllQuestInfo);
        console.log(arrWrInfo, 'arrWrInfoarrWrInfoarrWrInfoarrWrInfo');
    }, [arrAllQuestInfo]);
    let infoSeventhSettings = 0;
    let infoEightSettings = 0;
    let infoNinethSettings = 0;
    // const [writeTestAnswersArr, setWriteTestAnswersArr] = useState<Array<AnwersArrType>>([])
    let writeTestAnswersArr = [];
    const dispatch = (0, react_redux_1.useDispatch)();
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
    // get text info
    const [txtUserInfoClassValues, setTxtUserInfoClassValues] = (0, react_1.useState)({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
    });
    // Function to handle changes in any input
    const infoClassValuesHandleChange = (event) => {
        const { name, value } = event.target;
        if (/^\d*$/.test(value)) {
            setTxtUserInfoClassValues((prevValues) => (Object.assign(Object.assign({}, prevValues), { [name]: value })));
        }
    };
    // name and other info
    const [userNameInfoValues, setUserNameInfoValues] = (0, react_1.useState)({
        lastName: '',
        userName: '',
        fName: '',
        testVariant: null,
        lastText: ''
    });
    // Function to handle changes in any input
    const userNameInfoValuesInputHandleChange = (event) => {
        const { name, value } = event.target;
        setUserNameInfoValues((prevValues) => (Object.assign(Object.assign({}, prevValues), { [name]: value })));
    };
    const endTestFunc = () => {
        console.log(writeTestAnswersArr, txtUserInfoClassValues, userNameInfoValues, 'allllinfo');
    };
    const allAnswersItem = (0, react_redux_1.useSelector)((state) => state.studentR.allAnswers);
    console.log(allAnswersItem, 'allAnswersItemallAnswersItem');
    return (<div className={writeTestStl_module_css_1.default.test_content_overlay}>
            <div className={writeTestStl_module_css_1.default.test_content}>
                <div className={writeTestStl_module_css_1.default.test_content_container}>
                    <div className={writeTestStl_module_css_1.default.test_content_first_content}>
                        <div className={writeTestStl_module_css_1.default.test_content_first_content_1}>
                            <div className={writeTestStl_module_css_1.default.test_content_first_content_1_1}>
                                <div className={writeTestStl_module_css_1.default.test_content_first_content_1_1_txt_content}>
                                    <div className={writeTestStl_module_css_1.default.test_content_first_content_1_1_txt_content_1}>
                                        {examType} քննություն
                                    </div>
                                    <div className={writeTestStl_module_css_1.default.test_content_first_content_1_1_txt_content_1}>
                                        Առարկա՝ {subjectName}
                                    </div>
                                </div>
                            </div>
                            <div className={writeTestStl_module_css_1.default.test_content_first_content_1_2}>
                                <span>Պատասխանների ձևաթուղթ</span>
                            </div>
                            <div className={writeTestStl_module_css_1.default.test_content_first_content_1_3}>
                                <div className={writeTestStl_module_css_1.default.test_content_first_content_1_3_1}>
                                    <input type="text" onChange={userNameInfoValuesInputHandleChange} name='lastName'/>
                                </div>
                                <div className={writeTestStl_module_css_1.default.test_content_first_content_1_3_2}>
                                    Ազգանուն
                                </div>
                            </div>
                            <div className={writeTestStl_module_css_1.default.test_content_first_content_1_4}>
                                <div className={writeTestStl_module_css_1.default.test_content_first_content_1_4_1}>
                                    <div className={writeTestStl_module_css_1.default.test_content_first_content_1_3_1}>
                                        <input type="text" onChange={userNameInfoValuesInputHandleChange} name='userName'/>
                                    </div>
                                    <div className={writeTestStl_module_css_1.default.test_content_first_content_1_3_2}>
                                        Անուն
                                    </div>
                                </div>
                                <div className={writeTestStl_module_css_1.default.test_content_first_content_1_4_1}>
                                    <div className={writeTestStl_module_css_1.default.test_content_first_content_1_3_1}>
                                        <input type="text" onChange={userNameInfoValuesInputHandleChange} name='fName'/>
                                    </div>
                                    <div className={writeTestStl_module_css_1.default.test_content_first_content_1_3_2}>
                                        Հայրանուն
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={writeTestStl_module_css_1.default.test_content_first_content_2}>
                            <div className={writeTestStl_module_css_1.default.test_content_first_content_2_1}>
                                <div className={writeTestStl_module_css_1.default.test_content_first_content_2_1_1}>
                                    Գնահատական
                                </div>
                                <div className={writeTestStl_module_css_1.default.test_content_first_content_2_1_2}>
                                    /20
                                </div>
                            </div>
                            <div className={writeTestStl_module_css_1.default.test_content_first_content_2_2}>

                                {[...new Array(4)].map((val7, ind7) => {
            return (<div className={writeTestStl_module_css_1.default.test_content_first_content_2_2_1}>
                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                    <input type="text" name={`short1${ind7}`} onChange={infoClassValuesHandleChange} maxLength={1} className={writeTestStl_module_css_1.default.txtinp}/>
                                                </div>

                                            </div>);
        })}

                                {/* <div className={styles.test_content_first_content_2_2_1}>
            <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
            </div>

        </div>

        <div className={styles.test_content_first_content_2_2_1}>
            <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
            </div>

        </div>

        <div className={styles.test_content_first_content_2_2_1}>
            <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
            </div>

        </div>

        <div className={styles.test_content_first_content_2_2_1}>
            <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
            </div>

        </div> */}
                            </div>
                            <div className={writeTestStl_module_css_1.default.test_content_first_content_1_3_2}>
                                Խմբի համար
                            </div>
                        </div>
                        <div className={writeTestStl_module_css_1.default.test_content_first_content_3}>
                            <div className={writeTestStl_module_css_1.default.test_content_first_content_3_1}>
                                <img src={_2_png_1.default} alt=""/>
                            </div>
                            <div className={writeTestStl_module_css_1.default.test_content_first_content_3_2}>
                                {examYear - 1}-{examYear}թ․
                            </div>
                        </div>
                    </div>
                </div>
                <div className={writeTestStl_module_css_1.default.test_content_second_content}>
                    <div className={writeTestStl_module_css_1.default.test_content_second_content_1}>
                        <img src={_1_png_1.default} alt=""/>
                    </div>
                    <div className={writeTestStl_module_css_1.default.test_content_second_content_2}>
                        <div className={writeTestStl_module_css_1.default.test_content_second_content_2_1}></div>
                    </div>
                </div>
                <div className={writeTestStl_module_css_1.default.test_content_container}>
                    <div className={writeTestStl_module_css_1.default.test_content_third_content}>
                        <div className={writeTestStl_module_css_1.default.test_content_third_content_1}>
                            <div className={writeTestStl_module_css_1.default.test_content_third_content_1_overlay}>
                                <div className={writeTestStl_module_css_1.default.test_content_third_content_1_1}>
                                    Եղե՜ք ուշադիր
                                </div>
                                <div className={writeTestStl_module_css_1.default.test_content_third_content_1_2}>
                                    <ul>
                                        <li>
                                            Լրացրեք միայն սև գելային գրիչով
                                        </li>

                                        <li>
                                            Ընտրովի պատասխանով առաջադրանքներում Ձեր ընտրած տարբերակի համարին
                                            համապատասխանող վանդակում դրե՜ք X նշանը
                                        </li>

                                        <li>
                                            Թվերը գրե՜ք հետևյալ տեսքով
                                            <span>
                                                1
                                            </span>
                                            <span>
                                                2
                                            </span>
                                            <span>
                                                3
                                            </span>
                                            <span>
                                                4
                                            </span>
                                            <span>
                                                5
                                            </span>
                                            <span>
                                                6
                                            </span>
                                            <span>
                                                7
                                            </span>
                                            <span>
                                                8
                                            </span>
                                            <span>
                                                9
                                            </span>
                                            <span>
                                                0
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* second part */}
                        <div className={writeTestStl_module_css_1.default.test_content_third_content_2}>
                            <div className={writeTestStl_module_css_1.default.test_content_third_content_2_1}>
                                <div className={writeTestStl_module_css_1.default.test_content_third_content_2_1_1}>
                                    Թեստ N
                                </div>
                                <div className={writeTestStl_module_css_1.default.test_content_third_content_2_1_2}>
                                    {[...new Array(4)].map((val, ind) => {
            return (<div className={writeTestStl_module_css_1.default.test_content_third_content_2_1_2_1}>
                                                    <span>{ind + 1}</span>
                                                    <input type="radio" name={`short${ind + 1}`} onChange={userNameInfoValuesInputHandleChange}/>
                                                </div>);
        })}
                                    {/* <div className={styles.test_content_third_content_2_1_2_1}>
            <span>1</span>
            <input type="radio" name='short1' onChange={userNameInfoValuesInputHandleChange} />
        </div>
        <div className={styles.test_content_third_content_2_1_2_1}>
            <span>2</span>
            <input type="radio" name='short1' />
        </div>
        <div className={styles.test_content_third_content_2_1_2_1}>
            <span>3</span>
            <input type="radio" name='short1' />
        </div>
        <div className={styles.test_content_third_content_2_1_2_1}>
            <span>4</span>
            <input type="radio" name='short1' />
        </div> */}
                                </div>
                            </div>
                        </div>
                        {/* third part */}


                        <div className={writeTestStl_module_css_1.default.ss}>

                            {arrAllInfossHkArr.map((val1) => {
            let isNewCategory = true;
            let isFirstCtShown = false;
            let isSecondCtShown = true;
            let num = 0;
            // second item
            let secNum = 0;
            let secBNum = 0;
            let lstNum = 0;
            let minNum = 0;
            let thirdNum = 0;
            let currentNum = 0;
            let currentNumClone = 0;
            let f = 0;
            let forthNum = 0;
            let forthBNum = 0;
            // debugger
            return (<>
                                            {/* <span className={styles.ctgry_name}>
                    Category {val1.category}
                </span> */}
                                            {val1.questions.map((val, ind) => {
                    // debugger
                    if (Number(allTestInfo.thchoose) > 0) {
                        isFirstCtShown = true;
                    }
                    console.log(secNum, 'secNum');
                    if (val.uniqName === 'choose') {
                        if (Number(allTestInfo.thchoose) > 20) {
                            num = Math.floor(Number(allTestInfo.thchoose) / 20) * 20;
                        }
                        else {
                            num = Number(allTestInfo.thchoose);
                        }
                        return (<>
                                                                {Number(allTestInfo.thchoose)
                                ?
                                    <>
                                                                            {/* {
                                            ind === 0
                                                ?
                                                <div>
                                                    Category {val1.category}
                                                </div>
                                                :
                                                null
                                        } */}

                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3}>
                                                                                {isFirstCtShown
                                            ?
                                                <span className={writeTestStl_module_css_1.default.ctgry_name}>
                                                                                            Category {val1.category}
                                                                                        </span>
                                            :
                                                null}
                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                    Ընտրովի պատասխանով առաջադրանքներ
                                                                                </div>

                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2}>
                                                                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3}>
                                                                                        {[...new Array(Number(allTestInfo.thchoose))].map((val1, ind) => {
                                            var _a;
                                            if (ind < num) {
                                                countBg += 1;
                                                let o = countBg;
                                                let fixInd = null;
                                                console.log('ddd');
                                                for (let i in allAnswersItem) {
                                                    console.log(allAnswersItem[i].questNum, countBg, 'questNum, countBg');
                                                    if (allAnswersItem[i].questNum == countBg) {
                                                        fixInd = allAnswersItem[i].answer;
                                                    }
                                                }
                                                return (<>
                                                                                                            {(ind % 20 === 0) || ind === 0
                                                        ?
                                                            <>
                                                                                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_1}>
                                                                                                                            Պատասխանի համարը
                                                                                                                        </div>
                                                                                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_2}>
                                                                                                                            <span>a</span>
                                                                                                                            <span>b</span>
                                                                                                                            <span>c</span>
                                                                                                                            <span>d</span>
                                                                                                                        </div>
                                                                                                                    </>
                                                        : null}
                                                                                                            <div key={ind} className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1}>
                                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_1}>
                                                                                                                    {countBg}
                                                                                                                </div>
                                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2}>
                                                                                                                    <form action="">

                                                                                                                        {(_a = arrAllInfossHkArr[0].questions[0].questionType[ind].answersInputs) === null || _a === void 0 ? void 0 : _a.map((val4, ind4) => {
                                                        console.log(ind4, fixInd, 'ind4,fixInd');
                                                        console.log(arrAllInfossHkArr, '2233');
                                                        console.log(arrAllInfossHkArr[0].questions[0].questionType);
                                                        console.log(arrAllInfossHkArr[0].questions[0].questionType[ind4], 'arrAllInfossHkArr[ind4]');
                                                        if (fixInd == ind4 + 1) {
                                                            return (<div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                            <input checked onClick={(e) => getWritenTestAnswers(ind4 + 1, e)} type="radio" name={`${countBg}`}/>
                                                                                                                                        </div>);
                                                        }
                                                        else {
                                                            return (<div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                            <input onClick={(e) => getWritenTestAnswers(ind4 + 1, e)} type="radio" name={`${countBg}`}/>
                                                                                                                                        </div>);
                                                        }
                                                    })}
                                                                                                                        {/* <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                        <input type="radio" name='1' />
                                                    </div>
                                                    <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                        <input type="radio" name='1' />
                                                    </div>
                                                    <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                        <input type="radio" name='1' />
                                                    </div>
                                                    <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                        <input type="radio" name='1' />
                                                    </div> */}
                                                                                                                    </form>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            {((ind + 1) % 20 === 0 && ind !== 0) || ind === Number(allTestInfo.thchoose) - 1
                                                        ?
                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_2}>
                                                                                                                        <span>a</span>
                                                                                                                        <span>b</span>
                                                                                                                        <span>c</span>
                                                                                                                        <span>d</span>
                                                                                                                    </div> : null}
                                                                                                        </>);
                                            }
                                        })}
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            {Number(allTestInfo.thchoose) - num > 0
                                            ?
                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_b}>
                                                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                            Ընտրովի պատասխանով առաջադրանքներ
                                                                                        </div>

                                                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2}>
                                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3}>
                                                                                                {[...new Array(Number(Number(allTestInfo.thchoose) - num))].map((val1, ind) => {
                                                        var _a;
                                                        if (ind < num) {
                                                            countBg += 1;
                                                            let fixInd = null;
                                                            console.log('ddd');
                                                            for (let i in allAnswersItem) {
                                                                console.log(allAnswersItem[i].questNum, countBg, 'questNum, countBg');
                                                                if (allAnswersItem[i].questNum == countBg) {
                                                                    fixInd = allAnswersItem[i].answer;
                                                                }
                                                            }
                                                            console.log(fixInd);
                                                            return (<>
                                                                                                                    {(ind % 20 === 0) || ind === 0
                                                                    ?
                                                                        <>
                                                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_1}>
                                                                                                                                    Պատասխանի համարը
                                                                                                                                </div>
                                                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_2}>
                                                                                                                                    <span>a</span>
                                                                                                                                    <span>b</span>
                                                                                                                                    <span>c</span>
                                                                                                                                    <span>d</span>
                                                                                                                                </div>
                                                                                                                            </>
                                                                    : null}
                                                                                                                    <div key={ind} className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1}>
                                                                                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_1}>
                                                                                                                            {countBg}
                                                                                                                        </div>
                                                                                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2}>
                                                                                                                            <form action="">
                                                                                                                                {(_a = arrAllInfossHkArr[0].questions[0].questionType[countBg - 1].answersInputs) === null || _a === void 0 ? void 0 : _a.map((val4, ind4) => {
                                                                    // getWritenTestAnswers(null, countBg)
                                                                    console.log(ind4, fixInd, 'ind4,fixInd');
                                                                    if (fixInd == ind4 + 1) {
                                                                        return (<div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                                    <input checked onClick={(e) => getWritenTestAnswers(ind4 + 1, e)} type="radio" name={`${countBg}`}/>
                                                                                                                                                </div>);
                                                                    }
                                                                    else {
                                                                        return (<div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                                    <input onClick={(e) => getWritenTestAnswers(ind4 + 1, e)} type="radio" name={`${countBg}`}/>
                                                                                                                                                </div>);
                                                                    }
                                                                })}
                                                                                                                                {/* <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                    <input type="radio" name='1' />
                                                                </div>
                                                                <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                    <input type="radio" name='1' />
                                                                </div>
                                                                <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                    <input type="radio" name='1' />
                                                                </div>
                                                                <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                    <input type="radio" name='1' />
                                                                </div> */}
                                                                                                                            </form>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    {((ind + 1) % 20 === 0 && ind !== 0) || ind === Number(allTestInfo.thchoose) - num - 1
                                                                    ?
                                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_2}>
                                                                                                                                <span>a</span>
                                                                                                                                <span>b</span>
                                                                                                                                <span>c</span>
                                                                                                                                <span>d</span>
                                                                                                                            </div> : null}
                                                                                                                </>);
                                                        }
                                                    })}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                            :
                                                null}
                                                                        </>
                                :
                                    null}
                                                            </>);
                    }
                    else if (val.uniqName === 'shortandvariant') {
                        // let secNum = Math.floor(val.questionType.length / 4)
                        thirdNum = Math.ceil(Number(allTestInfo.thshortanvariant) / 8);
                        currentNum = Number(allTestInfo.thshortanvariant);
                        currentNumClone = Number(allTestInfo.thshortanvariant);
                        // debugger
                        // let lstNum = val.questionType.length - (Math.floor(val.questionType.length / 3) * 3)
                        console.log(thirdNum, lstNum, secBNum - secNum, 'secBNum');
                        // debugger
                        return (<>
                                                                {/* {
                        ind === 0
                            ?
                            <div>
                                Category {val1.category}
                            </div>
                            :
                            null
                    } */}


                                                                {[...new Array(thirdNum)].map((val2, ind2) => {
                                return (<div className={writeTestStl_module_css_1.default.test_content_third_content_3_content_d}>
                                                                                {ind2 === 0
                                        ?
                                            <span className={writeTestStl_module_css_1.default.ctgry_name_c}>
                                                                                            Category {val1.category}
                                                                                        </span>
                                        :
                                            null}


                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_title_233}>
                                                                                    Պնդումներով առաջադրանքներ
                                                                                </div>
                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw_b}>
                                                                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item}>


                                                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title}>
                                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title_1}>
                                                                                                Ճիշտ է
                                                                                            </div>

                                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title_1}>
                                                                                                Սխալ է
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className={writeTestStl_module_css_1.default.sec_shortanssq_content_b}>
                                                                                            {[...new Array(currentNum < 4 ? currentNum : 4)].map((val2, ind2) => {
                                        countBg += 1;
                                        currentNum -= 1;
                                        currentNumClone -= 1;
                                        let fixInd = null;
                                        console.log('ddd');
                                        for (let i in allAnswersItem) {
                                            console.log(allAnswersItem[i].questNum, countBg, 'questNum, countBg');
                                            if (allAnswersItem[i].questNum == countBg) {
                                                fixInd = allAnswersItem[i].answerYesOrNot;
                                            }
                                        }
                                        console.log(fixInd, 'variant');
                                        return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1cc_1}>
                                                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1cc_1_1}>
                                                                                                                {countBg}
                                                                                                            </div>
                                                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1cc_1_2}>
                                                                                                                {(fixInd === 'yes') ? <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                        <input checked onClick={(e) => getWritenTestSecAnswers('yes', e)} name={`${countBg}`} type="radio"/>
                                                                                                                        <input onClick={(e) => getWritenTestSecAnswers('no', e)} name={`${countBg}`} type="radio"/>
                                                                                                                    </div>
                                                : fixInd === 'no'
                                                    ?
                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                <input onClick={(e) => getWritenTestSecAnswers('yes', e)} name={`${countBg}`} type="radio"/>
                                                                                                                                <input checked onClick={(e) => getWritenTestSecAnswers('no', e)} name={`${countBg}`} type="radio"/>
                                                                                                                            </div>
                                                    :
                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                <input onClick={(e) => getWritenTestSecAnswers('yes', e)} name={`${countBg}`} type="radio"/>
                                                                                                                                <input onClick={(e) => getWritenTestSecAnswers('no', e)} name={`${countBg}`} type="radio"/>
                                                                                                                            </div>}
                                                                                                                {/* {
                                                [...new Array(2)].map((val5, ind5) => {
                                                    // let ysrntItem = ind2 === 0 ? 'yes' : 'no'
                                                    return (
                                                        <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                            <input onClick={(e) => getWritenTestSecAnswers(ind2 === 0 ? 'yes' : 'no', e)} name={`${countBg}`} type="radio" />
                                                        </div>
                                                    )
                                                })
                                            } */}

                                                                                                                {/* <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                <input type="radio" name='1' />
                                            </div>
                                            <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                <input type="radio" name='1' />
                                            </div> */}

                                                                                                            </div>
                                                                                                        </div>);
                                    })}
                                                                                        </div>
                                                                                    </div>

                                                                                    {currentNumClone > 0
                                        ?
                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item}>
                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title}>
                                                                                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title_1}>
                                                                                                        Ճիշտ է
                                                                                                    </div>

                                                                                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title_1}>
                                                                                                        Սխալ է
                                                                                                    </div>
                                                                                                </div>
                                                                                                {/* :
                                            null
                                    } */}
                                                                                                <div className={writeTestStl_module_css_1.default.sec_shortanssq_content_b}>
                                                                                                    {[...new Array(currentNum < 4 ? currentNum : 4)].map((val2, ind2) => {
                                                    countBg += 1;
                                                    currentNum -= 1;
                                                    currentNumClone -= 1;
                                                    let fixInd = null;
                                                    console.log('ddd');
                                                    for (let i in allAnswersItem) {
                                                        console.log(allAnswersItem[i].questNum, countBg, 'questNum, countBg');
                                                        if (allAnswersItem[i].questNum == countBg) {
                                                            fixInd = allAnswersItem[i].answerYesOrNot;
                                                        }
                                                    }
                                                    console.log(fixInd, 'variant');
                                                    return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1cc_1}>
                                                                                                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1cc_1_1}>
                                                                                                                        {countBg}
                                                                                                                    </div>
                                                                                                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1cc_1_2}>
                                                                                                                        {
                                                        // ['Ճիշտ է', ' Սխալ է'].map((val5, ind5) => {
                                                        // let ysrntItem = ind2 === 0 ? 'yes' : 'no'
                                                        (fixInd === 'yes') ? <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                <input checked onClick={(e) => getWritenTestSecAnswers('yes', e)} name={`${countBg}`} type="radio"/>
                                                                                                                                <input onClick={(e) => getWritenTestSecAnswers('no', e)} name={`${countBg}`} type="radio"/>
                                                                                                                            </div>
                                                            : fixInd === 'no'
                                                                ?
                                                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                        <input onClick={(e) => getWritenTestSecAnswers('yes', e)} name={`${countBg}`} type="radio"/>
                                                                                                                                        <input checked onClick={(e) => getWritenTestSecAnswers('no', e)} name={`${countBg}`} type="radio"/>
                                                                                                                                    </div>
                                                                :
                                                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                        <input onClick={(e) => getWritenTestSecAnswers('yes', e)} name={`${countBg}`} type="radio"/>
                                                                                                                                        <input onClick={(e) => getWritenTestSecAnswers('no', e)} name={`${countBg}`} type="radio"/>
                                                                                                                                    </div>
                                                        // })
                                                        }
                                                                                                                        {/* {
                                                            [...new Array(2)].map((val5, ind5) => {
                                                                // let ysrntItem = ind2 === 0 ? 'yes' : 'no'
                                                                return (
                                                                    <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                        <input onClick={(e) => getWritenTestSecAnswers(ind2 === 0 ? 'yes' : 'no', e)} name={`${countBg}`} type="radio" />
                                                                    </div>
                                                                )
                                                            })
                                                        } */}
                                                                                                                        {/* <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                            <input type="radio" name='1' />
                                                        </div>
                                                        <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                            <input type="radio" name='1' />
                                                        </div> */}
                                                                                                                    </div>
                                                                                                                </div>);
                                                })}
                                                                                                </div>
                                                                                            </div>
                                        :
                                            null}


                                                                                </div>
                                                                            </div>);
                            })}






















                                                            </>);
                    }
                    else if (val.uniqName === 'shortbtype') {
                        f = Number(val1.category === 'B' ? allTestInfo.thshortb : allTestInfo.thshortcctgry);
                        forthNum = Math.ceil(Number(val1.category === 'B' ? allTestInfo.thshortb : allTestInfo.thshortcctgry) / 5);
                        forthBNum = Number(val1.category === 'B' ? allTestInfo.thshortb : allTestInfo.thshortcctgry) - (Math.floor(Number(val1.category === 'B' ? allTestInfo.thshortb : allTestInfo.thshortcctgry) / 5) * 5);
                        // f = 10
                        // forthNum = Math.ceil(10 / 5)
                        // forthBNum = 10 - (Math.floor(10 / 5) * 5)
                        return (<>
                                                                {/* {
                                ind === 0 && isFirstCtShown
                                    ?
                                    <div>
                                        Category {val1.category}
                                    </div>
                                    :
                                    null
                            } */}

                                                                {[...new Array(forthNum === 1 ? 1 : forthNum)].map((val, ind) => {
                                if (forthNum === 1) {
                                    return (<>
                                                                                    <div className={writeTestStl_module_css_1.default.ctgry_name_vfwe}>
                                                                                        {val1.category === 'B'
                                            ?
                                                <span className={writeTestStl_module_css_1.default.ctgry_name_b}>
                                                                                                    Category {val1.category}
                                                                                                </span>
                                            :
                                                null}
                                                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                            Կարճ պատասխանով առաջադրանքներ
                                                                                        </div>
                                                                                        <div>
                                                                                            {[...new Array(f)].map((val1) => {
                                            countBg += 1;
                                            let fixInd = null;
                                            console.log('ddd');
                                            for (let i in allAnswersItem) {
                                                console.log(allAnswersItem[i].questNum, countBg, 'questNum, countBg');
                                                if (allAnswersItem[i].questNum == countBg) {
                                                    fixInd = allAnswersItem[i].answerBtype;
                                                }
                                            }
                                            console.log(fixInd, 'variant');
                                            return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_dw}>
                                                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_1_dw}>
                                                                                                                {countBg}
                                                                                                            </div>
                                                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_2_bbsw}>
                                                                                                                <input value={fixInd} onChange={(e) => getWritenTestThirdAnswers(e.target.value, e)} name={`${countBg}`} type="text"/>

                                                                                                            </div>
                                                                                                        </div>);
                                        })}
                                                                                        </div>
                                                                                    </div>
                                                                                </>);
                                }
                                else if (ind + 1 === forthNum && forthNum - Math.floor(10 / 5) !== 0) {
                                    return (<div className={writeTestStl_module_css_1.default.ctgry_name_vfwe}>

                                                                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                        Կարճ պատասխանով առաջադրանքներ
                                                                                    </div>
                                                                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_3_title_dwq}>
                                                                                        {[...new Array(forthBNum)].map((val1) => {
                                            countBg += 1;
                                            let fixInd = null;
                                            console.log('ddd');
                                            for (let i in allAnswersItem) {
                                                console.log(allAnswersItem[i].questNum, countBg, 'questNum, countBg');
                                                if (allAnswersItem[i].questNum == countBg) {
                                                    fixInd = allAnswersItem[i].answerBtype;
                                                }
                                            }
                                            console.log(fixInd, 'variant');
                                            return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_dw}>
                                                                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_1_dw}>
                                                                                                            {countBg}
                                                                                                        </div>
                                                                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_2_bbsw}>
                                                                                                            <input value={fixInd} onChange={(e) => getWritenTestThirdAnswers(e.target.value, e)} type="text" name={`${countBg}`}/>

                                                                                                        </div>
                                                                                                    </div>);
                                        })}
                                                                                    </div>
                                                                                </div>);
                                }
                                else {
                                    return (<>
                                                                                    <div className={writeTestStl_module_css_1.default.ctgry_name_vfwe}>
                                                                                        {ind === 0 && val1.category === 'B'
                                            ?
                                                <span className={writeTestStl_module_css_1.default.ctgry_name_b}>
                                                                                                    Category {val1.category}
                                                                                                </span>
                                            :
                                                null}
                                                                                        <div className={writeTestStl_module_css_1.default.test_content_third_content_3_tdwe}>
                                                                                            {ind === 0
                                            ?
                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_title_we2}>
                                                                                                        <span> Կարճ պատասխանով</span> <span>առաջադրանքներ</span>
                                                                                                    </div>
                                            :
                                                null}
                                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_ovrle}>
                                                                                                {[...new Array(5)].map((val1) => {
                                            countBg += 1;
                                            let fixInd = null;
                                            console.log('ddd');
                                            for (let i in allAnswersItem) {
                                                console.log(allAnswersItem[i].questNum, countBg, 'questNum, countBg');
                                                if (allAnswersItem[i].questNum == countBg) {
                                                    fixInd = allAnswersItem[i].answerBtype;
                                                }
                                            }
                                            console.log(fixInd, 'variant');
                                            return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_dw}>
                                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_1_dw}>
                                                                                                                    {countBg}
                                                                                                                </div>
                                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_2_bbsw}>
                                                                                                                    <input value={fixInd} onChange={(e) => getWritenTestThirdAnswers(e.target.value, e)} type="text" name={`${countBg}`}/>

                                                                                                                </div>
                                                                                                            </div>);
                                        })}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </>);
                                }
                            })}






                                                            </>);
                    }
                    else if (val.uniqName === 'short') {
                        // secNum = Math.floor(13 / 3)
                        // secBNum = Math.ceil(13 / 3)
                        // lstNum = 13 - (Math.floor(13 / 3) * 3)
                        secNum = Math.floor(Number(allTestInfo.thshort) / 5);
                        secBNum = Math.ceil(Number(allTestInfo.thshort) / 5);
                        lstNum = Number(allTestInfo.thshort) - (Math.floor(Number(allTestInfo.thshort) / 5) * 5);
                        // secNum = Math.floor(5 / 3)
                        // secBNum = Math.ceil(5 / 3)
                        // lstNum = 5 - (Math.floor(5 / 3) * 3)
                        // debugger
                        return (
                        // val.questionType.length > 0
                        //     ?
                        <>
                                                                {ind === 0 && isFirstCtShown
                                ?
                                    <div className={writeTestStl_module_css_1.default.ctgry_name_b}>
                                                                            Category {val1.category}
                                                                        </div>
                                :
                                    null}
                                                                {Number(allTestInfo.thshortb) - num < 4 && Number(allTestInfo.thshortb) - num !== 0 && secNum
                                ?
                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_3_content_d}>
                                                                            {/* {
                                            ind === 0 && isFirstCtShown
                                                ?
                                                <span className={styles.ctgry_name}>
                                                    Category {val1.category}
                                                </span>
                                                :
                                                null
                                        } */}
                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                Կարճ պատասխանով առաջադրանքներ
                                                                            </div>
                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw}>
                                                                                {[...new Array(secNum)].map((val1, ind1) => {
                                            minNum = 3;
                                            return (<div className={writeTestStl_module_css_1.default.sec_shortanssq_content}>
                                                                                                {[...new Array(5)].map((val2, ind2) => {
                                                    countBg += 1;
                                                    let shortAnswrMinStrItem = '';
                                                    let fixInd = '';
                                                    console.log('ddd');
                                                    for (let i in allAnswersItem) {
                                                        console.log(allAnswersItem[i].questNum, countBg, 'questNum, countBg');
                                                        if (allAnswersItem[i].questNum == countBg) {
                                                            fixInd = allAnswersItem[i].shortAnswers;
                                                        }
                                                    }
                                                    console.log(fixInd, 'variant');
                                                    return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1}>
                                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_1}>
                                                                                                                    {countBg}
                                                                                                                </div>
                                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_2}>
                                                                                                                    {[...new Array(5)].map((val6, ind6) => {
                                                            return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_2_1}>
                                                                                                                                    <input onChange={(e) => {
                                                                    shortAnswrMinStrItem += e.target.value;
                                                                    getWritenTestForthAnswers(shortAnswrMinStrItem, e);
                                                                }} type="text" name={`${countBg}`} maxLength={1} className={writeTestStl_module_css_1.default.txtinp}/>
                                                                                                                                </div>);
                                                        })}
                                                                                                                    {/* <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />

                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => {
                                                                shortAnswrMinStrItem += e.target.value
                                                                getWritenTestForthAnswers(shortAnswrMinStrItem, e)
                                                            }} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                        </div> */}
                                                                                                                </div>
                                                                                                            </div>);
                                                })}
                                                                                            </div>);
                                        })}
                                                                            </div>
                                                                        </div>
                                :
                                    Number(allTestInfo.thshortb) - num > 4 && Number(allTestInfo.thshortb) - num < 8 && num !== 0
                                        ?
                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_content_d}>
                                                                                {/* {
                                                    ind === 0 && isFirstCtShown
                                                        ?
                                                        <span className={styles.ctgry_name}>
                                                            Category {val1.category}
                                                        </span>
                                                        :
                                                        null
                                                } */}
                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                    Կարճ պատասխանով առաջադրանքներ
                                                                                </div>
                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw}>
                                                                                    {[...new Array(secNum)].map((val1, ind1) => {
                                                    minNum = 2;
                                                    return (<div className={writeTestStl_module_css_1.default.sec_shortanssq_content}>
                                                                                                    {[...new Array(5)].map((val2, ind2) => {
                                                            countBg += 1;
                                                            let shortAnswrMinStrItem = '';
                                                            let fixInd = '';
                                                            console.log('ddd');
                                                            for (let i in allAnswersItem) {
                                                                console.log(allAnswersItem[i].questNum, countBg, 'questNum, countBg');
                                                                if (allAnswersItem[i].questNum == countBg) {
                                                                    fixInd = allAnswersItem[i].shortAnswers;
                                                                }
                                                            }
                                                            console.log(fixInd, 'roioioiio');
                                                            return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1}>
                                                                                                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_1}>
                                                                                                                        {countBg}
                                                                                                                    </div>
                                                                                                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_2}>
                                                                                                                        {[...new Array(5)].map((val6, ind6) => {
                                                                    return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_2_1}>
                                                                                                                                        <input onChange={(e) => {
                                                                            shortAnswrMinStrItem += e.target.value;
                                                                            getWritenTestForthAnswers(shortAnswrMinStrItem, e);
                                                                        }} type="text" value={shortAnswrMinStrItem[ind6]} name={`${countBg}`} maxLength={1} className={writeTestStl_module_css_1.default.txtinp}/>
                                                                                                                                    </div>);
                                                                })}
                                                                                                                        {/* <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                    <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />

                                                                </div>
                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                    <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                                </div>
                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                    <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                                </div>
                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                    <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                                </div>
                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                    <input onChange={(e) => {
                                                                        shortAnswrMinStrItem += e.target.value
                                                                        getWritenTestForthAnswers(shortAnswrMinStrItem, e)
                                                                    }} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                                </div> */}
                                                                                                                    </div>
                                                                                                                </div>);
                                                        })}
                                                                                                </div>);
                                                })}
                                                                                </div>
                                                                            </div>
                                        : null}

                                                                {secNum - minNum > 0
                                ?
                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_3_content_d}>
                                                                            {/* {
                                            ind === 0 && isFirstCtShown
                                                ?
                                                <span className={styles.ctgry_name}>
                                                    Category {val1.category}
                                                </span>
                                                :
                                                null
                                        } */}
                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                Կարճ պատասխանով առաջադրանքներ
                                                                            </div>
                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw}>
                                                                                {[...new Array(secNum - minNum)].map((val1, ind1) => {
                                            return (<div className={writeTestStl_module_css_1.default.sec_shortanssq_content}>
                                                                                                {[...new Array(5)].map((val2, ind2) => {
                                                    countBg += 1;
                                                    let shortAnswrMinStrItem = '';
                                                    let fixInd = '';
                                                    console.log('ddd');
                                                    for (let i in allAnswersItem) {
                                                        console.log(allAnswersItem[i].questNum, countBg, 'questNum, countBg');
                                                        if (allAnswersItem[i].questNum == countBg) {
                                                            fixInd = allAnswersItem[i].shortAnswers;
                                                        }
                                                    }
                                                    console.log(fixInd, 'fixInd');
                                                    return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1}>
                                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_1}>
                                                                                                                    {countBg}
                                                                                                                </div>
                                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_2}>
                                                                                                                    {[...new Array(5)].map((val6, ind6) => {
                                                            return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_2_1}>
                                                                                                                                    <input onChange={(e) => {
                                                                    shortAnswrMinStrItem += e.target.value;
                                                                    getWritenTestForthAnswers(shortAnswrMinStrItem, e);
                                                                }} value={fixInd[ind6]} type="text" name={`${countBg}`} maxLength={1} className={writeTestStl_module_css_1.default.txtinp}/>
                                                                                                                                </div>);
                                                        })}
                                                                                                                    {/* <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />

                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => {
                                                                shortAnswrMinStrItem += e.target.value
                                                                getWritenTestForthAnswers(shortAnswrMinStrItem, e)
                                                            }} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                        </div> */}
                                                                                                                </div>
                                                                                                            </div>);
                                                })}
                                                                                            </div>);
                                        })}
                                                                            </div>
                                                                        </div>
                                :
                                    null}

                                                                {secBNum > 0 && lstNum !== 0
                                // secBNum - secNum
                                ?
                                    <div className={writeTestStl_module_css_1.default.test_content_third_content_3_content_d}>
                                                                            {/* {
                                            ind === 0 && isFirstCtShown
                                                ?
                                                <span className={styles.ctgry_name}>
                                                    Category {val1.category}
                                                </span>
                                                :
                                                null
                                        } */}
                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                Կարճ պատասխանով առաջադրանքներ
                                                                            </div>
                                                                            <div className={writeTestStl_module_css_1.default.test_content_third_content_3_sec_contenw}>
                                                                                {[...new Array(secBNum - secNum)].map((val1, ind1) => {
                                            return (<div className={writeTestStl_module_css_1.default.sec_shortanssq_content}>
                                                                                                {[...new Array(lstNum)].map((val2, ind2) => {
                                                    countBg += 1;
                                                    let shortAnswrMinStrItem = '';
                                                    let fixInd = '';
                                                    console.log('ddd');
                                                    for (let i in allAnswersItem) {
                                                        console.log(allAnswersItem[i].questNum, countBg, 'questNum, countBg');
                                                        if (allAnswersItem[i].questNum == countBg) {
                                                            fixInd = allAnswersItem[i].shortAnswers;
                                                        }
                                                    }
                                                    console.log(fixInd, 'fixInd');
                                                    return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1}>
                                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_1}>
                                                                                                                    {countBg}
                                                                                                                </div>
                                                                                                                <div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_2}>
                                                                                                                    {[...new Array(5)].map((val6, ind6) => {
                                                            return (<div className={writeTestStl_module_css_1.default.test_content_third_content_4_1_1_2_1}>
                                                                                                                                    <input onChange={(e) => {
                                                                    shortAnswrMinStrItem += e.target.value;
                                                                    getWritenTestForthAnswers(shortAnswrMinStrItem, e);
                                                                }} type="text" value={fixInd[ind6]} name={`${countBg}`} maxLength={1} className={writeTestStl_module_css_1.default.txtinp}/>
                                                                                                                                </div>);
                                                        })}
                                                                                                                    {/* <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />

                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => shortAnswrMinStrItem += e.target.value} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                            <input onChange={(e) => {
                                                                shortAnswrMinStrItem += e.target.value
                                                                getWritenTestForthAnswers(shortAnswrMinStrItem, e)
                                                            }} type="text" name={`${countBg}`} maxLength={1} className={styles.txtinp} />
                                                        </div> */}
                                                                                                                </div>
                                                                                                            </div>);
                                                })}
                                                                                            </div>);
                                        })}
                                                                            </div>
                                                                        </div>
                                :
                                    null}



                                                            </>
                        // :
                        // null
                        );
                    }
                    // else if (val.uniqName === 'short') {
                    //     infoSecSettings = Math.ceil(Number(val.countValue) / 3)
                    //     let isSecLoopEnd = false
                    //     let lastSecIndex = 0
                    //     return (
                    //         <>
                    //             <div className={styles.test_content_third_content_3_content_d}>
                    //                 {
                    //                     Number((Number(val.countValue) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1]) >= 7
                    //                         ?
                    //                         null
                    //                         :
                    //                         <div className={styles.test_content_third_content_3_title}>
                    //                             Կարճ պատասխանով առաջադրանքներ
                    //                         </div>
                    //                 }
                    //                 <div className={styles.test_content_third_content_3_content_f}>
                    //                     {
                    //                         Number((Number(val.countValue) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1]) < 5
                    //                             ?
                    //                             [...new Array(infoSecSettings)].map((val1, ind) => {
                    //                                 startIndex = 3
                    //                                 startIndexCount = 2
                    //                                 startSecIndexCount = 2
                    //                                 // debugger
                    //                                 if (ind > 1) {
                    //                                     return null
                    //                                 }
                    //                                 isSecLoopEnd = false
                    //                                 return (
                    //                                     <div className={styles.test_content_third_content_4}>
                    //                                         {/* <div className={styles.test_content_third_content_3_title}>
                    //                 Կարճ պատասխանով առաջադրանքներ
                    //             </div> */}
                    //                                         <div className={styles.test_content_third_content_4_1_b}>
                    //                                             <div className={styles.test_content_third_content_4_1_overlay}>
                    //                                                 {
                    //                                                     [...new Array(Number(val.countValue))].map((val1, ind1) => {
                    //                                                         // debugger
                    //                                                         if (!isSecLoopEnd && ind1 > lastSecIndex || ind === 0 && ind1 === 0) {
                    //                                                             if (ind1 % 3 === 0 && ind1 !== 0) {
                    //                                                                 isSecLoopEnd = true
                    //                                                                 lastSecIndex = ind1
                    //                                                                 return null
                    //                                                             } else {
                    //                                                                 countBg += 1
                    //                                                                 return (
                    //                                                                     <div key={ind} className={styles.test_content_third_content_4_1_1}>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_1}>
                    //                                                                             {countBg}
                    //                                                                         </div>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_2}>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                 <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                             </div>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                 <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                             </div>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                 <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                             </div>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                 <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                             </div>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                 <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                             </div>
                    //                                                                         </div>
                    //                                                                     </div>
                    //                                                                 )
                    //                                                             }
                    //                                                         } else if (ind1 === lastSecIndex) {
                    //                                                             countBg += 1
                    //                                                             return (
                    //                                                                 (
                    //                                                                     <div key={ind} className={styles.test_content_third_content_4_1_1}>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_1}>
                    //                                                                             {countBg}
                    //                                                                         </div>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_2}>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                 <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                             </div>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                 <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                             </div>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                 <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                             </div>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                 <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                             </div>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                 <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                             </div>
                    //                                                                         </div>
                    //                                                                     </div>
                    //                                                                 )
                    //                                                             )
                    //                                                         }
                    //                                                     })
                    //                                                 }
                    //                                             </div>
                    //                                         </div>
                    //                                     </div>
                    //                                 )
                    //                             })
                    //                             :
                    //                             Number((Number(val.countValue) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1]) > 5 && Number((Number(chAnsQuestCountItem.chooseAnswerQuest) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1]) < 7
                    //                                 ?
                    //                                 [...new Array(infoSecSettings)].map((val2, ind) => {
                    //                                     startIndex = 5
                    //                                     startIndexCount = 1
                    //                                     startSecIndexCount = 1
                    //                                     // debugger
                    //                                     if (ind > 0) {
                    //                                         return null
                    //                                     }
                    //                                     isSecLoopEnd = false
                    //                                     return (
                    //                                         <div className={styles.test_content_third_content_4}>
                    //                                             <div className={styles.test_content_third_content_3_title}>
                    //                                                 Կարճ պատասխանով առաջադրանքներ
                    //                                             </div>
                    //                                             <div className={styles.test_content_third_content_4_1_b}>
                    //                                                 <div className={styles.test_content_third_content_4_1_overlay}>
                    //                                                     {
                    //                                                         [...new Array(Number(val.countValue))].map((val1, ind1) => {
                    //                                                             // debugger
                    //                                                             if (!isSecLoopEnd && ind1 > lastSecIndex || ind === 0 && ind1 === 0) {
                    //                                                                 if (ind1 % 3 === 0 && ind1 !== 0) {
                    //                                                                     isSecLoopEnd = true
                    //                                                                     lastSecIndex = ind1
                    //                                                                     return null
                    //                                                                 } else {
                    //                                                                     countBg += 1
                    //                                                                     return (
                    //                                                                         <div key={ind} className={styles.test_content_third_content_4_1_1}>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_1}>
                    //                                                                                 {countBg}
                    //                                                                             </div>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_2}>
                    //                                                                                 <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                     <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                                 </div>
                    //                                                                                 <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                     <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                                 </div>
                    //                                                                                 <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                     <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                                 </div>
                    //                                                                                 <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                     <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                                 </div>
                    //                                                                                 <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                     <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                                 </div>
                    //                                                                             </div>
                    //                                                                         </div>
                    //                                                                     )
                    //                                                                 }
                    //                                                             } else if (ind1 === lastSecIndex) {
                    //                                                                 countBg += 1
                    //                                                                 return (
                    //                                                                     (
                    //                                                                         <div key={ind} className={styles.test_content_third_content_4_1_1}>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_1}>
                    //                                                                                 {countBg}
                    //                                                                             </div>
                    //                                                                             <div className={styles.test_content_third_content_4_1_1_2}>
                    //                                                                                 <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                     <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                                 </div>
                    //                                                                                 <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                     <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                                 </div>
                    //                                                                                 <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                     <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                                 </div>
                    //                                                                                 <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                     <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                                 </div>
                    //                                                                                 <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                                     <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                                 </div>
                    //                                                                             </div>
                    //                                                                         </div>
                    //                                                                     )
                    //                                                                 )
                    //                                                             }
                    //                                                         })
                    //                                                     }
                    //                                                 </div>
                    //                                             </div>
                    //                                         </div>
                    //                                     )
                    //                                 })
                    //                                 :
                    //                                 null
                    //                     }
                    //                 </div>
                    //             </div>
                    //             <div className={styles.test_content_third_content_3_content_d}>
                    //                 <div className={styles.test_content_third_content_3_title}>
                    //                     Կարճ պատասխանով առաջադրանքներ
                    //                 </div>
                    //                 <div className={styles.test_content_third_content_3_content_d_item}>
                    //                     {
                    //                         [...new Array(infoSecSettings)].map((val2, ind) => {
                    //                             // ddddddddd
                    //                             // debugger
                    //                             if (startIndexCount !== 0) {
                    //                                 startIndexCount--
                    //                                 return null
                    //                             }
                    //                             // if (ind >= (Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount) {
                    //                             //     return null
                    //                             // }
                    //                             lastSeccIndex = ind
                    //                             console.log((Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount, 'infoSecSettings - startSecIndexCount) / 4')
                    //                             ind = startIndex + ind
                    //                             // debugger
                    //                             isSecLoopEnd = false
                    //                             return (
                    //                                 <div className={styles.test_content_third_content_4}>
                    //                                     {/* <div className={styles.test_content_third_content_3_title}>
                    //             Կարճ պատասխանով առաջադրանքներ
                    //         </div>  */}
                    //                                     <div className={styles.test_content_third_content_4_1_b}>
                    //                                         <div className={styles.test_content_third_content_4_1_overlay}>
                    //                                             {
                    //                                                 [...new Array(Number(val.countValue))].map((val1, ind1) => {
                    //                                                     // debugger
                    //                                                     if (!isSecLoopEnd && ind1 > lastSecIndex || ind === 0 && ind1 === 0) {
                    //                                                         if (ind1 % 3 === 0 && ind1 !== 0) {
                    //                                                             isSecLoopEnd = true
                    //                                                             lastSecIndex = ind1
                    //                                                             return null
                    //                                                         } else {
                    //                                                             countBg += 1
                    //                                                             return (
                    //                                                                 <div key={ind} className={styles.test_content_third_content_4_1_1}>
                    //                                                                     <div className={styles.test_content_third_content_4_1_1_1}>
                    //                                                                         {countBg}
                    //                                                                     </div>
                    //                                                                     <div className={styles.test_content_third_content_4_1_1_2}>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                             <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                         </div>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                             <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                         </div>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                             <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                         </div>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                             <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                         </div>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                             <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                         </div>
                    //                                                                     </div>
                    //                                                                 </div>
                    //                                                             )
                    //                                                         }
                    //                                                     } else if (ind1 === lastSecIndex) {
                    //                                                         countBg += 1
                    //                                                         return (
                    //                                                             (
                    //                                                                 <div key={ind} className={styles.test_content_third_content_4_1_1}>
                    //                                                                     <div className={styles.test_content_third_content_4_1_1_1}>
                    //                                                                         {countBg}
                    //                                                                     </div>
                    //                                                                     <div className={styles.test_content_third_content_4_1_1_2}>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                             <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                         </div>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                             <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                         </div>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                             <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                         </div>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                             <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                         </div>
                    //                                                                         <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                             <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                         </div>
                    //                                                                     </div>
                    //                                                                 </div>
                    //                                                             )
                    //                                                         )
                    //                                                     }
                    //                                                 })
                    //                                             }
                    //                                         </div>
                    //                                     </div>
                    //                                 </div>
                    //                             )
                    //                         })
                    //                     }
                    //                 </div>
                    //             </div>
                    //         </>
                    //     )
                    // } else if (val.uniqName === 'shortandvariant') {
                    //     // debugger
                    //     infoThirdSettings = Math.ceil(Number(val.countValue) / 3)
                    //     let isThirdLoopEnd = false
                    //     let lastThirdIndex = 0
                    //     console.log(Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4, 'ssss')
                    //     return (
                    //         <>
                    //             {
                    //                 [...new Array(infoThirdSettings)].map((val2, ind) => {
                    //                     if (startSecIndex > 0) {
                    //                         startSecIndex--
                    //                         return null
                    //                     }
                    //                     // console.log(Math.floor((((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount), 'ee')
                    //                     // console.log(infoThirdSettings - startIndexSecCount, 'infoThirdSettings - startIndexSecCount')
                    //                     // debugger
                    //                     // if (ind >= Math.floor((((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount) - startIndexSecCount) {
                    //                     //     return null
                    //                     // }
                    //                     lastThirddIndex = ind
                    //                     // debugger
                    //                     isThirdLoopEnd = false
                    //                     return (
                    //                         <div className={styles.test_content_third_content_4_b}>
                    //                             <div className={styles.test_content_third_content_4_1_2}>
                    //                                 <div className={styles.test_content_third_content_4_1_2_1}>
                    //                                     <div className={styles.test_content_third_content_4_1_2_1_1}>
                    //                                         {/* <div className={styles.test_content_third_content_4_1_2_1_1_1}></div> */}
                    //                                         <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                    //                                             A
                    //                                         </div>
                    //                                         <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                    //                                             B
                    //                                         </div>
                    //                                         <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                    //                                             C
                    //                                         </div>
                    //                                         <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                    //                                             D
                    //                                         </div>
                    //                                     </div>
                    //                                     <div className={styles.test_content_third_content_4_1_2_1_2}>
                    //                                         {
                    //                                             [...new Array(Number(val.countValue))].map((va1l, ind1) => {
                    //                                                 if (!isThirdLoopEnd && ind1 > lastThirdIndex || ind === 0 && ind1 === 0) {
                    //                                                     if (ind1 % 3 === 0 && ind1 !== 0) {
                    //                                                         isThirdLoopEnd = true
                    //                                                         lastThirdIndex = ind1
                    //                                                         return null
                    //                                                     } else {
                    //                                                         countBg += 1
                    //                                                         return (
                    //                                                             <div key={ind1} className={styles.test_content_third_content_4_1_1}>
                    //                                                                 <div className={styles.test_content_third_content_4_1_1_1}>
                    //                                                                     {countBg}
                    //                                                                 </div>
                    //                                                                 <div className={styles.test_content_third_content_4_1_1_2}>
                    //                                                                     <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                         <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                     </div>
                    //                                                                     <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                         <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                     </div>
                    //                                                                     <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                         <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                     </div>
                    //                                                                     <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                         <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                     </div>
                    //                                                                 </div>
                    //                                                             </div>
                    //                                                         )
                    //                                                     }
                    //                                                 } else if (ind1 === lastThirdIndex) {
                    //                                                     countBg += 1
                    //                                                     return (
                    //                                                         (
                    //                                                             <div key={ind} className={styles.test_content_third_content_4_1_1}>
                    //                                                                 <div className={styles.test_content_third_content_4_1_1_1}>
                    //                                                                     {countBg}
                    //                                                                 </div>
                    //                                                                 <div className={styles.test_content_third_content_4_1_1_2}>
                    //                                                                     <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                         <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                     </div>
                    //                                                                     <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                         <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                     </div>
                    //                                                                     <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                         <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                     </div>
                    //                                                                     <div className={styles.test_content_third_content_4_1_1_2_1}>
                    //                                                                         <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                    //                                                                     </div>
                    //                                                                 </div>
                    //                                                             </div>
                    //                                                         )
                    //                                                     )
                    //                                                 }
                    //                                             })
                    //                                         }
                    //                                     </div>
                    //                                 </div>
                    //                             </div>
                    //                         </div>
                    //                     )
                    //                 })
                    //             }
                    //         </>
                    //     )
                    // }
                })}
                                        </>
            // }
            //     {/* </div>
            // </div> */}
            );
        })}


































                            {/* {
            arrInfo.map((val) => {

                if (val.selectedValue === 'choose') {

                    infoSttngs = Math.ceil(Number(val.countValue) / 19)
                    let isLoopEnd = val.isLoopEnd
                    let lastIndex = val.lastIndex
                    return (
                        [...new Array(infoSttngs)].map((val1, ind1) => {
                            // debugger
                            isLoopEnd = false
                            return (
                                <div key={ind1} className={styles.test_content_third_content_3}>
                                    {
                                        ind1 !== 0 && ind1 !== [...new Array(infoSttngs)].length - 1
                                            ?
                                            null
                                            :
                                            <div className={styles.test_content_third_content_3_title}>
                                                Ընտրովի պատասխանով առաջադրանքներ
                                            </div>
                                    }
                                    <div className={styles.test_content_third_content_3_2}>
                                        <div className={styles.test_content_third_content_3_2_1}>
                                            Պատասխանի համարը
                                        </div>
                                        <div className={styles.test_content_third_content_3_2_2}>
                                            <span>a</span>
                                            <span>b</span>
                                            <span>c</span>
                                            <span>d</span>
                                        </div>
                                        <div className={styles.test_content_third_content_3_2_3}>
                                            {
                                                [...new Array(Number(val.countValue))].map((val, ind) => {
                                                    // debugger
                                                    // console.log(initialFIndex, 'initialFIndexinitialFIndex')

                                                    if (!isLoopEnd && ind > lastIndex || ind === 0 && ind1 === 0) {
                                                        // initialFIndex += 1
                                                        if ((ind + 1) % 19 === 0) {
                                                            isLoopEnd = true
                                                            lastIndex = ind
                                                            return null
                                                        } else {
                                                            countBg += 1
                                                            return (
                                                                <div key={ind} className={styles.test_content_third_content_3_2_3_1}>
                                                                    <div className={styles.test_content_third_content_3_2_3_1_1}>
                                                                        {countBg}
                                                                    </div>
                                                                    <div className={styles.test_content_third_content_3_2_3_1_2}>
                                                                        <form action="">
                                                                            <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                                <input type="radio" name='1' />
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                                <input type="radio" name='1' />
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                                <input type="radio" name='1' />
                                                                            </div>
                                                                            <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                                                <input type="radio" name='1' />
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    }

                                                })
                                            }
                                        </div>
                                        <div className={styles.test_content_third_content_3_2_2}>
                                            <span>a</span>
                                            <span>b</span>
                                            <span>c</span>
                                            <span>d</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    )
                } else if (val.selectedValue === 'short') {

                    infoSecSettings = Math.ceil(Number(val.countValue) / 3)
                    let isSecLoopEnd = false
                    let lastSecIndex = 0

                    return (
                        <>
                            <div className={styles.test_content_third_content_3_content_d}>
                                {
                                    Number((Number(val.countValue) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1]) >= 7
                                        ?
                                        null
                                        :
                                        <div className={styles.test_content_third_content_3_title}>
                                            Կարճ պատասխանով առաջադրանքներ
                                        </div>
                                }
                                <div className={styles.test_content_third_content_3_content_f}>
                                    {
                                        Number((Number(val.countValue) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1]) < 5
                                            ?

                                            [...new Array(infoSecSettings)].map((val1, ind) => {
                                                startIndex = 3
                                                startIndexCount = 2
                                                startSecIndexCount = 2
                                                // debugger
                                                if (ind > 1) {
                                                    return null
                                                }
                                                isSecLoopEnd = false
                                                return (
                                                    <div className={styles.test_content_third_content_4}>
                                                        <div className={styles.test_content_third_content_4_1_b}>
                                                            <div className={styles.test_content_third_content_4_1_overlay}>
                                                                {
                                                                    [...new Array(Number(val.countValue))].map((val1, ind1) => {
                                                                        // debugger
                                                                        if (!isSecLoopEnd && ind1 > lastSecIndex || ind === 0 && ind1 === 0) {
                                                                            if (ind1 % 3 === 0 && ind1 !== 0) {
                                                                                isSecLoopEnd = true
                                                                                lastSecIndex = ind1
                                                                                return null
                                                                            } else {
                                                                                countBg += 1
                                                                                return (
                                                                                    <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                        <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                            {countBg}
                                                                                        </div>
                                                                                        <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />

                                                                                            </div>
                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                            </div>
                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                            </div>
                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                            </div>
                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        } else if (ind1 === lastSecIndex) {
                                                                            countBg += 1
                                                                            return (
                                                                                (
                                                                                    <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                        <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                            {countBg}
                                                                                        </div>
                                                                                        <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />

                                                                                            </div>
                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                            </div>
                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                            </div>
                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                            </div>
                                                                                            <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            )
                                                                        }
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                            :

                                            Number((Number(val.countValue) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1]) > 5 && Number((Number(chAnsQuestCountItem.chooseAnswerQuest) / 19).toFixed(1)[infoSttngs.toFixed(1).length - 1]) < 7
                                                ?
                                                [...new Array(infoSecSettings)].map((val2, ind) => {
                                                    startIndex = 5
                                                    startIndexCount = 1
                                                    startSecIndexCount = 1
                                                    // debugger
                                                    if (ind > 0) {
                                                        return null
                                                    }
                                                    isSecLoopEnd = false
                                                    return (
                                                        <div className={styles.test_content_third_content_4}>
                                                            <div className={styles.test_content_third_content_3_title}>
                                                                Կարճ պատասխանով առաջադրանքներ
                                                            </div>
                                                            <div className={styles.test_content_third_content_4_1_b}>
                                                                <div className={styles.test_content_third_content_4_1_overlay}>
                                                                    {
                                                                        [...new Array(Number(val.countValue))].map((val1, ind1) => {
                                                                            // debugger
                                                                            if (!isSecLoopEnd && ind1 > lastSecIndex || ind === 0 && ind1 === 0) {
                                                                                if (ind1 % 3 === 0 && ind1 !== 0) {
                                                                                    isSecLoopEnd = true
                                                                                    lastSecIndex = ind1
                                                                                    return null
                                                                                } else {
                                                                                    countBg += 1
                                                                                    return (
                                                                                        <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                            <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                                {countBg}
                                                                                            </div>
                                                                                            <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />

                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                }
                                                                            } else if (ind1 === lastSecIndex) {
                                                                                countBg += 1
                                                                                return (
                                                                                    (
                                                                                        <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                            <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                                {countBg}
                                                                                            </div>
                                                                                            <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />

                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                </div>
                                                                                                <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                )
                                                                            }
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                :
                                                null
                                    }
                                </div>
                            </div>

                            <div className={styles.test_content_third_content_3_content_d}>

                                <div className={styles.test_content_third_content_3_title}>
                                    Կարճ պատասխանով առաջադրանքներ
                                </div>
                                <div className={styles.test_content_third_content_3_content_d_item}>
                                    {
                                        [...new Array(infoSecSettings)].map((val2, ind) => {
                                            // ddddddddd
                                            // debugger
                                            if (startIndexCount !== 0) {
                                                startIndexCount--
                                                return null
                                            }

                                            // if (ind >= (Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount) {
                                            //     return null
                                            // }
                                            lastSeccIndex = ind

                                            console.log((Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount, 'infoSecSettings - startSecIndexCount) / 4')
                                            ind = startIndex + ind
                                            // debugger
                                            isSecLoopEnd = false
                                            return (
                                                <div className={styles.test_content_third_content_4}>
                                                    <div className={styles.test_content_third_content_4_1_b}>
                                                        <div className={styles.test_content_third_content_4_1_overlay}>
                                                            {
                                                                [...new Array(Number(val.countValue))].map((val1, ind1) => {
                                                                    // debugger
                                                                    if (!isSecLoopEnd && ind1 > lastSecIndex || ind === 0 && ind1 === 0) {
                                                                        if (ind1 % 3 === 0 && ind1 !== 0) {
                                                                            isSecLoopEnd = true
                                                                            lastSecIndex = ind1
                                                                            return null
                                                                        } else {
                                                                            countBg += 1
                                                                            return (
                                                                                <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                    <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                        {countBg}
                                                                                    </div>
                                                                                    <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />

                                                                                        </div>
                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                        </div>
                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                        </div>
                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                        </div>
                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        }
                                                                    } else if (ind1 === lastSecIndex) {
                                                                        countBg += 1
                                                                        return (
                                                                            (
                                                                                <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                    <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                        {countBg}
                                                                                    </div>
                                                                                    <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                        </div>
                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                        </div>
                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                        </div>
                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                        </div>
                                                                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    )

                } else if (val.selectedValue === 'shortandvariant') {

                    // debugger
                    infoThirdSettings = Math.ceil(Number(val.countValue) / 3)
                    let isThirdLoopEnd = false
                    let lastThirdIndex = 0

                    console.log(Math.floor((infoSecSettings - startSecIndexCount) / 4) * 4, 'ssss')

                    return (
                        <>


                            {
                                [...new Array(infoThirdSettings)].map((val2, ind) => {

                                    if (startSecIndex > 0) {
                                        startSecIndex--
                                        return null
                                    }
                                    // console.log(Math.floor((((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount), 'ee')
                                    // console.log(infoThirdSettings - startIndexSecCount, 'infoThirdSettings - startIndexSecCount')
                                    // debugger
                                    // if (ind >= Math.floor((((infoSecSettings - startSecIndexCount) / 4) * 4) + startSecIndexCount) - startIndexSecCount) {
                                    //     return null
                                    // }
                                    lastThirddIndex = ind

                                    // debugger
                                    isThirdLoopEnd = false
                                    return (
                                        <div className={styles.test_content_third_content_4_b}>

                                            <div className={styles.test_content_third_content_4_1_2}>
                                                <div className={styles.test_content_third_content_4_1_2_1}>
                                                    <div className={styles.test_content_third_content_4_1_2_1_1}>
                                                        <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                                                            A
                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                                                            B
                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                                                            C
                                                        </div>
                                                        <div className={styles.test_content_third_content_4_1_2_1_1_1_1}>
                                                            D
                                                        </div>
                                                    </div>
                                                    <div className={styles.test_content_third_content_4_1_2_1_2}>
                                                        {
                                                            [...new Array(Number(val.countValue))].map((va1l, ind1) => {

                                                                if (!isThirdLoopEnd && ind1 > lastThirdIndex || ind === 0 && ind1 === 0) {
                                                                    if (ind1 % 3 === 0 && ind1 !== 0) {
                                                                        isThirdLoopEnd = true
                                                                        lastThirdIndex = ind1
                                                                        return null
                                                                    } else {
                                                                        countBg += 1
                                                                        return (
                                                                            <div key={ind1} className={styles.test_content_third_content_4_1_1}>

                                                                                <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                    {countBg}
                                                                                </div>
                                                                                <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                    </div>
                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                    </div>
                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                    </div>
                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                } else if (ind1 === lastThirdIndex) {
                                                                    countBg += 1
                                                                    return (
                                                                        (
                                                                            <div key={ind} className={styles.test_content_third_content_4_1_1}>
                                                                                <div className={styles.test_content_third_content_4_1_1_1}>
                                                                                    {countBg}
                                                                                </div>
                                                                                <div className={styles.test_content_third_content_4_1_1_2}>
                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                    </div>
                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                    </div>
                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                    </div>
                                                                                    <div className={styles.test_content_third_content_4_1_1_2_1}>
                                                                                        <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    )
                                                                }
                                                            })
                                                        }

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    )
                                })
                            }


                        </>
                    )


                }
            })
        } */}



                            {/* second part */}







                            {/* third part */}














                            {/* sxal patasxanner */}

                            {/* <div className={styles.test_content_third_content_6}>
            <div className={styles.test_content_third_content_3_title}>
                Ամբողջ ձևաթղթում սխալ նշված պատասխանները փոխելու տեղը
            </div>
            <div className={styles.test_content_third_content_6_1}>


                <div className={styles.test_content_third_content_3_22}>
                    <div className={styles.test_content_third_content_3_2}>
                        <div className={styles.test_content_third_content_3_2_1}>
                            Ընտրովի պատասխան
                        </div>
                        <div className={styles.test_content_third_content_3_2_2_b}>
                            <span>a</span>
                            <span>b</span>
                            <span>c</span>
                            <span>d</span>
                        </div>
                        <div className={styles.test_content_third_content_6_1_1_2_1_1}>

                            <div className={styles.test_content_third_content_6_1_1_2_1_1_ov} >
                                <div className={styles.test_content_third_content_6_1_1_2_1_1_1}>
                                    <div className={styles.test_content_third_content_6_1_1_2_1}>
                                        <div className={styles.test_content_third_content_4_1_1_2_1_sec}>
                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                        </div>
                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.test_content_third_content_6_1_1_2_1_1_2}>
                                    <div className={styles.test_content_third_content_3_2_3}>
                                        <div className={styles.test_content_third_content_3_2_3_1_b}>

                                            <div className={styles.test_content_third_content_3_2_3_1_2}>
                                                <form action="">
                                                    <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                        <input type="radio" name='1' />
                                                    </div>
                                                    <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                        <input type="radio" name='1' />
                                                    </div>
                                                    <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                        <input type="radio" name='1' />
                                                    </div>
                                                    <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                        <input type="radio" name='1' />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.test_content_third_content_6_1_1_2_1_1_ov} >
                                <div className={styles.test_content_third_content_6_1_1_2_1_1_1}>
                                    <div className={styles.test_content_third_content_6_1_1_2_1}>
                                        <div className={styles.test_content_third_content_4_1_1_2_1_sec}>
                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                        </div>
                                        <div className={styles.test_content_third_content_4_1_1_2_1}>
                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.test_content_third_content_6_1_1_2_1_1_2}>
                                    <div className={styles.test_content_third_content_3_2_3}>
                                        <div className={styles.test_content_third_content_3_2_3_1_b}>

                                            <div className={styles.test_content_third_content_3_2_3_1_2}>
                                                <form action="">
                                                    <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                        <input type="radio" name='1' />
                                                    </div>
                                                    <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                        <input type="radio" name='1' />
                                                    </div>
                                                    <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                        <input type="radio" name='1' />
                                                    </div>
                                                    <div className={styles.test_content_third_content_3_2_3_1_2_1}>
                                                        <input type="radio" name='1' />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className={styles.test_content_third_content_3}>
                    <div className={styles.test_content_third_content_3_2}>
                        <div className={styles.test_content_third_content_3_2_1}>
                            Կարճ պատասխան
                        </div>

                        <div className={styles.test_content_third_content_3_2_2_ww}>

                            <div className={styles.test_content_third_content_4_1_1}>
                                <div className={styles.test_content_third_content_6_1_1_2_1_1_1}>
                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid}>
                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                        </div>
                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.test_content_third_content_4_1_1_2_rwqwe}>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className={styles.test_content_third_content_4_1_1}>
                                <div className={styles.test_content_third_content_6_1_1_2_1_1_1}>
                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid}>
                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                        </div>
                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.test_content_third_content_4_1_1_2_rwqwe}>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className={styles.test_content_third_content_4_1_1}>
                                <div className={styles.test_content_third_content_6_1_1_2_1_1_1}>
                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid}>
                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                        </div>
                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.test_content_third_content_4_1_1_2_rwqwe}>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className={styles.test_content_third_content_3_sec_contenw_in_item}>

                                <div className={styles.test_content_third_content_6_1_1_2_1_1_1}>
                                    <div className={styles.test_content_third_content_4_1_1_2_1_thrid}>
                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                        </div>
                                        <div className={styles.test_content_third_content_4_1_1_2_1_thrid_item}>
                                            <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.test_content_third_content_3_sec_contenw_in_item_weq}>
                                    <div className={styles.test_content_third_content_3_sec_contenw_in_item_in_title}>
                                        <div className={styles.test_content_third_content_3_sec_contenw_in_item_in_title_1}>
                                            Ճիշտ է
                                        </div>

                                        <div className={styles.test_content_third_content_3_sec_contenw_in_item_in_title_1}>
                                            Սխալ է
                                        </div>
                                    </div>
                                    <div className={styles.sec_shortanssq_content_b}>
                                        <div className={styles.test_content_third_content_4_1cc_1}>
                                            <div className={styles.test_content_third_content_4_1cc_1_2}>
                                                <div className={styles.test_content_third_content_4_1cc_1_2_1}>
                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />

                                                </div>
                                                <div className={styles.test_content_third_content_4_1cc_1_2_2}>
                                                    <input type="text" name='short1' maxLength={1} className={styles.txtinp} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </div> */}


                        </div>

                    </div>
                    {/* sixth part */}






                </div>


                {/* artagreq part */}
                <div className={writeTestStl_module_css_1.default.last_part_content}>
                    <div className={writeTestStl_module_css_1.default.last_part_content_1_item}>
                        <div className={writeTestStl_module_css_1.default.last_part_content_1_item_1}>
                            Արտագրե՜ք այս նախադասությունը՝
                        </div>
                        <div className={writeTestStl_module_css_1.default.last_part_content_1_item_2}>
                            Ծանոթ եմ քննության կարգին։
                        </div>
                    </div>
                    <div className={writeTestStl_module_css_1.default.last_part_content_2_item}>
                        <input type="text" name='lastText' onChange={userNameInfoValuesInputHandleChange}/>
                    </div>
                </div>
            </div>

            <div>
                <button onClick={endTestFunc}>Avartel</button>
            </div>

        </div>
    // </div >
    );
};
exports.default = WriteTestComp;
