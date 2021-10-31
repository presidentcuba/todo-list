import React, {useState} from 'react'
import {Input, Button} from "reactstrap"
import {useDispatch} from "react-redux"
import {addTodo} from '../redux/actions/todosAction'
export default function AddTodo() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const handleChange = (evt) => {
        setTodo(evt.target.value);
    }

    const hanldeAddTodo = () => {
        // const action = {
        //     type: "ADD_TODO",
        //     payload: {
        //         todo,
        //     },
        // };

        dispatch(addTodo(todo));
    }
    return (
        
        <div className="w-50 d-flex mb-3">
            <Input value={todo} onChange={handleChange} className="mr-4"/>
            <Button onClick={hanldeAddTodo} color="primary">Add</Button>
        </div>
    )
}
