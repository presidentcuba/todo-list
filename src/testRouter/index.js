import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'

export default function TestRouter(props) {

    const history = useHistory();
    console.log(history);

    const location = useLocation();
    console.log(location);
    const params = useParams();
    console.log(params);

    const goToCourses = () => {
        history.push("/courses");
    }

    const goTodoList = () => {
        history.replace("/todo-list")
    };
    return (
        <div>
            <button onClick={goToCourses}>goToCourses</button>
            <button onClick={goTodoList}>goTodoList1</button>
        </div>
    )
}
