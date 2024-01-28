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
const subjectExamStl_module_css_1 = __importDefault(require("./subjectExamStl.module.css"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const testReducer_1 = require("entities/testR/testReducer");
const redux_store_1 = require("entities/store/redux-store");
const subjectExamItem_1 = __importDefault(require("feautures/subjectExamItem"));
const antd_1 = require("antd");
const _2_gif_1 = __importDefault(require("../images/2.gif"));
const subjectReducerThunk_1 = require("entities/subjectR/subjectReducerThunk");
const SubjectExamComp = ({}) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const [isShowExamItems, setIsShowExamItems] = (0, react_1.useState)(false);
    const [examName, setExamName] = (0, react_1.useState)('');
    // const allExams = useSelector((state: AppStateType) => state.subjectR.allExams)
    // const [subjectArr, setSubjectArr] = useState<Array<SubjectType>>(allExams)
    // useEffect(() => {
    //     setSubjectArr(allExams)
    // }, [allExams])
    // const navigate = useNavigate()
    // const generateFsttest = (subjectName: string, examName: string) => {
    //     console.log(subjectArr, subjectName, examName, 'subjectArrsubjectArrsubjectArr')
    //     subjectArr.map((val) => {
    //         if (val.subjectName === subjectName) {
    //             val.exams.map((val1) => {
    //                 if (val1.name === examName) {
    //                     console.log(val1.info, val1.name, 'val1.info,val1.infoval1.info,val1.info')
    //                     dispatch(changeAllTest({ info: val1.info }))
    //                     navigate('/test')
    //                     // downloadFile()
    //                 }
    //             })
    //         }
    //     })
    // }
    const params = (0, react_router_dom_1.useParams)();
    const aDispatch = (0, redux_store_1.useAppDispatch)();
    const [chAnsQuest, setChAnsQuest] = (0, react_1.useState)({
        examYear: 0,
        examType: '',
        subjectName: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChAnsQuest((prevData) => (Object.assign(Object.assign({}, prevData), { [name]: value })));
    };
    const generateTestFunc = () => {
        // dispatch(updateTestsArr())
        dispatch((0, testReducer_1.changeIsRndItm)(true));
        dispatch((0, testReducer_1.changeTestName)({ info: examName }));
        // dispatch(saveSubjectNameFunc({ info: val.subjectName }))
        dispatch((0, testReducer_1.getTestSubjectName)({ info: params.id }));
        dispatch((0, testReducer_1.updateTestsArr)());
        dispatch((0, testReducer_1.getOtherInfo)({ info: chAnsQuest }));
        navigate('/test-items');
    };
    console.log(params, 'paramsparamsparams');
    const [currentSubject, setCurrentSubject] = (0, react_1.useState)(null);
    const allTextsArr = (0, react_redux_1.useSelector)((state) => state.subjectR.allExams);
    const [allTextsArrHk, setAllTextsArrHk] = (0, react_1.useState)(allTextsArr);
    (0, react_1.useEffect)(() => {
        console.log('ccccccccccc');
        aDispatch((0, subjectReducerThunk_1.getExamsFunc)());
    }, []);
    (0, react_1.useEffect)(() => {
        setAllTextsArrHk(allTextsArr);
    }, [allTextsArr]);
    (0, react_1.useEffect)(() => {
        allTextsArrHk.map((val) => {
            if (val.subjectName === params.id) {
                setCurrentSubject(val);
            }
        });
    }, [allTextsArrHk]);
    console.log(currentSubject, 'currentSubject');
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        generateTestFunc();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [selectedSbjImage, setSelectedSbjImage] = (0, react_1.useState)('');
    const setImageSbjFunc = (e) => {
        const fileInput = e.target;
        const selectedFile = fileInput.files && fileInput.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                var _a;
                setSelectedSbjImage((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    (0, react_1.useEffect)(() => {
        console.log(currentSubject === null || currentSubject === void 0 ? void 0 : currentSubject.subjectName, 'currentSubject?.subjectName');
        if (selectedSbjImage && (currentSubject === null || currentSubject === void 0 ? void 0 : currentSubject.subjectName)) {
            aDispatch((0, subjectReducerThunk_1.changeSubjectPicFunc)({ subjectName: currentSubject === null || currentSubject === void 0 ? void 0 : currentSubject.subjectName, picture: selectedSbjImage }));
        }
    }, [selectedSbjImage]);
    const loadComp = (0, react_redux_1.useSelector)((state) => state.subjectR.loading);
    const [loadCompHk, setLoadCompHk] = (0, react_1.useState)(loadComp);
    (0, react_1.useEffect)(() => {
        setLoadCompHk(loadComp);
    }, [loadComp]);
    console.log(chAnsQuest, 'chAnsQuest');
    return (<>
            <div className={subjectExamStl_module_css_1.default.subject_exma_item_content}>
                <div className={subjectExamStl_module_css_1.default.subject_exma_item_content_1_title}>
                    {currentSubject === null || currentSubject === void 0 ? void 0 : currentSubject.subjectName}
                </div>
                <antd_1.Row>
                    <antd_1.Col span={17}>
                        <div className={subjectExamStl_module_css_1.default.subject_exma_item_content_2_item}>
                            <div className={subjectExamStl_module_css_1.default.subject_exma_item_content_2_item_2_item}>
                                {currentSubject === null || currentSubject === void 0 ? void 0 : currentSubject.exams.map((val2) => {
            return (<subjectExamItem_1.default subjectName={val2.subjjectName} name={val2.name}/>);
        })}
                            </div>
                            <div className={subjectExamStl_module_css_1.default.subject_exma_item_content_2_item_3_item}>
                                <button onClick={showModal}>
                                    Ավելացնել քննություն
                                </button>
                            </div>
                        </div>
                    </antd_1.Col>
                    <antd_1.Col span={7} className={subjectExamStl_module_css_1.default.subject_exma_item_content_sec_col}>
                        <div className={subjectExamStl_module_css_1.default.subject_exma_item_content_sec_col_content}>
                            <div className={subjectExamStl_module_css_1.default.subject_exma_item_content_sec_col_1}>
                                Թեստի նկարը
                            </div>
                            <div className={subjectExamStl_module_css_1.default.subject_exma_item_content_sec_col_2}>
                                <input type="file" onChange={setImageSbjFunc} accept="image/png, image/jpeg"/>
                            </div>
                        </div>
                        {loadCompHk
            ?
                <div className={subjectExamStl_module_css_1.default.subject_exma_item_content_sec_col_loader}>
                                    <img src={_2_gif_1.default} alt=""/>
                                </div>
            :
                null}

                        <div className={subjectExamStl_module_css_1.default.subject_exma_item_content_sec_col_2}>
                            <img src={selectedSbjImage ? selectedSbjImage : ''} alt=""/>
                        </div>
                    </antd_1.Col>
                </antd_1.Row>
            </div>

            <antd_1.Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText={<div>Չեղարկել</div>} okText={<div>Հաստատել</div>} closable={false}>
                <div className={subjectExamStl_module_css_1.default.exam_mdl_content}>
                    <div className={subjectExamStl_module_css_1.default.exam_mdl_content_title}>
                        Նոր թեստի ստեղծում
                    </div>
                    <div className={subjectExamStl_module_css_1.default.exam_mdl_content_txt}>
                        <div className={subjectExamStl_module_css_1.default.exam_mdl_content_txt_1}>
                            Խնդրում ենք գրեք թեստի անվանումը
                        </div>
                        <div className={subjectExamStl_module_css_1.default.exam_mdl_content_txt_2}>
                            <antd_1.Input onChange={(e) => setExamName(e.target.value)}/>
                        </div>
                        <div className={subjectExamStl_module_css_1.default.test_content_in_items}>
                            <div className={subjectExamStl_module_css_1.default.test_content_in_items_1}>
                                <div className={subjectExamStl_module_css_1.default.test_content_in_items_1_1}>
                                    Խնդրում ենք նշեք քննության տարեթիվը
                                </div>
                                <div className={subjectExamStl_module_css_1.default.test_content_in_items_1_2}>
                                    <input type="number" name='examYear' onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={subjectExamStl_module_css_1.default.test_content_in_items_1}>
                                <div className={subjectExamStl_module_css_1.default.test_content_in_items_1_1}>
                                    Խնդրում ենք նշեք քննության տեսակը
                                </div>
                                <div className={subjectExamStl_module_css_1.default.test_content_in_items_1_2}>
                                    <input type="text" name='examType' onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className={subjectExamStl_module_css_1.default.test_content_in_items_1}>
                                <div className={subjectExamStl_module_css_1.default.test_content_in_items_1_1}>
                                    Խնդրում ենք նշեք քննության առարկայի անունը
                                </div>
                                <div className={subjectExamStl_module_css_1.default.test_content_in_items_1_2}>
                                    <input type="text" name='subjectName' onChange={handleInputChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </antd_1.Modal>
        </>);
};
exports.default = SubjectExamComp;
