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
const subjectExamItemsStl_module_css_1 = __importDefault(require("./subjectExamItemsStl.module.css"));
const react_redux_1 = require("react-redux");
const testReducer_1 = require("entities/testR/testReducer");
const react_router_dom_1 = require("react-router-dom");
const subjectReducer_1 = require("entities/subjectR/subjectReducer");
const antd_1 = require("antd");
const SubjectExamItemComp = ({ name, subjectName }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const allExams = (0, react_redux_1.useSelector)((state) => state.subjectR.allExams);
    const [subjectArr, setSubjectArr] = (0, react_1.useState)(allExams);
    (0, react_1.useEffect)(() => {
        setSubjectArr(allExams);
    }, [allExams]);
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
    // const generateSsttest = (subjectName: string, examName: string) => {
    //     console.log(subjectArr, subjectName, examName, 'subjectArrsubjectArrsubjectArr')
    //     subjectArr.map((val) => {
    //         if (val.subjectName === subjectName) {
    //             val.exams.map((val1) => {
    //                 if (val1.name === examName) {
    //                     console.log(val1.info, val1.name, 'val1.info,val1.infoval1.info,val1.info')
    //                     dispatch(changeAllTest({ info: val1.info }))
    //                     navigate('/new-test')
    //                     // downloadFile()
    //                 }
    //             })
    //         }
    //     })
    // }
    const generateTsttest = (subjectName, examName) => {
        console.log(subjectArr, subjectName, examName, 'subjectArrsubjectArrsubjectArr');
        subjectArr.map((val) => {
            if (val.subjectName === subjectName) {
                val.exams.map((val1) => {
                    if (val1.name === examName) {
                        console.log(val1.info, val1.name, 'val1.info,val1.infoval1.info,val1.info');
                        dispatch((0, testReducer_1.changeAllTest)({ info: val1.info }));
                        navigate('/test-answers-exams');
                        // downloadFile()
                    }
                });
            }
        });
    };
    const generateForthsttest = (subjectName, examName) => {
        console.log(subjectArr, subjectName, examName, 'subjectArrsubjectArrsubjectArr');
        subjectArr.map((val) => {
            if (val.subjectName === subjectName) {
                val.exams.map((val1) => {
                    if (val1.name === examName) {
                        console.log(val1.info, val1.name, 'val1.info,val1.infoval1.info,val1.info');
                        // dispatch(updateTestsArr())
                        dispatch((0, testReducer_1.getTestName)({ info: examName }));
                        dispatch((0, subjectReducer_1.saveSubjectNameFunc)({ info: examName }));
                        dispatch((0, testReducer_1.getTestSubjectName)({ info: subjectName }));
                        dispatch((0, testReducer_1.changeAllBetaTest)({ info: val1.info }));
                        dispatch((0, testReducer_1.changeAllTest)({ info: val1.info }));
                        dispatch((0, testReducer_1.changeIsRndItm)(true));
                        navigate('/test-items');
                        // downloadFile()
                    }
                });
            }
        });
    };
    const items = [
        {
            key: '1',
            label: (<div onClick={() => generateFsttest(subjectName, name)} className={subjectExamItemsStl_module_css_1.default.subject_exma_item_content_2_item_2_item_1_print_content_1}>
                    print by test
                </div>),
        },
        {
            key: '2',
            label: (<div onClick={() => generateTsttest(subjectName, name)} className={subjectExamItemsStl_module_css_1.default.subject_exma_item_content_2_item_2_item_1_print_content_1}>
                    print by answers test

                </div>),
        }
    ];
    return (<antd_1.Dropdown menu={{ items }} placement="bottomLeft">
            <button className={subjectExamItemsStl_module_css_1.default.subject_exma_item_content_2_item_2_item_1_in_item} onClick={() => generateForthsttest(subjectName, name)}>
                {name}
            </button>
        </antd_1.Dropdown>);
};
exports.default = SubjectExamItemComp;
