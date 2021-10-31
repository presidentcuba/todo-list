// Obj chứa các state mặc định của reducer
import {ADD_TODO, CHANGE_STATUS, DELETE_TODO,FILTER_TODO} from "../constants/todosConstant";
const initialState = {
    data: [
        {id: 1, name: "Play game", isCompleted: false},
        {id: 2, name: "Do Homework", isCompleted: false}
    ],
    filter: "all",
    isLoading: false,
}


function todosReducer(state = initialState, action)
{
    switch (action.type) {
       case DELETE_TODO: {

        const {id} = action.payload; //Lấy ra id cần xóa

        // Cách 1: dùng slice
        // const data = [...state.data]; // clone arr data
        // const index = data.findIndex((item) => item.id === id);
        // data.slice(index, 1);
        // return {...state, data}; // clone
   
        //cách 2: dungg filter

        const data = state.data.filter(item => item.id !== id); //filer return về 1 arr mới
        return {...state, data};
       }
       case CHANGE_STATUS: {
            const { id } = action.payload; // Lấy ra id cần thay đổi status
           // Cách 1: 
        //    const data = [...state.data] //clone ar data
        //    const index = data.findIndex(item => item.id === id);
        //    data[index].isCompleted = !data[index].isCompleted;
        //    return {...state, data};

        //Cách 2:

        const data = state.data.map(item => {
            if(item.id === id) {
                return {...item, isCompleted: !item.isCompleted};
            }
            return item;
        });

        return {...state, data}; // clone obj state

       }
        case ADD_TODO: {
            const id = Math.floor(Math.random() * 100);
            const todo = { name: action.payload.todo, isCompleted: false,id};
            const data = [...state.data, todo];
            return {...state, data};
        } 
        case FILTER_TODO: {
            const {status} = action.payload;
            return {...state, filter: status};
        }
        
    default:
        return state;
    }
}
export default todosReducer;