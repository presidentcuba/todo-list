import React, { Component } from "react";
import Card from "./Card";
import Child from "./Child";
import Student from "./Student";
import SuperCard from "./SuperCard";

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
        {/*   props-name="value" */}
        <Child message="Cybersoft" />
        <Child message="FE62" />
        <Child message="Reactjs" />

        {/* Demo với class */}
        <h1>Props Class</h1>
        {this.state.students.map((student) => {
          return <Student key={student.id} student={student} />;
        })}

        {/* Demo với function */}
        <h1>Props function</h1>
        <div className="row">
          {this.state.students.map((student) => {
            return (
              <div key={student.id} className="col-sm-4">
                <Card student={student} />
              </div>
            );
          })}
        </div>

        {/* Demo với props children */}
        <h1>Sử dụng props children (students)</h1>
        <div className="row">
          {this.state.students.map((student) => {
            return (
              <div key={student.id} className="col-sm-4">
                <SuperCard
                  title="Student"
                  footer={() => (
                    <button className="btn btn-primary">Chi tiết</button>
                  )}
                >
                  <h3 className="text-secondary">{student.name}</h3>
                  <p className="text-success">Score: {student.score}</p>
                </SuperCard>
              </div>
            );
          })}
        </div>

        <h1>Sử dụng props children (products)</h1>
        <div className="row">
          {this.state.products.map((product) => {
            return (
              <div key={product.id} className="col-sm-4">
                <SuperCard title="Product" footer={() => (<button className="btn btn-primary">Mua</button>)}>
                  <h3 className="text-primary">{product.name}</h3>
                  <p className="text-success">Price: {product.price}</p>
                </SuperCard>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
