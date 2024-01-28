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
const loginStl_module_css_1 = __importDefault(require("./loginStl.module.css"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const redux_store_1 = require("entities/store/redux-store");
const adminThunk_1 = require("entities/adminR/adminThunk");
const _2_gif_1 = __importDefault(require("../images/2.gif"));
const LoginComp = () => {
    const loadComp = (0, react_redux_1.useSelector)((state) => state.adminR.loading);
    const [loadCompHk, setLoadCompHk] = (0, react_1.useState)(loadComp);
    (0, react_1.useEffect)(() => {
        setLoadCompHk(loadComp);
    }, [loadComp]);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        // dispatch(changeStudentNumInfo({ info: '' }))F
    }, []);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const LoginFunc = () => {
        navigate('/student');
    };
    const [isAdminPassword, setIsAdminPassword] = (0, react_1.useState)('');
    const isAdminItem = (0, react_redux_1.useSelector)((state) => state.adminR.curentTeacherInfo);
    const [isAdminArrHk, setIsAdminArrHk] = (0, react_1.useState)(isAdminItem);
    const [isPasswordRight, setIsPasswordRight] = (0, react_1.useState)(isAdminItem === null || isAdminItem === void 0 ? void 0 : isAdminItem.isAuth);
    (0, react_1.useEffect)(() => {
        setIsPasswordRight(isAdminItem === null || isAdminItem === void 0 ? void 0 : isAdminItem.isAuth);
        setIsAdminArrHk(isAdminItem);
    }, [isAdminItem]);
    if (isPasswordRight) {
        navigate('/workspace');
    }
    (0, react_1.useEffect)(() => {
        console.log(isAdminArrHk, 'isAdminArrHk');
        // changeStudentNumInfo
    }, []);
    const aDispatch = (0, redux_store_1.useAppDispatch)();
    const sendPasswordCompFunc = () => {
        // dispatch(changeStudentNumInfo({ info: isAdminPassword }))
        aDispatch((0, adminThunk_1.isPasswordValidFunc)({ info: isAdminPassword }));
    };
    return (<div className={loginStl_module_css_1.default.login_content}>
            <div className={loginStl_module_css_1.default.login_content_container}>
                <div className={loginStl_module_css_1.default.login_content_container_cont}>
                    {/* <div className={styles.login_content_container_cont_logo}>
            <img src={logo} alt="" />
        </div> */}
                    <div className={loginStl_module_css_1.default.login_content_container_title}>
                        ԳԹՀ
                    </div>
                    <div className={loginStl_module_css_1.default.login_content_text_item_1}>
                        <span>Բարի գալուստ</span>
                    </div>
                    {loadCompHk
            ?
                <div className={loginStl_module_css_1.default.login_content_text_item_loader}>
                                <img src={_2_gif_1.default} alt=""/>
                            </div>
            :
                <div className={loginStl_module_css_1.default.login_content_text_item_2}>
                                <div className={loginStl_module_css_1.default.login_content_text_item_2_1}>
                                    <input type="text" placeholder='Մուտքանուն'/>
                                </div>
                                <div className={loginStl_module_css_1.default.login_content_text_item_2_1}>
                                    <input type="password" placeholder='Գաղտնաբառ'/>
                                </div>
                                <div className={loginStl_module_css_1.default.login_content_text_item_3_1}>
                                    Եթե ուսանող էք խնդրում ենք սեղմեք այստեղ
                                </div>
                                <div className={loginStl_module_css_1.default.login_content_text_item_2_2}>
                                    <button type='submit' onClick={LoginFunc}>
                                        Մուտք
                                    </button>
                                </div>
                                <div className={loginStl_module_css_1.default.login_content_text_item_3}>
                                    <div className={loginStl_module_css_1.default.login_content_text_item_3_1}>
                                        Եթե ուսուցիչ էք խնդրում ենք գրեք գաղտնաբառը
                                    </div>
                                    <div className={loginStl_module_css_1.default.login_content_text_item_3_2}>
                                        <input type="text" onChange={(e) => setIsAdminPassword(e.target.value)}/>
                                    </div>
                                    <div className={loginStl_module_css_1.default.login_content_text_item_3_3}>
                                        <button onClick={sendPasswordCompFunc}>Հաստատել</button>
                                    </div>
                                </div>
                            </div>}
                </div>
            </div>
        </div>);
};
exports.default = LoginComp;
