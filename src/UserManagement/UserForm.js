import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input} from 'reactstrap';

export default class UserForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      values: {
          username: "",
          email: "",
          phone: "",
          fullName: "",
          address: "",
      },
    }
  }
  componentDidUpdate(preProps, prevState) {
    if(this.props.user.id && preProps.user.id !== this.props.user.id) {
        this.setState({
            values: this.props.user,
        })
    }
  }
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState(state =>{
      return {
        values: {
          ...state.values, [name]: value
        }
      }
     
    })
  }
  handleSubmit = () => {

    if(this.state.values.id) {
        this.props.onUpdateUser(this.state.values);
    } else {
        this.props.onAddUser(this.state.values);
    }
      this.setState({
          values: {
            username: "",
            email: "",
            phone: "",
            fullName: "",
            address: "",
        },
      })

  }
  
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.onToggle}>
        <ModalHeader>User Form</ModalHeader>
        <ModalBody>
        <FormGroup>
          <Label for="username">UserName</Label>
          <Input type="text" id="username" name="username" value={this.state.values.username} onChange={this.handleChange}></Input>

          <Label for="email">Email</Label>
          <Input type="text" id="email" name="email" value={this.state.values.email} onChange={this.handleChange}></Input>

          <Label for="phone">Phone</Label>
          <Input type="text" id="phone" name="phone" value={this.state.values.phone} onChange={this.handleChange}></Input>

          <Label for="fullName">FullName</Label>
          <Input type="text" id="fullName" name="fullName" value={this.state.values.fullName} onChange={this.handleChange}></Input>

          <Label for="address">Address</Label>
          <Input type="text" id="address" name="address" value={this.state.values.address} onChange={this.handleChange}></Input>
        </FormGroup>
      
              
        </ModalBody>
         <ModalFooter>
            <Button color="success" onClick={this.handleSubmit}>Thêm</Button>
            <Button color="danger" onClick={this.props.onToggle}>Đóng</Button>
         </ModalFooter>
             
      </Modal>
    );
  }
}
