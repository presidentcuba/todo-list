import React, { Component } from 'react'
import axios from 'axios'
import UserList from './UserList';
import UserForm from './UserForm';
export default class UserManagement extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users: [],
             selectedUser: {},
        }
    }
    

    componentDidMount() {
        this.fetchUsers();
    }
    //Hàm lấy data
    fetchUsers = async () => {
        try {
            const result = await axios({
                method: "GET",
                url: "https://609ce52c04bffa001792d876.mockapi.io/Users",
            });
            
            this.setState({ users: result.data}); // Sau khi có kết quả result=> gán kết quả cho user

            //State thay đổi thì sẽ render lại 1 lần nữa

       } catch (error) {
           console.log(error);
       }
    }
    handleAddUser = async (user) => {
       try {
           await axios({
            method: "POST",
            url: "https://609ce52c04bffa001792d876.mockapi.io/Users",
            data: user
           })

           this.fetchUsers(); 

       } catch (error) {
           console.log(error)
       }
    }
    handleUpdateUser = async (user) => {
        const {id,...data} = user;
        try {
            await axios({
             method: "PUT",
             url: `https://609ce52c04bffa001792d876.mockapi.io/Users/${id}`,
             data: user
            })
 
            this.fetchUsers(); 
 
        } catch (error) {
            console.log(error)
        }
    }
    //Hàm nhận data => truyền xuống con
    handleDelete = async (userId) => {
        try {
            await axios({
                method: "DELETE",
                url: `https://609ce52c04bffa001792d876.mockapi.io/Users/${userId}`
            });

            this.fetchUsers();

        } catch (error) {
            console.log(error);
        }

    }
    handGetUser = async (userId) =>
    {
        try {
           const result = await axios({
                method: "GET",
                url: `https://609ce52c04bffa001792d876.mockapi.io/Users/${userId}`
            });
            this.setState({
                selectedUser: result.data,
            });
          

        } catch (error) {
            console.log(error);
        }

    }
    render() {
        return <div className="container">
            <h1 className="text-center">UserManagement</h1>
            <div className="text-right my-4">
                <button data-toggle="modal" data-target="#modelId"  className="btn btn-primary">Add User</button>
            </div>
            <UserList users={this.state.users} onDelete={this.handleDelete} onGetUser ={this.handGetUser} />
            <UserForm user={this.state.selectedUser} onAddUser ={this.handleAddUser} onUpdateUser={this.handleUpdateUser} />
        </div>
    }
}
