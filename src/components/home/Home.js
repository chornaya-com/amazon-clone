import React from "react";
import * as cn from "./Home.module.css";
import {Product} from "../product/Product";
import {StateContext} from "../StateProvider";

export function Home() {
    const [state] = React.useContext(StateContext);

    const productsJsx = state.products.map(product => (
        <Product {...product} key={product.id} />
    ));

    return (
        <div className={cn.home}>
            <img className={cn.homeImage}
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/AONT/CTATEST/AONT_S1_GWBleedingHero_HO_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB405036797_.jpg"
                 alt=""/>
            <div className={cn.homeRow}>
                {productsJsx}
            </div>
        </div>
    );
}