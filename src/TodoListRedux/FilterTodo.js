import React from 'react'
import {Button} from "reactstrap"
import {useDispatch} from "react-redux"
import {filterTodo} from '../redux/actions/todosAction'
export default function FilterTodo() {
    const dispatch = useDispatch();
    const handleFilterTodo = status => {
        // const action = {
        //     type: "FILTER_TODO",
        //     payload: {
        //         status,
        //     },
        // };
        dispatch(filterTodo(status));
    }
    return (
        <div className="d-flex mt-4">
            <Button onClick={ () => handleFilterTodo("all")} color="primary" className="mr-4">All</Button>
            <Button onClick={ () => handleFilterTodo("completed")} color="success" className="mr-4">Completed</Button>
            <Button onClick={ () => handleFilterTodo("uncompleted")} color="warning" >Uncompleted</Button>
        </div>
    )
}
