import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        const {message} = this.props
        return (
            <div>
                <p>message: {message} </p>
            </div>
        )
    }
}
