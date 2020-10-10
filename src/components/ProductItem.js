import React from 'react'
import { Link } from 'react-router-dom'

import { HOST } from '../configs/api'

const ProductItem = (props) => {
    const { image, name, price, _id } = props

    return (
        <div className="product-item card text-center">
            <Link to={`/product/${name}.${_id}`}>
                <img alt="" src={`${HOST}/images/products/${image}`} />
            </Link>
            <h4>
                <a href="/">{name}</a>
            </h4>
            <p>
                Giá Bán: <span>{price.toLocaleString()}đ</span>
            </p>
        </div>
    )
}

export default ProductItem