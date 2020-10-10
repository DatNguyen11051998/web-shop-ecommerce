import React, { Component } from 'react'
import ProductItem from '../components/ProductItem';
import api from '../configs/api'
export default class Search extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            productList: []
        }
    }

    
    componentDidMount() {
        this.getData()
    }
    

    getData() {
        let url = new URLSearchParams(this.props.location.search)
        let query = url.get("query")
        api.get('/product/search?q=' + query)
            .then(response => {
                this.setState({
                    productList: response.data
                })
            })       
    }

    render() {
        return (
            <div className="products">
                <div id="search-result">Kết quả tìm kiếm với sản phẩm <span>{console.log(this.state.productList.name)}</span></div>
                <div className="product-list card-deck">
                    {this.state.productList.map(item => {
                        return (
                            <ProductItem
                                key={item._id}
                                _id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        )
                    })}
                </div>
            </div>

        )
    }
}

