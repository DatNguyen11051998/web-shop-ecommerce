import React, { Component } from 'react'
import { connect } from 'react-redux'
import {HOST} from '../configs/api'
import api from '../configs/api'
class Cart extends Component {
  constructor(props) {
     super(props);
    this.state={
      email:"",
      phone:"",
      address:"",
      name:"",

    }
  }
  onChangeHanddle=(event)=>{
    const {value,name}=event.target
    this.setState({
      [name]:value
    })
  }
  onSubmit=(e)=>{
    e.preventDefault()
    
    let data = {
      email:this.state.email,
      phone:this.state.phone,
      address:this.state.address,
      name:this.props.cart.map((item)=>{
        return item.id
      })

    }
    api.post("/product/order",data)
    .then(response=>{
      if (response.data.status == "oke"){
        this.props.history.push(`cart/success`)
        return
      }
      alert ("thong tin k hop le")
      console.log("fail",response.data)
    })
    .catch(
      alert ("Fail")
    )
  }
  render() {
    return (
      <div id="my-cart">
        <div className="row">
          <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">Thông tin sản phẩm</div>
          <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">Tùy chọn</div>
          <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
        </div>
        <form method="post">
          {this.props.cart.map((item, index) => {
            const { image, name, price, _id } = item
            return (
              <div className="cart-item row" key={index}>
                <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                  <img alt="/" src={`${HOST}/images/products/${image}`} />
                  <h4>{name}</h4>
                </div>
                <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                  <input type="number" id="quantity" className="form-control form-blue quantity" defaultValue={1} min={1} />
                </div>
                <div
                  className="cart-price col-lg-3 col-md-3 col-sm-12"
                  onClick={this.onDelete}
                ><b>32.990.000đ</b><a href="/">Xóa</a></div>
              </div>

            )
          })}


          <div className="row">
            <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
              <button id="update-cart" className="btn btn-success" type="submit" name="sbm">
                Cập nhật giỏ hàng
                            </button>
            </div>
            <div className="cart-total col-lg-2 col-md-2 col-sm-12"><b>Tổng cộng:</b></div>
            <div className="cart-price col-lg-3 col-md-3 col-sm-12"><b>88.970.000đ</b></div>
          </div>
        </form>
        <div id="customer">
          <form method="post">
            <div className="row">
              <div id="customer-name" className="col-lg-4 col-md-4 col-sm-12">
                <input 
                  placeholder="Họ và tên (bắt buộc)" 
                  type="text" 
                  name="name" 
                  className="form-control" 
                  required
                  onChange={(e)=>{console.log(e.target.value)}}
                  onChangeHanddle={this.onChangeHanddle} />
              </div>
              <div id="customer-phone" className="col-lg-4 col-md-4 col-sm-12">
                <input 
                  placeholder="Số điện thoại (bắt buộc)" 
                  type="text" 
                  name="phone" 
                  className="form-control" 
                  required
                  onChangeHanddle={this.onChangeHanddle} />
              </div>
              <div id="customer-mail" className="col-lg-4 col-md-4 col-sm-12">
                <input 
                  placeholder="Email (bắt buộc)" 
                  type="text" 
                  name="mail" 
                  className="form-control" 
                  required
                  onChangeHanddle={this.onChangeHanddle}
                   />
              </div>
              <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
                <input placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)" type="text" name="add" className="form-control" required />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="by-now col-lg-6 col-md-6 col-sm-12">
              <a href="#" onClick={this.onSubmit}>
                <b>Mua ngay</b>
                <span>Giao hàng tận nơi siêu tốc</span>
              </a>
            </div>
            <div className="by-now col-lg-6 col-md-6 col-sm-12">
              <a href="#">
                <b>Trả góp Online</b>
                <span>Vui lòng call (+84) 0988 550 553</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps)(Cart)