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
const layoutStl_module_css_1 = __importDefault(require("./layoutStl.module.css"));
const react_router_dom_1 = require("react-router-dom");
const fa6_1 = require("react-icons/fa6");
const icons_1 = require("@ant-design/icons");
const antd_1 = require("antd");
const exams_1 = __importDefault(require("pages/exams"));
const userPage_1 = __importDefault(require("pages/userPage"));
const subjectExam_1 = __importDefault(require("feautures/subjectExam"));
const tableSubject_1 = __importDefault(require("pages/tableSubject"));
const tableSubjectItem_1 = __importDefault(require("pages/tableSubjectItem"));
const { Header, Sider, Content } = antd_1.Layout;
const LayoutComp = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    // const isAdminItem = useSelector((state: AppStateType) => state.adminR.isAdmin)
    // const [isAdmin, setIsAdmin] = useState<boolean>(isAdminItem)
    // useEffect(() => {
    //     setIsAdmin(isAdminItem)
    // }, [isAdminItem])
    // console.log(isAdmin, 'isAdmin')
    // if (!isAdmin) {
    //     navigate('/login')
    // }
    const location = (0, react_router_dom_1.useLocation)();
    console.log(location, 'locationlocation');
    const [collapsed, setCollapsed] = (0, react_1.useState)(false);
    const { token: { colorBgContainer, borderRadiusLG }, } = antd_1.theme.useToken();
    // sssss
    const [selectedKeys, setSelectedKeys] = (0, react_1.useState)(['1']);
    const handleMenuSelect = ({ key }) => {
        setSelectedKeys([key]);
    };
    const menuItems = [
        {
            key: '1',
            icon: <fa6_1.FaRegUser />,
            label: (<react_router_dom_1.NavLink to="/user-page" className={layoutStl_module_css_1.default.layout_meun_content_item}>
                    <span style={{ paddingTop: '1em', color: 'black', display: !collapsed ? 'block' : 'none' }}>Իմ էջը</span>
                </react_router_dom_1.NavLink>),
        },
        {
            key: '2',
            icon: <fa6_1.FaRegNoteSticky />,
            label: (<react_router_dom_1.NavLink to="/admin" className={layoutStl_module_css_1.default.layout_meun_content_item}>
                    <span style={{ paddingTop: '1em', display: !collapsed ? 'block' : 'none' }}>Թեստեր</span>
                </react_router_dom_1.NavLink>),
        },
        {
            key: '3',
            icon: <fa6_1.FaAlignLeft />,
            label: (<react_router_dom_1.NavLink to="/table-subjects" className={layoutStl_module_css_1.default.layout_meun_content_item}>
                    <span style={{ paddingTop: '1em', display: !collapsed ? 'block' : 'none' }}>Թեստեր ըստ տեսակի</span>
                </react_router_dom_1.NavLink>),
        },
    ];
    return (<antd_1.Layout className={layoutStl_module_css_1.default.layout_content}>
            <div className={layoutStl_module_css_1.default.layout_meun_content_overlay}>

                <Sider className={layoutStl_module_css_1.default.sider_content} trigger={null} width={250} collapsible collapsed={collapsed}>

                    <antd_1.Menu className={layoutStl_module_css_1.default.layout_meun_content} theme="dark" mode="inline" selectedKeys={selectedKeys} onSelect={handleMenuSelect}>
                        {menuItems.map((item) => (<antd_1.Menu.Item key={item.key} icon={item.icon} style={selectedKeys.includes(item.key) ? { backgroundColor: 'black', color: 'white' } : { color: 'black' }}>
                                {item.label}
                            </antd_1.Menu.Item>))}
                    </antd_1.Menu>

                    <antd_1.Button type="text" icon={collapsed ? <icons_1.MenuUnfoldOutlined /> : <icons_1.MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)} style={{
            fontSize: '16px',
            width: 64,
            height: 64,
        }}/>
                </Sider>

            </div>
            <antd_1.Layout>
                <div className={collapsed ? layoutStl_module_css_1.default.content_item : layoutStl_module_css_1.default.content_item_sec}>
                    <Content style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
        }}>
                        {location.pathname.includes('/workspace')
            ?
                <userPage_1.default />
            :
                location.pathname.includes('/all-exams') || location.pathname.includes('/admin')
                    ?
                        <exams_1.default />
                    :
                        location.pathname.includes('/user-page')
                            ?
                                <userPage_1.default />
                            :
                                location.pathname.includes('/exams/')
                                    ?
                                        <subjectExam_1.default />
                                    :
                                        location.pathname.includes('/table-subjects/type/')
                                            ?
                                                <tableSubjectItem_1.default />
                                            :
                                                location.pathname.includes('/table-subjects')
                                                    ?
                                                        <tableSubject_1.default />
                                                    :
                                                        null}
                    </Content>
                </div>

            </antd_1.Layout>
        </antd_1.Layout>);
};
exports.default = LayoutComp;
