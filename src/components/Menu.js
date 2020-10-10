import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import api from '../configs/api'

export default class Menu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      menuData: [] // [{ name: "iPhone", _id: "5cae0d4801e06de0c6399764" }]
    }
  }

  componentDidMount() {
    this.getMenuData()
  }

  getMenuData() {
    api.get('/product/category')
      .then(response => {
        this.setState({
          menuData: response.data
        })
      })
  }

  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12">
        <nav>
          <div id="menu" className="collapse navbar-collapse">
            <ul>
              {
                this.state.menuData.map((item, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={{
                        pathname: `/category/${item.name}.${item._id}`,
                      }}
                      className="menu-item"
                    >
                      {item.name}
                    </NavLink>
                  )
                })
              }
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
