import React, { Component } from 'react'
import Card from './Card';
import Child from './Child';
import Student from './Student';
import SuperCard from './SupperCard';

export default class Parent extends Component {
   
    constructor(props) {
        super(props);
    
        this.state = {
          students: [
            { id: 1, name: "Dan", age: 25, score: 8.5 },
            { id: 2, name: "Hieu", age: 26, score: 6.5 },
            { id: 3, name: "Duy", age: 24, score: 9 },
          ],
          products: [
            { id: 1, name: "Iphone 12", price: 30000000 },
            { id: 2, name: "Samsung S21", price: 25000000 },
            { id: 3, name: "Xiaomi Mi 11", price: 20000000 },
          ],
        };
      }
    render() {
        return (
            <div className="container">
                <h1>DEMO CHILD</h1>
                   <Child message="hello" />
                   <Child message="Duong van tinh" />
                   <Child message="fe 62" />
                   
                <h1>DEMO STUDENT</h1>
                {this.state.students.map((student) => {
                    return <Student student={student} />
                }) }
                <h1>DEMO CARD</h1> 
                <div className="row">
                    {this.state.students.map((student) => {
                        return (
                            <div key={student.id} className="col-sm-4">
                                <Card student = {student} />
                            </div>
                        )
                    })} 
                </div> 

                <h1>Sử dụng props children (products)</h1>
                <div className="row">
                {this.state.products.map((product) => {
                    return (
                    <div key={product.id} className="col-sm-4">
                      
                        <SuperCard
                        title="Product"
                        footer={() => (
                            <button className="btn btn-primary">Mua</button>
                        )}
                        >
                        <h3 className="text-primary">{product.name}</h3>
                        <p className="text-success">Price: {product.price}</p>
                        </SuperCard>
                    </div>
                    );
                })}
                </div>
                
            </div>
        )
    }
}
