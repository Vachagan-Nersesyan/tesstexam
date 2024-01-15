"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const loginStl_module_css_1 = __importDefault(require("./loginStl.module.css"));
const react_router_dom_1 = require("react-router-dom");
const LoginComp = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const LoginFunc = () => {
        navigate('/all-exams');
    };
    return (<div className={loginStl_module_css_1.default.login_content}>
            <div className={loginStl_module_css_1.default.login_content_container}>
                <div className={loginStl_module_css_1.default.login_content_container_cont}>
                    <div className={loginStl_module_css_1.default.login_content_container_title}>
                        Lets Sign you in
                    </div>
                    <div className={loginStl_module_css_1.default.login_content_text_item_1}>
                        <span>Welcome Back,</span>
                        <span>You have been missed</span>
                    </div>
                    <div className={loginStl_module_css_1.default.login_content_text_item_2}>
                        <div className={loginStl_module_css_1.default.login_content_text_item_2_1}>
                            <input type="text"/>
                        </div>
                        <div className={loginStl_module_css_1.default.login_content_text_item_2_1}>
                            <input type="password"/>
                        </div>
                        <div className={loginStl_module_css_1.default.login_content_text_item_2_2}>
                            <button type='submit' onClick={LoginFunc}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
exports.default = LoginComp;
