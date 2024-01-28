"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const TableSubjectComp = () => {
    const examTypeArr = [
        {
            id: 0,
            name: 'Միասնական քննություն'
        },
        {
            id: 1,
            name: 'Միջանկյալ քննություն'
        }
    ];
    return (<div>
            table subjects

            {examTypeArr.map((val) => {
            return (<div>
                            <react_router_dom_1.NavLink to={`/table-subjects/type/${val.name}`}>
                                {val.name}
                            </react_router_dom_1.NavLink>
                        </div>);
        })}

        </div>);
};
exports.default = TableSubjectComp;
