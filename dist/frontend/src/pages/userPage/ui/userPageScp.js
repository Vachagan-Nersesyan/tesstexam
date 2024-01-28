"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const userPageStl_module_css_1 = __importDefault(require("./userPageStl.module.css"));
const antd_1 = require("antd");
const fa6_1 = require("react-icons/fa6");
const UserPage = () => {
    return (<div className={userPageStl_module_css_1.default.user_page_content}>
            <div className={userPageStl_module_css_1.default.user_page_content_container}>
                <div className={userPageStl_module_css_1.default.user_page_content_title}>
                    Իմ էջը
                </div>
                <antd_1.Row>
                    <antd_1.Col span={4} className={userPageStl_module_css_1.default.user_page_info_content_col}>
                        <div className={userPageStl_module_css_1.default.user_page_info_content}>
                            <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_ic}>
                                <fa6_1.FaUser />
                            </div>
                            <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_2}>
                                nameee
                            </div>
                        </div>
                    </antd_1.Col>
                    <antd_1.Col span={14} className={userPageStl_module_css_1.default.user_page_info_content_col_s}>
                        <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1}>
                            <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_1}>
                                Ազգանուն։
                            </div>
                            <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_2}>
                                <antd_1.Input />
                            </div>
                        </div>
                        <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1}>
                            <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_1}>
                                Անուն
                            </div>
                            <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_2}>
                                <antd_1.Input />
                            </div>
                        </div>
                        <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1}>
                            <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_1}>
                                Հայրանուն
                            </div>
                            <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_2}>
                                <antd_1.Input />
                            </div>
                        </div>
                        <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1}>
                            <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_1}>
                                Հեռախոսահամար
                            </div>
                            <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_2}>
                                <antd_1.Input type='number'/>
                            </div>
                        </div>
                        <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_2_3}>
                            <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_2_1}>
                                <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_1}>
                                    Ծննդյան օրը
                                </div>
                                <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_2}>
                                    <antd_1.DatePicker />
                                </div>
                            </div>
                            <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_2_1_c}>
                                <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_1}>
                                    Սեռ
                                </div>
                                <div className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_2}>
                                    <antd_1.Select className={userPageStl_module_css_1.default.user_page_info_content_in_item_1_2_slct} options={[
            {
                value: 'առական',
                label: 'Արական',
            },
            {
                value: 'իգական',
                label: 'Իգական',
            }
        ]}/>
                                </div>
                            </div>
                        </div>
                    </antd_1.Col>
                </antd_1.Row>
            </div>
        </div>);
};
exports.default = UserPage;
