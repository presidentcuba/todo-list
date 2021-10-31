/**
 * action = {
 * type: "CHANGE_COLOR",
 * payLoad: "green"
 * }
 */

function colorReducer(state = "red", action) {
    switch (action.type) {
        case "CHANGE_COLOR":
         {
            return action.payload;
         } 
         default:
            return state;

    }
}
export default colorReducer;