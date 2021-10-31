import React, { Component } from "react";

export default class UserForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //Lưu trữ giá trị của các ô input
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
      console.log(this.props.user.id);
        if(this.props.user.id && preProps.user.id !== this.props.user.id) {
         
            this.setState({
                values: this.props.user,
            })
        }
    }
    handleChange = (event)=> {
        // this.setState({
        //     values: {
        //         username: event.target.value, // sẽ bị mất những key khác
        //     }
        // });
        const {name, value} = event.target;
        this.setState(state => {
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
    console.log(this.props.user);
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">User Form</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="username" /> Username
                  <input
                    type="text" value={this.state.values.username}
                    onChange={this.handleChange}
                    name = "username"
                    id
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username" /> Email
                  <input
                    type="text" value={this.state.values.email}
                    onChange={this.handleChange}
                    name ="email"
                    id
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username" /> FullName
                  <input
                    type="text" value={this.state.values.fullName}
                    onChange={this.handleChange}
                    name ="fullName"
                    id
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username" /> Phone
                  <input
                    type="text" value={this.state.values.phone}
                    onChange={this.handleChange}
                    name ="phone"
                    id
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username" /> Address
                  <input
                    type="text" value={this.state.values.address}
                    onChange={this.handleChange}
                    name ="address"
                    id
                    className="form-control"
                    placeholder
                    aria-describedby="helpId"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" onClick={this.handleSubmit} className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
