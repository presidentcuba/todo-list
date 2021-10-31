// Reducer nhận vào 2 tham số
// Tham số thứ nhất là state của nó
// Tham số thứ 2 là action để thay đổi state của nó
// action là 1 obj và có 1 property bắt buộc là type
// Type là hành động để reducer biết cần phải thay đổi state như thế nào
// Ex: action = {type: "TANG_BIEN_DEM"}
function countReducer(state = 0, action) {
  console.log(action);
  switch (action.type) {
    case "TANG_BIEN_DEM":
      return state + 1;
    case "GIAM_BIEN_DEM":
      return state - 1;
    default:
      return state;
  }
}

export default countReducer;