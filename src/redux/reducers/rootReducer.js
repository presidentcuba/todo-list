// Reducer tổng quản lý tất cả các reducer con

import { combineReducers} from "redux"
// Import các reducer con
import countReducer from './countReducer';
import colorReducer from "./colorReducer";
import todosReducer from "./todosReducer";
import coursesReducer from "./coursesReducer";
import burgerReducer from "./burgerReducer";
import khoaHocReducer from "./khoaHocReducer";
import testApiReducer from "./infoReducer";
const rootReducer = combineReducers({
    // đây là nơi khai báo các reducer con
    count: countReducer,
    color: colorReducer,
    todos: todosReducer,
    courses: coursesReducer,
    burger: burgerReducer,
    khoaHoc: khoaHocReducer,
    info: testApiReducer,

});

export default rootReducer;