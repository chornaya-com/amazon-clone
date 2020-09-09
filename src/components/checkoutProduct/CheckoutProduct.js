import React from "react";
import * as cn from "./CheckoutProduct.module.css";
import {useStateValue} from "../StateProvider";

export function CheckoutProduct({id, title, price, image, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        });
    };

    return (
        <div className={cn.checkoutProduct}>
            <img src={image} alt=""/>
            <div className={cn.checkoutProductInfo}>
                <p className={cn.checkoutProductTitle}>{title}</p>
                <p className={cn.checkoutProductPrice}>
                    <strong>£ {price}</strong>
                </p>
                <div className={cn.checkoutProductRating}>
                    {Array(rating)
                        .fill('')
                        .map((_, i) => (<p className={cn.checkoutProductRatingStar} key={i}>⭐</p>))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}