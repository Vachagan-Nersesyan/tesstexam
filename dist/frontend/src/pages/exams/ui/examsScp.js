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
const react_router_dom_1 = require("react-router-dom");
const testReducer_1 = require("entities/testR/testReducer");
const subjectReducer_1 = require("entities/subjectR/subjectReducer");
const antd_1 = require("antd");
const WorkspaceComp = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const isAdminItem = (0, react_redux_1.useSelector)((state) => state.adminR.isAdmin);
    // if (!isAdminItem) {
    //     navigate('/login')
    // }
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
    const loader = (0, react_redux_1.useSelector)((state) => state.subjectR.loading);
    const [loaderHk, setLoaderHk] = (0, react_1.useState)(loader);
    const curentTeacherInfoComp = (0, react_redux_1.useSelector)((state) => state.adminR.curentTeacherInfo);
    const [curentTeacherInfoCompHk, setCurentTeacherInfoCompHk] = (0, react_1.useState)(curentTeacherInfoComp);
    (0, react_1.useEffect)(() => {
        setCurentTeacherInfoCompHk(curentTeacherInfoComp);
    }, [curentTeacherInfoComp]);
    (0, react_1.useEffect)(() => {
        setLoaderHk(loader);
    }, [loader]);
    (0, react_1.useEffect)(() => {
        let allExamsClone = allExams.filter((val) => val.teacherName === (curentTeacherInfoCompHk === null || curentTeacherInfoCompHk === void 0 ? void 0 : curentTeacherInfoCompHk.password));
        console.log(allExams, allExamsClone, 'allExamsClone');
        setSubjectArr(allExamsClone);
    }, [allExams]);
    (0, react_1.useEffect)(() => {
        let allExamsClone = allExams.filter((val) => val.teacherName === (curentTeacherInfoCompHk === null || curentTeacherInfoCompHk === void 0 ? void 0 : curentTeacherInfoCompHk.password));
        console.log(allExams, allExamsClone, 'allExamsClone');
        setSubjectArr(allExamsClone);
    }, []);
    const addSubject = () => {
        let obj = {
            subjectName,
            exams: [],
            date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
            picture: '',
            teacherName: curentTeacherInfoCompHk === null || curentTeacherInfoCompHk === void 0 ? void 0 : curentTeacherInfoCompHk.password
        };
        setIsFirstSubject(false);
        setIsShow(false);
        setIsSecShow(false);
        console.log(obj, 'objobjobj');
        dispatch((0, subjectReducer_1.saveSubjectNameFunc)({ info: subjectName }));
        aDispatch((0, subjectReducerThunk_1.addSubjectFunc)({ info: obj }));
    };
    // deee
    const [testName, setTestName] = (0, react_1.useState)('');
    const generateTestFunc = () => {
        dispatch((0, testReducer_1.changeTestName)({ info: testName }));
        // dispatch(saveSubjectNameFunc({ info: subjectName }))
        navigate('/test-items');
    };
    // modal part
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        addSubject();
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (<>
            <div className={examsStl_module_css_1.default.exam_contant}>
                <div className={examsStl_module_css_1.default.exam_content_sub_ttle}>
                    <antd_1.Row>
                        <antd_1.Col span={12}>
                            Առարկաներ
                        </antd_1.Col>
                        <antd_1.Col span={12} className={examsStl_module_css_1.default.exam_add_content}>
                            <div className={examsStl_module_css_1.default.exam_add_content_in_item_2}>
                                <button onClick={showModal}>Ավելացնել առարկա</button>
                            </div>
                        </antd_1.Col>
                    </antd_1.Row>
                </div>

                <div className={examsStl_module_css_1.default.exam_contant_container_in_cont_ovrl}>
                    {subjectArr.length === 0
            ?
                <div className={examsStl_module_css_1.default.exam_contant_container_in_cont_title}>
                                Դեռ առարկաներ գոյություն չունեն
                            </div>
            :
                <antd_1.Row className={examsStl_module_css_1.default.exam_contant_container_in_cont}>

                                {loaderHk
                        ?
                            <div className={examsStl_module_css_1.default.login_content_text_item_loader}>
                                            <img src={`${loader}`} alt=""/>
                                        </div>
                        :
                            subjectArr.map((val) => {
                                return (
                                // <Col span={5} className={styles.exam_contant_container_in_cont_item} style={{ backgroundImage: `url(${val.picture})` }}>
                                <react_router_dom_1.NavLink className={examsStl_module_css_1.default.exam_contant_container_in_cont_item} style={{ backgroundImage: `url(${val.picture})` }} to={`/exams/${val.subjectName}`}>
                                                    <span className={examsStl_module_css_1.default.exam_contant_container_in_cont_item_1}>{val.date}</span>
                                                    <span>{val.subjectName}</span>
                                                </react_router_dom_1.NavLink>
                                // </Col>
                                );
                                // return (
                                //     <SubjectExamComp val={val} />
                                // )
                            })}
                            </antd_1.Row>}
                </div>



            </div>
            <antd_1.Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText={<div>Չեղարկել</div>} okText={<div>Հաստատել</div>} closable={false}>
                <div className={examsStl_module_css_1.default.exam_mdl_content}>
                    <div className={examsStl_module_css_1.default.exam_mdl_content_title}>
                        Ավելացնել Նոր առարկա
                    </div>
                    <div className={examsStl_module_css_1.default.exam_mdl_content_txt}>
                        <div className={examsStl_module_css_1.default.exam_mdl_content_txt_1}>
                            Խնդրում ենք գրեք  առարկայի անվանումը
                        </div>
                        <div className={examsStl_module_css_1.default.exam_mdl_content_txt_2}>
                            <antd_1.Input onChange={(e) => setSubjectName(e.target.value)}/>
                        </div>
                    </div>
                </div>
            </antd_1.Modal>
        </>);
};
exports.default = WorkspaceComp;
