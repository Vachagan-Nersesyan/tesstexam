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
const examsStl_module_css_1 = __importDefault(require("./examsStl.module.css"));
const react_redux_1 = require("react-redux");
const redux_store_1 = require("entities/store/redux-store");
const subjectReducerThunk_1 = require("entities/subjectR/subjectReducerThunk");
const subjectExam_1 = __importDefault(require("feautures/subjectExam"));
const react_router_dom_1 = require("react-router-dom");
const testReducer_1 = require("entities/testR/testReducer");
const subjectReducer_1 = require("entities/subjectR/subjectReducer");
const _1_png_1 = __importDefault(require("../images/1.png"));
const WorkspaceComp = () => {
    const aDispatch = (0, redux_store_1.useAppDispatch)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const [isShow, setIsShow] = (0, react_1.useState)(false);
    const [isSecShow, setIsSecShow] = (0, react_1.useState)(false);
    const [isFirstSubject, setIsFirstSubject] = (0, react_1.useState)(true);
    const [subjectName, setSubjectName] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        aDispatch((0, subjectReducerThunk_1.getExamsFunc)());
    }, []);
    const allExams = (0, react_redux_1.useSelector)((state) => state.subjectR.allExams);
    const [subjectArr, setSubjectArr] = (0, react_1.useState)(allExams);
    (0, react_1.useEffect)(() => {
        console.log(allExams);
        setSubjectArr(allExams);
    }, [allExams]);
    const addSubject = () => {
        let obj = {
            subjectName,
            exams: []
        };
        setIsFirstSubject(false);
        setIsShow(false);
        setIsSecShow(false);
        dispatch((0, subjectReducer_1.saveSubjectNameFunc)({ info: subjectName }));
        aDispatch((0, subjectReducerThunk_1.addSubjectFunc)({ info: obj }));
    };
    // deee
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [testName, setTestName] = (0, react_1.useState)('');
    const generateTestFunc = () => {
        dispatch((0, testReducer_1.changeTestName)({ info: testName }));
        // dispatch(saveSubjectNameFunc({ info: subjectName }))
        navigate('/test-items');
    };
    return (<div className={examsStl_module_css_1.default.exam_contant}>

            <div className={examsStl_module_css_1.default.exam_contant_container}>

                <div className={examsStl_module_css_1.default.exam_contant_container_title}>
                    <div className={examsStl_module_css_1.default.exam_contant_container_logo}>
                        <img src={_1_png_1.default}/>
                    </div>
                    <div className={examsStl_module_css_1.default.exam_contant_container_title_text}>
                        Երևանի ինֆորմատիկայի պետական քոլեջ
                    </div>
                </div>

                <div>
                    {subjectArr.map((val) => {
            return (<subjectExam_1.default val={val}/>);
        })}
                </div>

            </div>

            {isShow
            ?
                <div>
                        <input type="text" onChange={(e) => setSubjectName(e.target.value)}/>
                        <button onClick={addSubject}>add</button>
                    </div>
            :
                null}


            {isFirstSubject
            ?
                <button onClick={() => setIsShow(!isShow)}>
                        {isShow ? '-' : '+'}
                    </button>
            :
                null}

            {/* delete start */}
            {/* <div>
            <div>
                wefweffewfewewfwfefewewwfefew
            </div>
            {
                true
                    ?
                    <div>
                        <div>
                            <input type="text" onChange={(e) => setTestName(e.target.value)} placeholder='Please write exam name...' />
                        </div>
                        <button onClick={generateTestFunc}>Start</button>
                    </div>
                    :
                    null
            }
            <button >
                add exam
            </button>
        </div> */}

            {/* delete end */}

            {isSecShow
            ?
                <div>
                        <input type="text" onChange={(e) => setSubjectName(e.target.value)}/>
                        <button onClick={addSubject}>add</button>
                    </div>
            :
                null}
            {isFirstSubject
            ?
                null
            :
                <button onClick={() => setIsSecShow(!isShow)}>
                        {isSecShow ? '-' : '+'}
                    </button>}

        </div>);
};
exports.default = WorkspaceComp;
