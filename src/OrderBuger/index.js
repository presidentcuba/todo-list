import React from 'react'
import { useDispatch, useSelector } from "react-redux"

export default function OrderBuger() {

    const dispatch = useDispatch();
    const {data, total, menu} = useSelector(state => state.burger);


   const renderBread = () => {
       return Object.entries(data).map(([name, value], index) => {
           const arrBread = [];
           for (let i = 0; i < value; i++) {
               arrBread.push(<div key ={i} className={name}></div>);
           }
           return arrBread;
       })
   }
  
    const addDetail = (nameProduct, amount) => {
        const action = {
            type: "ADD_DETAIL",
            payload: {
                nameProduct,
                amount
            }

        };
        dispatch(action);
    }
    return (
      <div className="container">
          <h3 className="display-4 text-success text-center py-3">Bài Tập Burger</h3>
          <div className="row">
              <div className="col-7">
                    <h3 className="text-center">Bánh burger của bạn</h3>

                    <div className="breadTop"></div>
                              
                   {renderBread()}
                        
                    <div className="breadBottom"></div>
              </div>
              <div className="col-5">
                  <h3 className="text-center text-success">Chọn thức ăn</h3>
                  <table className="table">
                      <thead>
                          <tr>
                                <th>Thức ăn</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                
                          </tr>
                      </thead>
                    <tbody>
                        
                        {
                            Object.entries(menu).map(([nameProduct, value], index) => {
                                return (
                                    <tr key={index}>
                                        <td>{nameProduct}</td>
                                        <td>
                                            <button onClick={ () => addDetail(nameProduct, 1)} className="btn btn-success">+</button>
                                            <span className="mr-3 ml-3">
                                                {data[nameProduct]}
                                            </span>
                                            <button onClick={ () => addDetail(nameProduct, - 1)} className="btn btn-danger">-</button>
                                        </td>
                                        <td>${value * data[nameProduct]}</td>
                                    </tr>
                                )
                            })

                        }

                            <tr>
                                <td colSpan="2">Total</td>
                                <td>${total}</td>
                            </tr>
                    </tbody> 
                  
                   
                  </table>
              </div>
          </div>
      </div>
    )
}
