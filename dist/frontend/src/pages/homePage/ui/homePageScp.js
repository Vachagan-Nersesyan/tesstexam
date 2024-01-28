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
const homePageStl_module_css_1 = __importDefault(require("./homePageStl.module.css"));
const react_simple_typewriter_1 = require("react-simple-typewriter");
const antd_1 = require("antd");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const HomePage = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        // dispatch(changeStudentNumInfo({ info: '' }))
    }, []);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const loginFunc = () => {
        navigate('/login');
    };
    return (<div className={homePageStl_module_css_1.default.homepage_content}>
            <div className={homePageStl_module_css_1.default.homepage_navbar}>
                <antd_1.Row>
                    <antd_1.Col span={12} className={homePageStl_module_css_1.default.homepage_navbar_first_col}>
                        {/* <div className={styles.homepage_navbar_logo}>
            <img src={logo} alt="" />
        </div>
        <div className={styles.homepage_navbar_name}>
            ԵԻՊՔ
        </div> */}
                    </antd_1.Col>
                    <antd_1.Col span={12} className={homePageStl_module_css_1.default.homepage_navbar_sec_col}>
                        {/* <div className={styles.homepage_navbar_sec_col_1}>
            <img src={pic2} alt="" />
        </div> */}
                        <div className={homePageStl_module_css_1.default.homepage_navbar_sec_col_2}>
                            <button onClick={loginFunc}>
                                Մուտք
                            </button>
                        </div>
                    </antd_1.Col>
                </antd_1.Row>
            </div>
            <div className={homePageStl_module_css_1.default.homepage_text_content}>
                <react_simple_typewriter_1.Typewriter words={[
            'Ստեղծիր հարցաշարեր', 'Ստեղծիր թեստերի արտաքին տեսք'
        ]} loop={true} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>
            </div>
        </div>);
};
exports.default = HomePage;
