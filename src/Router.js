import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Menu from './components/Menu'
import Home from './screens/Home'
import Product from './screens/Product'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Slider from './components/Slider'
import Category from './screens/Category'
import Cart from './components/Cart'
import Search from './screens/Search'
import Success from './components/Success'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Header} />
        <div id="body">
          <div className="container">
            <div className="row">
              <Menu />
            </div>
            <div className="row">
              <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                <Slider />
                
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/product/:name.:productId" component={Product} />
                  <Route path="/category/:name.:categoryId" component={Category} />
                  <Route exact path="/cart" component={Cart} />
                  <Route path="/cart/success" component={Success} />

                  <Route path="/search" component={Search} />
                </Switch>

              </div>
              <SideBar />
            </div>
          </div>
        </div>
      
        <Route path="/" component={Footer} />
      </BrowserRouter>
    )
  }
}
