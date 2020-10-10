import React, { Component } from 'react'

import api from '../configs/api'
import ProductItem from '../components/ProductItem';

export default class Category extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: []
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true
  // }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
      this.getProductData(this.props.match.params.categoryId)
    }
  }

  componentDidMount() {
    this.getProductData(this.props.match.params.categoryId)
  }

  getProductData(_id) {
    api.get('/product/category/' + _id)
      .then(response => {
        this.setState({ data: response.data })
      })
  }

  render() {
    const { name } = this.props.match.params

    return (
      <>
        <div className="products">
          <h3>{name} (hiện có {this.state.data.length} sản phẩm)</h3>
          <div className="product-list card-deck">
            {this.state.data.map((item, index) =>
              <ProductItem
                key={index}
                _id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            )}
          </div>
        </div>
      </>
    )
  }
}
