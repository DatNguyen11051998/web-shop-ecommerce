import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import{connect} from 'react-redux'

 class Header extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      search: ''
    }
  }

  onInputChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value,
    })
  }

  submit = () => {
    this.props.history.push(`/search?query=${this.state.search}`)
  } 

  render() {
    return (
      <div id="header">
        <div className="container">
          <div className="row">
            <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
              <h1>
                <Link to="/">
                  <img alt="" className="img-fluid" src="/images/logo.png" />
                </Link>
              </h1>
            </div>
            <div id="search" className="col-lg-6 col-md-6 col-sm-12">
              <form className="form-inline" onSubmit={(e) => {e.preventDefault()}}>
                <input
                  className="form-control mt-3"
                  value={this.state.search}
                  onChange={this.onInputChange}
                  onKeyUp={(event) => {
                    if (event.keyCode === 13) this.submit()
                  }}
                  name="search"
                  placeholder="Tìm kiếm"
                />
                <button className="btn btn-danger mt-3" onClick={this.submit}>
                  Tìm kiếm
                </button>
              </form>
            </div>
            <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
              <Link className="mt-4 mr-2" to="/cart">
                giỏ hàng
              </Link>
              <span className="mt-3">{this.props.cart.length}</span>
            </div>
          </div>
        </div>

        <button
          className="navbar-toggler navbar-light"
          type="button"
          data-toggle="collapse"
          data-target="#menu"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cart:state.cart,
  }
}

 export default connect(mapStateToProps)(Header)