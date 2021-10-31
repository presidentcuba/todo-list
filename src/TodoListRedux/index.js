import React from 'react'
import {useSelector} from "react-redux"
import {ListGroup, ListGroupItem} from "reactstrap"
import AddTodo from './AddTodo';
import FilterTodo from './FilterTodo';

import TodoItem from "./TodoItem"
export default function ToDoList() {
    const {data, isLoading, filter} = useSelector((state) => state.todos);

    // Dựa vào giá trị filter lấy từ store để lọc ra những todo cần lấy
    const filterData = filter === "all" ? data: data.filter((item) => {
        if (filter === "completed") {
            return item.isCompleted === true;
        }
        if (filter === "uncompleted") {
            return item.isCompleted === false;
        }
    })

    return (
        <div className="container">
            <h1 className="text-primary">Todo List</h1>
            <AddTodo />
                <ListGroup>
                {filterData.map(todo => (
                    <TodoItem key={todo.id} todo = {todo} />
                ))}
            </ListGroup>
          <FilterTodo />
        </div>
    )
}
