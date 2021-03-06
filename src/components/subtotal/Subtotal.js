import React from "react";
import * as cn from "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";
import {StateContext} from "../StateProvider";
import {getBasketTotal} from "../reducer";

export function Subtotal() {
    const [{basket}] = React.useContext(StateContext);

    const totalValue = getBasketTotal(basket);
    console.log(totalValue);
    return (
        <div className={cn.subtotal}>
            <CurrencyFormat
                renderText={(value) => {
                    return (
                        <>
                            <p>
                                Subtotal ({basket.length} items): <strong>{value}</strong>
                            </p>
                            <small className={cn.subtotalGift}>
                                <input type="checkbox"/> This order contains a gift.
                            </small>
                        </>
                    )
                }
                }
                decimalScale={2}
                value={totalValue}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
            <button>Proceed to checkout</button>
        </div>
    );
}