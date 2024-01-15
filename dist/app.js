"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const subject_routes_1 = __importDefault(require("./routes/subject-routes"));
const question_routes_1 = __importDefault(require("./routes/question-routes"));
const app = (0, express_1.default)();
const db = 'mongodb+srv://nersesyanvach80:iloveyoulikeiloveme@testexamcluster.oz3gzck.mongodb.net/testExamDB?retryWrites=true&w=majority';
mongoose_1.default
    .connect(db)
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('./frontend/build'));
app.use(subject_routes_1.default);
app.use(question_routes_1.default);
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, './frontend/build', 'index.html'));
});
app.use((req, res) => {
    res.send('Sorry Something goes wrong');
});
app.listen(process.env.PORT || 3000);
