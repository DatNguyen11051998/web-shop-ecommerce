import React, { Component } from 'react'

import api from '../configs/api'

import ProductItem from '../components/ProductItem'

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      featuredProducts: [],
      newProducts: [],
    }
  }

  componentDidMount() {
    // this.cach1()
    this.cach2()

  }

  cach1() {
    let count = 0
    let featuredProducts
    let newProducts

    api.get('/product/featured')
      .then((response) => {
        featuredProducts = response.data.slice(0, 6)
        count++
        if (count === 2) done()
      })

    api.get('/product/new')
      .then(response => {
        newProducts = response.data.slice(0, 6)
        count++
        if (count === 2) done()
      })

    const done = () => {
      this.setState({
        ...this.state,
        featuredProducts,
        newProducts,
      })
    }
  }

  async cach2() {
    let response = await Promise.all([
      api.get('/product/featured'),
      api.get('/product/new'),
    ])
    
    this.setState({
      ...this.state,
      featuredProducts: response[0].data,
      newProducts: response[1].data,
    })
  }

  render() {
    return (
      <>
        <div className="products">
          <h3>Sản phẩm nổi bật</h3>
          <div className="product-list card-deck">
            {
              this.state.featuredProducts.map(item =>
                <ProductItem
                  key={item._id}
                  _id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              )
            }
          </div>
        </div>
        <div className="products">
          <h3>Sản phẩm mới</h3>
          <div className="product-list card-deck">
            {
              this.state.newProducts.map(item =>
                <ProductItem
                  key={item._id}
                  _id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              )
            }
          </div>
        </div>
      </>
    )
  }
}