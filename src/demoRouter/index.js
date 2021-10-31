import React from 'react'
import { useHistory, useLocation, useParams} from 'react-router-dom'

export default function DemoRouter(props) {
    // Khi component không được cung cấp các props của router nhưng vẫn mốn sử dụng
    const history = useHistory();
    console.log(history);

    const location = useLocation();
    console.log(location);
    const params = useParams();
    console.log(params);



    // Khi component có cung cấp cho các props của router
    // console.log("Demo Propss:", props);

    // // Các props mặc định đc cungc cấp khi component được gắn trong Route
    // const {history, location, match} = props;
    // History: cung cấp các hàm để điều hướng routing
    // Location: cung cấp pathname là url của component
    // query param: ?page=1&sort=asc
    // match: cung cấp giá trị động trên url
    // params: /movie/:movieId

    const goToCourses = () => {
        // Điều hướng tới trang courses nhưng vẫn giữ lịch sử của trang hiện tại
         history.push("/baucua");

    };

    const goToTodoList = () => {
        // Điều hướng tới trang và thay thế lịch sử của trang hiện tại
         history.replace("/todo-list");

    };
    return  <div>
        <button onClick={goToCourses}>Goto Courses</button>

        <button onClick={goToTodoList}>Goto TodoList</button>
    </div>
}
