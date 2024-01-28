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
const finalTestWithAnsStl_module_css_1 = __importDefault(require("./finalTestWithAnsStl.module.css"));
const react_redux_1 = require("react-redux");
const _2_png_1 = __importDefault(require("../images/2.png"));
const _1_png_1 = __importDefault(require("../images/1.png"));
const react_router_dom_1 = require("react-router-dom");
const FinalTestWithAnseComp = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const isAdminItem = (0, react_redux_1.useSelector)((state) => state.adminR.isAdmin);
    if (!isAdminItem) {
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
    // here start
    const arrAllInfoss = (0, react_redux_1.useSelector)((state) => state.testR.allTests);
    const [arrAllInfossHkArr, setArrAllInfossHkArr] = (0, react_1.useState)(arrAllInfoss);
    (0, react_1.useEffect)(() => {
        setArrAllInfossHkArr(arrAllInfoss);
        console.log(arrAllInfossHkArr, 'arrAllInfossHkArrarrAllInfossHkArrarrAllInfossHkArrarrAllInfossHkArr');
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
    return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_overlay}>
            <div className={finalTestWithAnsStl_module_css_1.default.test_content}>
                <div className={finalTestWithAnsStl_module_css_1.default.test_content_container}>
                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content}>
                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1}>
                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_1}>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_1_txt_content}>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_1_txt_content_1}>
                                        {examYear} քննություն
                                    </div>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_1_txt_content_1}>
                                        Առարկա՝ {subjectName}
                                    </div>
                                </div>
                            </div>
                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_2}>
                                <span>Պատասխանների ձևաթուղթ</span>
                            </div>
                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_3}>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_3_1}>
                                    <input type="text"/>
                                </div>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_3_2}>
                                    Ազգանուն
                                </div>
                            </div>
                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_4}>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_4_1}>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_3_1}>
                                        <input type="text"/>
                                    </div>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_3_2}>
                                        Անուն
                                    </div>
                                </div>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_4_1}>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_3_1}>
                                        <input type="text"/>
                                    </div>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_3_2}>
                                        Հայրանուն
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_2}>
                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_2_1}>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_2_1_1}>
                                    Գնահատական
                                </div>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_2_1_2}>
                                    /20
                                </div>
                            </div>
                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_2_2}>


                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_2_2_1}>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                        <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                    </div>

                                </div>

                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_2_2_1}>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                        <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                    </div>

                                </div>

                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_2_2_1}>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                        <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                    </div>

                                </div>

                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_2_2_1}>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                        <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                    </div>

                                </div>
                            </div>
                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_1_3_2}>
                                Խմբի համար
                            </div>
                        </div>
                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_3}>
                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_3_1}>
                                <img src={_2_png_1.default} alt=""/>
                            </div>
                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_first_content_3_2}>
                                {examYear - 1}-{examYear}թ․
                            </div>
                        </div>
                    </div>
                </div>
                <div className={finalTestWithAnsStl_module_css_1.default.test_content_second_content}>
                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_second_content_1}>
                        <img src={_1_png_1.default} alt=""/>
                    </div>
                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_second_content_2}>
                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_second_content_2_1}></div>
                    </div>
                </div>
                <div className={finalTestWithAnsStl_module_css_1.default.test_content_container}>
                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content}>
                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_1}>
                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_1_overlay}>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_1_1}>
                                    Եղե՜ք ուջադիր
                                </div>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_1_2}>
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
                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_2}>
                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_2_1}>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_2_1_1}>
                                    Թեստ N
                                </div>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_2_1_2}>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_2_1_2_1}>
                                        <span>1</span>
                                        <input type="radio" name='short1'/>
                                    </div>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_2_1_2_1}>
                                        <span>2</span>
                                        <input type="radio" name='short1'/>
                                    </div>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_2_1_2_1}>
                                        <span>3</span>
                                        <input type="radio" name='short1'/>
                                    </div>
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_2_1_2_1}>
                                        <span>4</span>
                                        <input type="radio" name='short1'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* third part */}


                        <div className={finalTestWithAnsStl_module_css_1.default.ss}>

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
                    let indNum = 0;
                    if (val.questionType.length > 0) {
                        isFirstCtShown = true;
                    }
                    console.log(secNum, 'secNum');
                    if (val.uniqName === 'choose') {
                        if (val.questionType.length > 20) {
                            num = Math.floor(val.questionType.length / 20) * 20;
                        }
                        else {
                            num = val.questionType.length;
                        }
                        return (<>
                                                                {val.questionType.length
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

                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3}>
                                                                                {isFirstCtShown
                                            ?
                                                <span className={finalTestWithAnsStl_module_css_1.default.ctgry_name}>
                                                                                            Category {val1.category}
                                                                                        </span>
                                            :
                                                null}
                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                    Ընտրովի պատասխանով առաջադրանքներ
                                                                                </div>

                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2}>
                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3}>
                                                                                        {val.questionType.map((val1, ind) => {
                                            if (ind < num) {
                                                countBg += 1;
                                                // indNum += 1
                                                indNum += 1;
                                                console.log(indNum, 'indNum');
                                                // console.log(val.questionType[indNum - 1], 'val.questionType')
                                                return (<>
                                                                                                            {(ind % 20 === 0) || ind === 0
                                                        ?
                                                            <>
                                                                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_1}>
                                                                                                                            Պատասխանի համարը
                                                                                                                        </div>
                                                                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_2}>
                                                                                                                            <span>a</span>
                                                                                                                            <span>b</span>
                                                                                                                            <span>c</span>
                                                                                                                            <span>d</span>
                                                                                                                        </div>
                                                                                                                    </>
                                                        : null}
                                                                                                            <div key={ind} className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1}>
                                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_1}>
                                                                                                                    {countBg}
                                                                                                                </div>
                                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2}>
                                                                                                                    <form action="">
                                                                                                                        {[...new Array(4)].map((val5, ind) => {
                                                        // console.log(val.questionType, 'val.questionType')
                                                        // console.log(val.questionType[indNum - 1].chckbxIndex, 'val.questionType[indNum - 1].chckbxIndex')
                                                        if (ind === val.questionType[indNum - 1].chckbxIndex) {
                                                            return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                            <input type="radio" name='1' checked/>
                                                                                                                                        </div>);
                                                        }
                                                        else {
                                                            return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                            <input type="radio" name='1'/>
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
                                                                                                            {((ind + 1) % 20 === 0 && ind !== 0) || ind === val.questionType.length - 1
                                                        ?
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_2}>
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

                                                                            {val.questionType.length - num > 0
                                            ?
                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_b}>
                                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                            Ընտրովի պատասխանով առաջադրանքներ
                                                                                        </div>

                                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2}>
                                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3}>
                                                                                                {[...new Array(Number(val.questionType.length - num))].map((val1, ind) => {
                                                        // val.questionType.map((val1, ind) => {
                                                        // console.log(val.questionType.length - (val.questionType.length - num), 'wweq')
                                                        if (ind < num) {
                                                            countBg += 1;
                                                            // if (val.questionType.length >)
                                                            indNum += 1;
                                                            console.log(indNum, 'indNum22');
                                                            return (<>
                                                                                                                    {(ind % 20 === 0) || ind === 0
                                                                    ?
                                                                        <>
                                                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_1}>
                                                                                                                                    Պատասխանի համարը
                                                                                                                                </div>
                                                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_2}>
                                                                                                                                    <span>a</span>
                                                                                                                                    <span>b</span>
                                                                                                                                    <span>c</span>
                                                                                                                                    <span>d</span>
                                                                                                                                </div>
                                                                                                                            </>
                                                                    : null}
                                                                                                                    <div key={ind} className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1}>
                                                                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_1}>
                                                                                                                            {countBg}
                                                                                                                        </div>
                                                                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2}>
                                                                                                                            <form action="">
                                                                                                                                {[...new Array(4)].map((val3, ind2) => {
                                                                    // console.log(val1.chckbxIndex, 'val1.chckbxIndex')
                                                                    // console.log(val.questionType, indNum, 'val.questionType')
                                                                    // if (ind < val.questionType.length) {
                                                                    if (ind2 === val.questionType[indNum - 1].chckbxIndex) {
                                                                        // if (ind2 === 0) {
                                                                        return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                                    <input type="radio" name='1' checked/>
                                                                                                                                                </div>);
                                                                    }
                                                                    else {
                                                                        return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                                    <input type="radio" name='1'/>
                                                                                                                                                </div>);
                                                                    }
                                                                    // }
                                                                })}
                                                                                                                            </form>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    {((ind + 1) % 20 === 0 && ind !== 0) || ind === val.questionType.length - num - 1
                                                                    ?
                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_2}>
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
                        thirdNum = Math.ceil(val.questionType.length / 8);
                        currentNum = val.questionType.length;
                        currentNumClone = val.questionType.length;
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
                                return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_content_d}>
                                                                                {ind2 === 0
                                        ?
                                            <span className={finalTestWithAnsStl_module_css_1.default.ctgry_name_c}>
                                                                                            Category {val1.category}
                                                                                        </span>
                                        :
                                            null}


                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_title_233}>
                                                                                    pntrument2
                                                                                </div>
                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_b}>
                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item}>


                                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title}>
                                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title_1}>
                                                                                                Ճիշտ է
                                                                                            </div>

                                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title_1}>
                                                                                                Սխալ է
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className={finalTestWithAnsStl_module_css_1.default.sec_shortanssq_content_b}>
                                                                                            {[...new Array(currentNum < 4 ? currentNum : 4)].map((val2, ind2) => {
                                        countBg += 1;
                                        currentNum -= 1;
                                        currentNumClone -= 1;
                                        indNum += 1;
                                        console.log(val.questionType[indNum - 1].thirdTypeQsAnswers);
                                        return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1cc_1}>
                                                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1cc_1_1}>
                                                                                                                {countBg}
                                                                                                            </div>
                                                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1cc_1_2}>

                                                                                                                {val.questionType[indNum - 1].thirdTypeQsAnswers === 'yes'
                                                ?
                                                    <>
                                                                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                <input type="radio" name={`${indNum}`} checked/>
                                                                                                                            </div>
                                                                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                <input type="radio" name={`${indNum}`}/>
                                                                                                                            </div>
                                                                                                                        </>
                                                :
                                                    <>

                                                                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                <input type="radio" name={`${indNum}`}/>
                                                                                                                            </div>
                                                                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                <input type="radio" name={`${indNum}`} checked/>
                                                                                                                            </div>
                                                                                                                        </>}
                                                                                                            </div>
                                                                                                        </div>);
                                    })}
                                                                                        </div>
                                                                                    </div>

                                                                                    {currentNumClone > 0
                                        ?
                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item}>
                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title}>
                                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title_1}>
                                                                                                        Ճիշտ է
                                                                                                    </div>

                                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title_1}>
                                                                                                        Սխալ է
                                                                                                    </div>
                                                                                                </div>
                                                                                                {/* :
                                            null
                                    } */}
                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.sec_shortanssq_content_b}>
                                                                                                    {[...new Array(currentNum < 4 ? currentNum : 4)].map((val2, ind2) => {
                                                    countBg += 1;
                                                    currentNum -= 1;
                                                    currentNumClone -= 1;
                                                    indNum += 1;
                                                    return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1cc_1}>
                                                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1cc_1_1}>
                                                                                                                        {countBg}
                                                                                                                    </div>
                                                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1cc_1_2}>

                                                                                                                        {val.questionType[indNum - 1].thirdTypeQsAnswers === 'yes'
                                                            ?
                                                                <>
                                                                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                        <input type="radio" name={`${indNum}`} checked/>
                                                                                                                                    </div>
                                                                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                        <input type="radio" name={`${indNum}`}/>
                                                                                                                                    </div>
                                                                                                                                </>
                                                            :
                                                                <>

                                                                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                        <input type="radio" name={`${indNum}`}/>
                                                                                                                                    </div>
                                                                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                                                                                        <input type="radio" name={`${indNum}`} checked/>
                                                                                                                                    </div>
                                                                                                                                </>}
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
                        f = val.questionType.length;
                        forthNum = Math.ceil(val.questionType.length / 5);
                        forthBNum = val.questionType.length - (Math.floor(val.questionType.length / 5) * 5);
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

                                                                {[...new Array(forthNum === 1 ? 1 : forthNum)].map((val5, ind) => {
                                if (forthNum === 1) {
                                    return (<>
                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.ctgry_name_vfwe}>
                                                                                        {val1.category === 'B'
                                            ?
                                                <span className={finalTestWithAnsStl_module_css_1.default.ctgry_name_b}>
                                                                                                    Category {val1.category}
                                                                                                </span>
                                            :
                                                null}
                                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                            Կարճ պատասխանով առաջադրանքներ
                                                                                        </div>
                                                                                        <div>
                                                                                            {[...new Array(f)].map((val1) => {
                                            countBg += 1;
                                            indNum += 1;
                                            return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_dw}>
                                                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_1_dw}>
                                                                                                                {countBg}
                                                                                                            </div>
                                                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_bbsw}>
                                                                                                                <input type="text" name='short1' value={val.questionType[indNum - 1].forthTypeBQsAnswers} maxLength={1}/>

                                                                                                            </div>
                                                                                                        </div>);
                                        })}
                                                                                        </div>
                                                                                    </div>
                                                                                </>);
                                }
                                else if (ind + 1 === forthNum && forthNum - Math.floor(10 / 5) !== 0) {
                                    return (<div className={finalTestWithAnsStl_module_css_1.default.ctgry_name_vfwe}>

                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                        Groviiii առաջադրանքներw333
                                                                                    </div>
                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_title_dwq}>
                                                                                        {[...new Array(forthBNum)].map((val1) => {
                                            countBg += 1;
                                            indNum += 1;
                                            return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_dw}>
                                                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_1_dw}>
                                                                                                            {countBg}
                                                                                                        </div>
                                                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_bbsw}>
                                                                                                            <input type="text" name='short1' value={val.questionType[indNum - 1].forthTypeBQsAnswers} maxLength={1}/>

                                                                                                        </div>
                                                                                                    </div>);
                                        })}
                                                                                    </div>
                                                                                </div>);
                                }
                                else {
                                    return (<>
                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.ctgry_name_vfwe}>
                                                                                        {ind === 0 && val1.category === 'B'
                                            ?
                                                <span className={finalTestWithAnsStl_module_css_1.default.ctgry_name_b}>
                                                                                                    Category {val1.category}
                                                                                                </span>
                                            :
                                                null}
                                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_tdwe}>
                                                                                            {ind === 0
                                            ?
                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_title_we2}>
                                                                                                        <span>Groviiii</span> <span>առաջադրանքներw222</span>
                                                                                                    </div>
                                            :
                                                null}
                                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_ovrle}>
                                                                                                {[...new Array(5)].map((val1) => {
                                            countBg += 1;
                                            indNum += 1;
                                            return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_dw}>
                                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_1_dw}>
                                                                                                                    {countBg}
                                                                                                                </div>
                                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_bbsw}>
                                                                                                                    <input type="text" name='short1' value={val.questionType[indNum - 1].forthTypeBQsAnswers} maxLength={1}/>

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
                        secNum = Math.floor(val.questionType.length / 5);
                        secBNum = Math.ceil(val.questionType.length / 5);
                        lstNum = val.questionType.length - (Math.floor(val.questionType.length / 5) * 5);
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
                                    <div className={finalTestWithAnsStl_module_css_1.default.ctgry_name_b}>
                                                                            Category {val1.category}
                                                                        </div>
                                :
                                    null}
                                                                {val.questionType.length - num < 4 && val.questionType.length - num !== 0 && secNum
                                ?
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_content_d}>
                                                                            {/* {
                                            ind === 0 && isFirstCtShown
                                                ?
                                                <span className={styles.ctgry_name}>
                                                    Category {val1.category}
                                                </span>
                                                :
                                                null
                                        } */}
                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                Կարճ պատասխանով առաջադրանքներwssss
                                                                            </div>
                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw}>
                                                                                {[...new Array(secNum)].map((val1, ind1) => {
                                            minNum = 3;
                                            return (<div className={finalTestWithAnsStl_module_css_1.default.sec_shortanssq_content}>
                                                                                                {[...new Array(5)].map((val2, ind2) => {
                                                    var _a;
                                                    countBg += 1;
                                                    indNum += 1;
                                                    let itmArr = [];
                                                    if (val.questionType[indNum - 1].secTypeQsAnswers) {
                                                        for (let i in val.questionType[indNum - 1].secTypeQsAnswers) {
                                                            itmArr.push((_a = val.questionType[indNum - 1].secTypeQsAnswers) === null || _a === void 0 ? void 0 : _a[`${i}`]);
                                                        }
                                                    }
                                                    console.log(itmArr, 'itmArr');
                                                    return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1}>
                                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_1}>
                                                                                                                    {countBg}
                                                                                                                </div>
                                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2}>
                                                                                                                    {itmArr.map((val, ind) => {
                                                            return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1}>
                                                                                                                                    <input type="text" name='short1' value={val} maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>

                                                                                                                                </div>);
                                                        })}
                                                                                                                    {/* <div className={styles.test_content_third_content_4_1_1_2_1}>
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
                                                        </div> */}
                                                                                                                </div>
                                                                                                            </div>);
                                                })}
                                                                                            </div>);
                                        })}
                                                                            </div>
                                                                        </div>
                                :
                                    val.questionType.length - num > 4 && val.questionType.length - num < 8 && num !== 0
                                        ?
                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_content_d}>
                                                                                {/* {
                                                    ind === 0 && isFirstCtShown
                                                        ?
                                                        <span className={styles.ctgry_name}>
                                                            Category {val1.category}
                                                        </span>
                                                        :
                                                        null
                                                } */}
                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                    Կարճ պատասխանով առաջադրանքներ
                                                                                </div>
                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw}>
                                                                                    {[...new Array(secNum)].map((val1, ind1) => {
                                                    minNum = 2;
                                                    return (<div className={finalTestWithAnsStl_module_css_1.default.sec_shortanssq_content}>
                                                                                                    {[...new Array(5)].map((val2, ind2) => {
                                                            var _a;
                                                            countBg += 1;
                                                            indNum += 1;
                                                            let itmArr = [];
                                                            if (val.questionType[indNum - 1].secTypeQsAnswers) {
                                                                for (let i in val.questionType[indNum - 1].secTypeQsAnswers) {
                                                                    itmArr.push((_a = val.questionType[indNum - 1].secTypeQsAnswers) === null || _a === void 0 ? void 0 : _a[`${i}`]);
                                                                }
                                                            }
                                                            console.log(itmArr, 'itmArr');
                                                            return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1}>
                                                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_1}>
                                                                                                                        {countBg}
                                                                                                                    </div>
                                                                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2}>
                                                                                                                        {itmArr.map((val, ind) => {
                                                                    return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1}>
                                                                                                                                        <input type="text" name='short1' value={val} maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>

                                                                                                                                    </div>);
                                                                })}
                                                                                                                        {/* <div className={styles.test_content_third_content_4_1_1_2_1}>
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
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_content_d}>
                                                                            {/* {
                                            ind === 0 && isFirstCtShown
                                                ?
                                                <span className={styles.ctgry_name}>
                                                    Category {val1.category}
                                                </span>
                                                :
                                                null
                                        } */}
                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                Կարճ պատասխանով առաջադրանքներccc
                                                                            </div>
                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw}>
                                                                                {[...new Array(secNum - minNum)].map((val1, ind1) => {
                                            return (<div className={finalTestWithAnsStl_module_css_1.default.sec_shortanssq_content}>
                                                                                                {[...new Array(5)].map((val2, ind2) => {
                                                    var _a;
                                                    countBg += 1;
                                                    indNum += 1;
                                                    let itmArr = [];
                                                    if (val.questionType[indNum - 1].secTypeQsAnswers) {
                                                        for (let i in val.questionType[indNum - 1].secTypeQsAnswers) {
                                                            itmArr.push((_a = val.questionType[indNum - 1].secTypeQsAnswers) === null || _a === void 0 ? void 0 : _a[`${i}`]);
                                                        }
                                                    }
                                                    console.log(itmArr, 'itmArr');
                                                    return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1}>
                                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_1}>
                                                                                                                    {countBg}
                                                                                                                </div>
                                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2}>
                                                                                                                    {itmArr.map((val, ind) => {
                                                            return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1}>
                                                                                                                                    <input type="text" name='short1' value={val} maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>

                                                                                                                                </div>);
                                                        })}
                                                                                                                    {/* <div className={styles.test_content_third_content_4_1_1_2_1}>
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
                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_content_d}>
                                                                            {/* {
                                            ind === 0 && isFirstCtShown
                                                ?
                                                <span className={styles.ctgry_name}>
                                                    Category {val1.category}
                                                </span>
                                                :
                                                null
                                        } */}
                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_title}>
                                                                                Կարճ պատասխանով առաջադրանքներ111
                                                                            </div>
                                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw}>
                                                                                {[...new Array(secBNum - secNum)].map((val1, ind1) => {
                                            return (<div className={finalTestWithAnsStl_module_css_1.default.sec_shortanssq_content}>
                                                                                                {[...new Array(lstNum)].map((val2, ind2) => {
                                                    var _a;
                                                    countBg += 1;
                                                    indNum += 1;
                                                    let itmArr = [];
                                                    if (val.questionType[indNum - 1].secTypeQsAnswers) {
                                                        for (let i in val.questionType[indNum - 1].secTypeQsAnswers) {
                                                            itmArr.push((_a = val.questionType[indNum - 1].secTypeQsAnswers) === null || _a === void 0 ? void 0 : _a[`${i}`]);
                                                        }
                                                    }
                                                    console.log(itmArr, 'itmArr');
                                                    return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1}>
                                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_1}>
                                                                                                                    {countBg}
                                                                                                                </div>
                                                                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2}>
                                                                                                                    {itmArr.map((val, ind) => {
                                                            return (<div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1}>
                                                                                                                                    <input type="text" name='short1' value={val} maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>

                                                                                                                                </div>);
                                                        })}
                                                                                                                    {/* <div className={styles.test_content_third_content_4_1_1_2_1}>
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

                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6}>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_title}>
                                    Ամբողջ ձևաթղթում սխալ նշված պատասխանները փոխելու տեղը
                                </div>
                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1}>


                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_22}>
                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2}>
                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_1}>
                                                Ընտրովի պատասխան
                                            </div>
                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_2_b}>
                                                <span>a</span>
                                                <span>b</span>
                                                <span>c</span>
                                                <span>d</span>
                                            </div>
                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1_1}>

                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1_1_ov}>
                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1_1_1}>
                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1}>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_sec}>
                                                                <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                                            </div>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1}>
                                                                <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1_1_2}>
                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3}>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_b}>

                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2}>
                                                                    <form action="">
                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                            <input type="radio" name='1'/>
                                                                        </div>
                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                            <input type="radio" name='1'/>
                                                                        </div>
                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                            <input type="radio" name='1'/>
                                                                        </div>
                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                            <input type="radio" name='1'/>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1_1_ov}>
                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1_1_1}>
                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1}>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_sec}>
                                                                <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                                            </div>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1}>
                                                                <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1_1_2}>
                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3}>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_b}>

                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2}>
                                                                    <form action="">
                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                            <input type="radio" name='1'/>
                                                                        </div>
                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                            <input type="radio" name='1'/>
                                                                        </div>
                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                            <input type="radio" name='1'/>
                                                                        </div>
                                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_3_1_2_1}>
                                                                            <input type="radio" name='1'/>
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


                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3}>
                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2}>
                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_1}>
                                                Կարճ պատասխան
                                            </div>

                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_2_2_ww}>

                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1}>
                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1_1_1}>
                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid}>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                                            </div>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_rwqwe}>
                                                        <input type="text"/>
                                                    </div>
                                                </div>
                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1}>
                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1_1_1}>
                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid}>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                                            </div>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_rwqwe}>
                                                        <input type="text"/>
                                                    </div>
                                                </div>
                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1}>
                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1_1_1}>
                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid}>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                                            </div>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_rwqwe}>
                                                        <input type="text"/>
                                                    </div>
                                                </div>

                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item}>

                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_6_1_1_2_1_1_1}>
                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid}>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                                            </div>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1_1_2_1_thrid_item}>
                                                                <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_weq}>
                                                        <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title}>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title_1}>
                                                                Ճիշտ է
                                                            </div>

                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_3_sec_contenw_in_item_in_title_1}>
                                                                Սխալ է
                                                            </div>
                                                        </div>
                                                        <div className={finalTestWithAnsStl_module_css_1.default.sec_shortanssq_content_b}>
                                                            <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1cc_1}>
                                                                <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1cc_1_2}>
                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1cc_1_2_1}>
                                                                        <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>

                                                                    </div>
                                                                    <div className={finalTestWithAnsStl_module_css_1.default.test_content_third_content_4_1cc_1_2_2}>
                                                                        <input type="text" name='short1' maxLength={1} className={finalTestWithAnsStl_module_css_1.default.txtinp}/>
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
                            </div>


                        </div>

                    </div>
                    {/* sixth part */}






                </div>


                {/* artagreq part */}
                <div className={finalTestWithAnsStl_module_css_1.default.last_part_content}>
                    <div className={finalTestWithAnsStl_module_css_1.default.last_part_content_1_item}>
                        <div className={finalTestWithAnsStl_module_css_1.default.last_part_content_1_item_1}>
                            Արտագրե՜ք այս նախադասությունը՝
                        </div>
                        <div className={finalTestWithAnsStl_module_css_1.default.last_part_content_1_item_2}>
                            Ծանոթ եմ քննության կարգին։
                        </div>
                    </div>
                    <div className={finalTestWithAnsStl_module_css_1.default.last_part_content_2_item}>
                        <input type="text"/>
                    </div>
                </div>
            </div>



            <div className={finalTestWithAnsStl_module_css_1.default.printPart}>
                <button onClick={() => printFunc()}>print</button>
            </div>
        </div>);
};
exports.default = FinalTestWithAnseComp;
