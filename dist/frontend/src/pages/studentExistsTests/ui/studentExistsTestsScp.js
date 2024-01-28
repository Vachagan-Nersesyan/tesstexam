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
const studentExistsTestsStl_module_css_1 = __importDefault(require("./studentExistsTestsStl.module.css"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const studentReducer_1 = require("entities/student/studentReducer");
const StudentExistsTestsComp = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const isAdminItem = (0, react_redux_1.useSelector)((state) => state.adminR.isAdmin);
    if (isAdminItem) {
        navigate('/admin');
    }
    const existsTestComp = (0, react_redux_1.useSelector)((state) => state.studentR.allExamExists);
    const [existsTestCompHk, setExistsTestCompHk] = (0, react_1.useState)(existsTestComp);
    (0, react_1.useEffect)(() => {
        setExistsTestCompHk(existsTestComp);
    }, [existsTestComp]);
    console.log(existsTestCompHk);
    const saveAllNewExamChanges = (obj) => {
        dispatch((0, studentReducer_1.changeStudentOthInfo)({ info: obj.otherInfo }));
        dispatch((0, studentReducer_1.changeStudentNumstInfo)({ info: obj.questionCount }));
        dispatch((0, studentReducer_1.changeStudentTestsInfo)({ info: obj.info }));
        navigate('/student-test-st');
    };
    return (<div className={studentExistsTestsStl_module_css_1.default.student_exists_content}>
            <div className={studentExistsTestsStl_module_css_1.default.student_exists_content_container}>
                <div className={studentExistsTestsStl_module_css_1.default.student_exists_content_container_title}>
                    Քննություններ
                </div>
                {existsTestCompHk.length === 0
            ?
                <div className={studentExistsTestsStl_module_css_1.default.student_exists_content_container_subtitle}>
                            Կներեք քննություններ դեռ չկան։
                        </div>
            :
                <div className={studentExistsTestsStl_module_css_1.default.student_exists_content_container_exms_prt}>
                            {existsTestCompHk.map((val) => {
                        return (<div className={studentExistsTestsStl_module_css_1.default.student_exists_content_container_exms_prt_item}>
                                            <button onClick={() => saveAllNewExamChanges(val)}>
                                                {val.name} {val.subjjectName}
                                            </button>
                                        </div>);
                    })}
                        </div>}
            </div>
        </div>);
};
exports.default = StudentExistsTestsComp;
