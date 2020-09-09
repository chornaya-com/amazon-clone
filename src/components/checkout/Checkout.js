import React from "react";
import * as cn from "./Checkout.module.css";
import {useStateValue} from "../StateProvider";
import {CheckoutProduct} from "../checkoutProduct/CheckoutProduct";
import {Subtotal} from "../subtotal/Subtotal";

export function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className={cn.checkout}>
            <div className={cn.checkoutLeft}>
                <img
                    className={cn.checkoutAd}
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/Events/XCM_Manual_ORIGIN_1262125_1335636_UK_uk_uk_exclusives_week_sept_2_gb_en_3332080_1500x200_en_GB.jpg"
                    alt=""/>
                {basket.length === 0 ? (
                    <div className={cn.checkoutTitle}>
                        <h2>Shopping Basket</h2>
                        <h2>Your Shopping Basket is empty.</h2>
                        <p>You have no items in your basket. To buy one--or more--now, click "Add to basket" next to the
                            item.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className={cn.checkoutTitle}>Your Shopping Basket</h2>
                        {basket.map(item => (
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}/>
                            )
                        )}
                    </div>
                )}
            </div>
            {basket.length > 0 && (<div className={cn.checkoutRight}>
                <Subtotal/>
            </div>)}
        </div>

    );
}