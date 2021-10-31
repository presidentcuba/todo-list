// Move action ra 1 file riêng để có thể tái sử dụng và dễ chính sửa

import {ADD_TODO, CHANGE_STATUS, DELETE_TODO,FILTER_TODO} from "../constants/todosConstant";
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

export const changeStatus = (id) => {
    return {
        type: CHANGE_STATUS,
        payload: {
            id,
        },
    };
};