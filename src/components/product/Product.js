import React from "react";
import * as cn from "./Product.module.css";
import {useStateValue} from "../StateProvider";

export function Product({id, title, price, rating, image}) {
    const [, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                price,
                rating,
                image
            }
        })
    };

    return (
        <div className={cn.product}>
            <div className={cn.productInfo}>
                <p>{title}</p>
                <p className={cn.productPrice}>
                    <strong>£ {price}</strong>
                </p>
                <div className={cn.productRating}>
                    {Array(rating)
                        .fill('')
                        // eslint-disable-next-line
                        .map((_, i) => (<p className={cn.productRatingStar} key={i}>⭐</p>))}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}