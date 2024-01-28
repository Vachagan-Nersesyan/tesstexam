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
const headerStl_module_css_1 = __importDefault(require("./headerStl.module.css"));
const _1_png_1 = __importDefault(require("../images/1.png"));
const _2_png_1 = __importDefault(require("../images/2.png"));
const antd_1 = require("antd");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const redux_store_1 = require("entities/store/redux-store");
const adminThunk_1 = require("entities/adminR/adminThunk");
const HeaderComp = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const isAdminItem = (0, react_redux_1.useSelector)((state) => state.adminR.isAdmin);
    const dispatch = (0, react_redux_1.useDispatch)();
    const aDispatch = (0, redux_store_1.useAppDispatch)();
    const currentTeacherInfo = (0, react_redux_1.useSelector)((state) => state.adminR.curentTeacherInfo);
    const [currentTeacherInfoHk, setCurrentTeacherInfoHk] = (0, react_1.useState)(currentTeacherInfo);
    (0, react_1.useEffect)(() => {
        setCurrentTeacherInfoHk(currentTeacherInfo);
    }, [currentTeacherInfo]);
    const logOutFuncComp = () => {
        navigate('/');
        aDispatch((0, adminThunk_1.logOutFunc)({ info: currentTeacherInfoHk === null || currentTeacherInfoHk === void 0 ? void 0 : currentTeacherInfoHk.password }));
    };
    return (<div className={headerStl_module_css_1.default.homepage_navbar}>
            <antd_1.Row>
                <antd_1.Col span={12} className={headerStl_module_css_1.default.homepage_navbar_first_col}>
                    <div className={headerStl_module_css_1.default.homepage_navbar_logo}>
                        <img src={_1_png_1.default} alt=""/>
                    </div>
                    <div className={headerStl_module_css_1.default.homepage_navbar_name}>
                        ԵԻՊՔ
                    </div>
                </antd_1.Col>
                <antd_1.Col span={12} className={headerStl_module_css_1.default.homepage_navbar_sec_col}>
                    <div onClick={logOutFuncComp} className={headerStl_module_css_1.default.homepage_navbar_sec_col_1}>
                        <img src={_2_png_1.default} alt=""/>
                    </div>
                </antd_1.Col>
            </antd_1.Row>
        </div>);
};
exports.default = HeaderComp;
