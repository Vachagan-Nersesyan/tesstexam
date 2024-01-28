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
const App_module_css_1 = __importDefault(require("./App.module.css"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const redux_store_1 = require("entities/store/redux-store");
const header_1 = __importDefault(require("pages/header"));
const adminThunk_1 = require("entities/adminR/adminThunk");
const adminReducer_1 = require("entities/adminR/adminReducer");
const TestComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/test'))));
const MakeTestComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/makeTest'))));
const FinalTestComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/finalTest'))));
const WorkspaceComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/exams'))));
const LoginComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/login'))));
const FinalTestWithAnseComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/finalTestWithAns'))));
const WriteTestComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/writeTest'))));
const AdminComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/admin'))));
const StudentComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/student'))));
const StudentExistsTestsComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/studentExistsTests'))));
const StudentTestComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/studentTest'))));
const HomePage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/homePage'))));
const LayoutComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/layoutContent'))));
const UserPage = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/userPage'))));
const SubjectExamComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('feautures/subjectExam'))));
const NotFound = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/notFound'))));
const NotFoundSComp = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('pages/notFoundS'))));
const App = () => {
    const aDispatch = (0, redux_store_1.useAppDispatch)();
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        aDispatch((0, adminThunk_1.getTeacherInfoFunc)());
    }, []);
    const isAdmin = (0, react_redux_1.useSelector)((state) => state.adminR.curentTeacherInfo);
    console.log(isAdmin, 'isAdmin');
    const [isAdminHk, setIsAdminHk] = (0, react_1.useState)(isAdmin === null || isAdmin === void 0 ? void 0 : isAdmin.isAuth);
    (0, react_1.useEffect)(() => {
        setIsAdminHk(isAdmin === null || isAdmin === void 0 ? void 0 : isAdmin.isAuth);
    }, [isAdmin]);
    // const params = useParams()
    const location = (0, react_router_dom_1.useLocation)();
    console.log(location, 'params');
    // console.log('app', isAdmin)
    // const navigate = useNavigate();
    // if (!isAdmin) {
    //   navigate('/');
    // }
    const allTeacherInfo = (0, react_redux_1.useSelector)((state) => state.adminR.allTeacherInfo);
    const [allTeacherInfoHk, setAllTeacherInfoHk] = (0, react_1.useState)(allTeacherInfo);
    (0, react_1.useEffect)(() => {
        setAllTeacherInfoHk(allTeacherInfo);
    }, [allTeacherInfo]);
    (0, react_1.useEffect)(() => {
        for (let i in allTeacherInfoHk) {
            if (allTeacherInfoHk[i].isAuth) {
                dispatch((0, adminReducer_1.changeStudentNumInfo)({ info: allTeacherInfoHk[i] }));
            }
        }
    }, [allTeacherInfoHk]);
    return (<div className={App_module_css_1.default.App}>
      {isAdminHk
            ?
                <>
            {location.pathname !== '/test' && location.pathname !== '/test-answers-exams' && location.pathname !== '/student-test-st'
                        ?
                            <header_1.default />
                        :
                            null}
            <react_router_dom_1.Routes>



              <react_router_dom_1.Route path='/admin' element={<LayoutComp />}/>



              <react_router_dom_1.Route path='/test-items' element={<TestComp />}/>
              <react_router_dom_1.Route path='/test' element={<FinalTestComp />}/>
              <react_router_dom_1.Route path='/new-test' element={<MakeTestComp />}/>

              <react_router_dom_1.Route path='/workspace' element={<LayoutComp />}/>

              <react_router_dom_1.Route path='/user-page' element={<LayoutComp />}/>
              <react_router_dom_1.Route path='/all-exams' element={<LayoutComp />}/>
              <react_router_dom_1.Route path='/exams/:id' element={<LayoutComp />}/>
              <react_router_dom_1.Route path='/table-subjects' element={<LayoutComp />}/>
              <react_router_dom_1.Route path='/table-subjects/type/:id' element={<LayoutComp />}/>



              <react_router_dom_1.Route path='/test-answers-exams' element={<FinalTestWithAnseComp />}/>
              <react_router_dom_1.Route path='*' element={<NotFound />}/>



            </react_router_dom_1.Routes>
          </>
            :
                <react_router_dom_1.Routes>
            <react_router_dom_1.Route path='/' element={<HomePage />}/>
            <react_router_dom_1.Route path='/login' element={<LoginComp />}/>
            <react_router_dom_1.Route path='/student' element={<StudentComp />}/>

            <react_router_dom_1.Route path='/exists-tests' element={<StudentExistsTestsComp />}/>
            <react_router_dom_1.Route path='/student-test-st' element={<StudentTestComp />}/>
            <react_router_dom_1.Route path='/write-new-test' element={<WriteTestComp />}/>
            <react_router_dom_1.Route path='*' element={<NotFoundSComp />}/>

          </react_router_dom_1.Routes>}

      {/* <Routes>
  
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginComp />} />
          <Route path='/student' element={<StudentComp />} />
  
          <Route path='/exists-tests' element={<StudentExistsTestsComp />} />
          <Route path='/student-test-st' element={<StudentTestComp />} />
          <Route path='/write-new-test' element={<WriteTestComp />} />
  
  
  
          <Route path='/admin' element={<LayoutComp />} />
  
  
  
          <Route path='/test-items' element={<TestComp />} />
          <Route path='/test' element={<FinalTestComp />} />
          <Route path='/new-test' element={<MakeTestComp />} />
  
          <Route path='/workspace' element={<LayoutComp />} />
  
          <Route path='/user-page' element={<LayoutComp />} />
          <Route path='/all-exams' element={<LayoutComp />} />
          <Route path='/exams/:id' element={<LayoutComp />} />
  
  
          <Route path='/test-answers-exams' element={<FinalTestWithAnseComp />} />
  
  
  
        </Routes> */}

    </div>);
};
exports.default = App;
