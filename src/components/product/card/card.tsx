import React from "react";
import {Link} from "react-router-dom";
import Rating from "../../rating/rating";

interface Product {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    rating: number;
    price: number;
}

interface Props {
    product: Product
}

export default function ProductCard({product}: Props) {
    return (
        <div style={{flex: "0 0 33.333333%", maxWidth:"33.333333%"}}>
            <Link to={`../product/${product.id}`}>
                <div className="product-card">
                    <div className="title">
                        {product.title}
                    </div>
                    <div className="image">
                        <img src={product.thumbnail} alt={product.title}/>
                    </div>
                    <div className="body">
                        <div className="description">
                            {product.description}
                        </div>
                        <div className="rating">
                            <Rating value={product.rating}/>
                        </div>
                        <p className="price">
                            ${product.price}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}