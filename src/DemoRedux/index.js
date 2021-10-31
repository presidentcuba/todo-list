import React from 'react'
// Lấy data từ store và trả về cho sử dụng => userSelector
// Đẩy action vào store để thay đổi state => useDidpatch
import { useSelector, useDispatch } from "react-redux"

export default function DemoRedux() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    const color = useSelector((state) => state.color);

    const tangBienDem = () => {
        // Để thay đổi state trong store ta cần gọi tới 1 action

        const action = {
            type: "TANG_BIEN_DEM",
        }

        // Đẩy action vào store để thay đổi state
        // useDispatch(action);
        dispatch(action);
    }

    const changeColor = (evt) => {
        const action = {
            type: "CHANGE_COLOR",
            payload: evt.target.value
        }
        dispatch(action);
    }
    return <div>
        <h1>Demo Redux</h1>
        <p>Count: {count}</p>
        <button onClick={tangBienDem}>Tăng Biến Đếm</button>

        <h1>Demo ChangeColor</h1>
        <p>Color: {color}</p>
        <select value={color} onChange={changeColor}>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
        </select>

       
    </div>
}
