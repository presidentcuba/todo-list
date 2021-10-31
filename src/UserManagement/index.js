import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'reactstrap';
import UserForm from './UserForm';
import UserList from './UserList';
export default class UserManagement1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users: [],
             selectedUser: {},
             isOpen: false,
        }
    }
    
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers = async () => {
        try {
            const result = await axios({
                method: "GET",
                
                url: "https://609ce52c04bffa001792d876.mockapi.io/Users",
            });
            this.setState({ users: result.data})
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
            this.handleToggleModal();

        } catch (error) {
            console.log(error);
        }
    }
    handleGetUser = async (userId) =>
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
    handleUpdateUser = async (user) => {
        const {id,...data} = user;
        try {
            await axios({
             method: "PUT",
             url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users/${id}`,
             data: user
            })
 
            this.fetchUsers(); 
 
        } catch (error) {
            console.log(error)
        }
    }
    handleDeleteUser = async (userId) => {
        try {
            await axios({
                method: "DELETE",
                url: `https://6056f9c1055dbd0017e844c9.mockapi.io/api/users/${userId}`
            });

            this.fetchUsers();

        } catch (error) {
            console.log(error);
        }
    }
    handleToggleModal = () => {
        this.setState(state => ({
            isOpen: !state.isOpen,
        }))
    }
    render() {
        return <div className="container">
            <h1 className="text-center">UserManagement</h1>
            <div className="text-right my-4">
                <Button onClick={this.handleToggleModal} color="primary">Add User</Button>
            </div>
            
            <UserList onDelete = {this.handleDeleteUser} onGetUser = {this.handleGetUser} users = {this.state.users} />
            <UserForm onToggle={this.handleToggleModal} isOpen={this.state.isOpen} onUpdateUser = {this.handleUpdateUser} user = {this.state.selectedUser} onAddUser = {this.handleAddUser} />
        </div>
    }
}
