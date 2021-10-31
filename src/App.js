// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";
// import Content from "./components/Content";

import BauCua from "./BauCua";
import DemoHook from "./hooks/DemoHook";
import DemoHook1 from "./hook/DemoHook1";
import Lifecycle from "./hooks/Lifecycle";
// import Lifecycle from "./Lifecycle"
import Baitap1 from "./Baitap1";
import Baitap2 from "./Baitap2";
import Baitap3 from "./Baitap3";
import UserManagement from "./BaitapUserManagement";
import UserManagement1 from "./UserManagement";
import ConditionClass from "./Condition";
import DataBindingClass from "./DataBinding/DataBindingClass";
import DataBindingFunction from "./DataBinding/DataBindingFunction";
import EventClass from "./HandleEvent";
// import Lifecycle from "./Lifecycle";
import ListsClass from "./Lists";
// import Parent from "./Props/Parent";
import Parent from "./Ontapprops/Parent";
import StateClass from "./State";
import Baitap3Again from "./Baitap3Again";
import State from "./hooks/State";
import BauCua1 from "./Baucua1";
import BauCua2 from "./BauCua2";
import DemoRedux from "./DemoRedux";
import ToDoList from "./TodoListRedux";
import QuanLyKhoaHoc from "./QuanLyKhoaHoc";
import TestFE from "./TestFE";
import OrderBuger from "./OrderBuger";

// JSX - Javascript XML => Kết hợp javascript với HTML lại với nhau

// Set up react-router

import {BrowserRouter, Route, Switch} from "react-router-dom"
import DemoRouter from "./demoRouter";
// import NestedRouter from "./demoRouter/NestedRouter";
import NestedRouter from "./testRouter/NestedRouter"
import TestRouter from "./testRouter"
import QuanLyKhoaHoc1 from "./QuanLyKhoaHoc1";
import TestCallApi from "./TestCallApi";
// Component App
function App() {
  return (
    // <QuanLyKhoaHoc />

    // <QuanLyKhoaHoc1 />
    <BrowserRouter>
    {/**
     * Switch: Chọn cái đầu tiên khớp với url để render ra
     */}
     
        <Switch>
        {/**
         * path: so sánh path với url để quyết định component có được hiển thị ra hay khônng
         * exact: Thông thường path "/" sẽ khớp với tất cả url, để khắc phục ta thêm exact lúc này nó sẽ so dánh url khớp 100% mới hiển thi ra component
         */}
         {/* <Route path="/" exact>
            <TestRouter />
          </Route>  */}
          {/* <Route path="/" exact component={DemoRouter} />

          <Route path="/phim/:movieId" exact component={DemoRouter} /> */}

          {/**Demo Nested Router */}
           {/* <Route path="/topics">
              <NestedRouter />
          </Route> */}

         {/**Cách 1: dùng props component */}
        {/* <Route path="/courses" component={QuanLyKhoaHoc} /> */}

        {/**Cách 2: dùn children */}
        {/* <Route path="/baucua">
            <BauCua />
        </Route>
        
        <Route path="/todo-list">
            <ToDoList />
        </Route> */}
         {/**Dùng reder */}
         <Route path="/">
          <ToDoList />
         </Route>
        {/* <Route path="/todo-list" render = { (routerProps) =>    {return <ToDoList {...routerProps} />}}/> */}


        {/**Để paga not found ở dưới cùng, đảm bảo đi qua tất cả các route khác nhưng ko tìm thấy route */}
        <Route>
          <div>Page not found</div>
        </Route>
      </Switch>
    </BrowserRouter>      
    
  );
}

export default App;
