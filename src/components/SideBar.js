import React, { Component } from 'react'

export default class SideBar extends Component {
  render() {
    return (
      <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">
        <div id="banner">
          <div className="banner-item">
            <a href="/">
              <img alt="" className="img-fluid" src="/images/banner-1.png" />
            </a>
          </div>
          <div className="banner-item">
            <a href="/">
              <img alt="" className="img-fluid" src="/images/banner-2.png" />
            </a>
          </div>
          <div className="banner-item">
            <a href="/">
              <img alt="" className="img-fluid" src="/images/banner-3.png" />
            </a>
          </div>
          <div className="banner-item">
            <a href="/">
              <img alt="" className="img-fluid" src="/images/banner-4.png" />
            </a>
          </div>
          <div className="banner-item">
            <a href="/">
              <img alt="" className="img-fluid" src="/images/banner-5.png" />
            </a>
          </div>
          <div className="banner-item">
            <a href="/">
              <img alt="" className="img-fluid" src="/images/banner-6.png" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
