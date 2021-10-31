import {ADD_TODO, CHANGE_TODO, DELETE_TODO,FILTER_TODO} from "../constants/todosContant1";
export const filterTodo = (status) => {
    return {
        type: FILTER_TODO,
        payload: {
            status,
        },
    };
};
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            todo,
        },
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id,
        },
    };
};
export const changeTodo = (id) => {
    return {
        type: CHANGE_TODO,
        payload: {
            id,
        },
    };
};