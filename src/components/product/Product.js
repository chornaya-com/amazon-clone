import React from "react";
import * as cn from "./Product.module.css";

export function Product({title, price, rating, image}) {
    return (
        <div className={cn.product}>
            <div className={cn.productInfo}>
                <p>{title}</p>
                <p className={cn.productPrice}>
                    <strong>£ {price}</strong>
                </p>
                <div className={cn.productRating}>
                    {Array(rating)
                        .fill()
                        .map((_) => (<p>⭐ </p>))}
                </div>
            </div>
            <img src={image} alt=""/>
            <button>Add to basket</button>
        </div>
    );
}