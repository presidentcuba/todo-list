import React, { Component } from 'react'

export default class UserList extends Component {
    render() {
        return (
            
            <div className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>FullName</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map(user => (
                        <tr key = {user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.fullName}</td>
                            <td>{user.address}</td>
                            <td>
                                <button onClick={() => this.props.onGetUser(user.id)} data-toggle="modal" data-target="#modelId" className="btn btn-success">Cập nhật</button>
                                <button onClick={() => this.props.onDelete(user.id)} className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </div>
        )
    }
}
