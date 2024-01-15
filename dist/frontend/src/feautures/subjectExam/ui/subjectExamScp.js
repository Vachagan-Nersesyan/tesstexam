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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const testReducer_1 = require("entities/testR/testReducer");
const subjectReducer_1 = require("entities/subjectR/subjectReducer");
const SubjectExamComp = ({ val }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const [isShowExamItems, setIsShowExamItems] = (0, react_1.useState)(false);
    const [examName, setExamName] = (0, react_1.useState)('');
    const generateTestFunc = () => {
        dispatch((0, testReducer_1.changeTestName)({ info: examName }));
        dispatch((0, subjectReducer_1.saveSubjectNameFunc)({ info: val.subjectName }));
        navigate('/test-items');
    };
    const allExams = (0, react_redux_1.useSelector)((state) => state.subjectR.allExams);
    const [subjectArr, setSubjectArr] = (0, react_1.useState)(allExams);
    (0, react_1.useEffect)(() => {
        setSubjectArr(allExams);
    }, [allExams]);
    // const navigate = useNavigate()
    const generateFsttest = (subjectName, examName) => {
        console.log(subjectArr, subjectName, examName, 'subjectArrsubjectArrsubjectArr');
        subjectArr.map((val) => {
            if (val.subjectName === subjectName) {
                val.exams.map((val1) => {
                    if (val1.name === examName) {
                        console.log(val1.info, val1.name, 'val1.info,val1.infoval1.info,val1.info');
                        dispatch((0, testReducer_1.changeAllTest)({ info: val1.info }));
                        navigate('/test');
                        // downloadFile()
                    }
                });
            }
        });
    };
    return (<div>
            <div>
                {val.subjectName}
            </div>
            {isShowExamItems
            ?
                <div>
                        <div>
                            <input onChange={(e) => setExamName(e.target.value)} type="text" placeholder='Please write exam name...'/>
                        </div>
                        <button onClick={generateTestFunc}>Start</button>
                    </div>
            :
                null}
            {val.exams.map((val2) => {
            return (<div>
                            <button style={{ backgroundColor: 'red' }} onClick={() => generateFsttest(val.subjectName, val2.name)}>
                                {val2.name}
                            </button>
                        </div>);
        })}
            <button onClick={() => setIsShowExamItems(true)}>
                add exam
            </button>
        </div>);
};
exports.default = SubjectExamComp;
