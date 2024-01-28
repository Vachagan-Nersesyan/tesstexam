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
const studentStl_module_css_1 = __importDefault(require("./studentStl.module.css"));
const react_redux_1 = require("react-redux");
const redux_store_1 = require("entities/store/redux-store");
const react_router_dom_1 = require("react-router-dom");
const subjectReducerThunk_1 = require("entities/subjectR/subjectReducerThunk");
const studentReducer_1 = require("entities/student/studentReducer");
const antd_1 = require("antd");
const StudentComp = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const aDispatch = (0, redux_store_1.useAppDispatch)();
    const isAdminItem = (0, react_redux_1.useSelector)((state) => state.adminR.isAdmin);
    if (isAdminItem) {
        navigate('/admin');
    }
    (0, react_1.useEffect)(() => {
        aDispatch((0, subjectReducerThunk_1.getExamsFunc)());
    }, []);
    const allSubjectsInfo = (0, react_redux_1.useSelector)((state) => state.subjectR.allExams);
    const [allSubjectsInfoHk, setAllSubjectsInfoHk] = (0, react_1.useState)(allSubjectsInfo);
    (0, react_1.useEffect)(() => {
        setAllSubjectsInfoHk(allSubjectsInfo);
    }, [allSubjectsInfo]);
    const [classNumber, setClassNumber] = (0, react_1.useState)('');
    const saveClassNumberFunc = () => {
        let subjectExistsArrClone = [];
        allSubjectsInfoHk.map((val, ind) => {
            val.exams.map((val1, ind1) => {
                if (val1.otherInfo) {
                    if (val1.otherInfo.clssNm === classNumber) {
                        subjectExistsArrClone.push(val1);
                    }
                }
            });
        });
        dispatch((0, studentReducer_1.changeExistsExamInfo)({ info: subjectExistsArrClone }));
        navigate('/exists-tests');
    };
    return (<div className={studentStl_module_css_1.default.student_content}>
            <div className={studentStl_module_css_1.default.student_content_container}>
                <div className={studentStl_module_css_1.default.student_content_container_txt_content}>
                    <div className={studentStl_module_css_1.default.student_content_container_txt_content_1}>
                        <div className={studentStl_module_css_1.default.student_content_container_txt_content_1_1}>
                            Խնդրում ենք գրեք Ձեր անունը
                        </div>
                        <div className={studentStl_module_css_1.default.student_content_container_txt_content_1_2}>
                            <antd_1.Input />
                        </div>
                    </div>
                    <div className={studentStl_module_css_1.default.student_content_container_txt_content_1}>
                        <div className={studentStl_module_css_1.default.student_content_container_txt_content_1_1}>
                            Խնդրում ենք գրեք Ձեր ազգանունը
                        </div>
                        <div className={studentStl_module_css_1.default.student_content_container_txt_content_1_2}>
                            <antd_1.Input />
                        </div>
                    </div>
                    <div className={studentStl_module_css_1.default.student_content_container_txt_content_1}>
                        <div className={studentStl_module_css_1.default.student_content_container_txt_content_1_1}>
                            Խնդրում ենք գրեք Ձեր խմբի համարը
                        </div>
                        <div className={studentStl_module_css_1.default.student_content_container_txt_content_1_2}>
                            <antd_1.Input onChange={(e) => setClassNumber(e.target.value)}/>
                        </div>
                    </div>
                    <div className={studentStl_module_css_1.default.student_content_container_txt_content_btn}>
                        <button onClick={saveClassNumberFunc}>Հաստատել</button>
                    </div>
                </div>
            </div>
        </div>);
};
exports.default = StudentComp;
