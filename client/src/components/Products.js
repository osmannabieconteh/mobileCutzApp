import React, { Component } from 'react'

export default class Products extends Component {
    render() {

        return (
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">About</a>
            <a class="dropdown-item active" href="#">Basic Hair Products </a>
            <a class="dropdown-item" href="#">Basic Tools</a>
          </div>       
        )
    }
}
