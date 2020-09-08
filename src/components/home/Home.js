import React from "react";
import * as cn from "./Home.module.css";
import {Product} from "../product/Product";

export function Home() {
    return (
        <div className={cn.home}>
            <img className={cn.homeImage}
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/AONT/CTATEST/AONT_S1_GWBleedingHero_HO_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB405036797_.jpg"
                 alt=""/>
            <div className={cn.homeRow}>
                <Product id={111}
                         title={"7 Ways: Easy Ideas for Every Day of the Week Hardcover – 20 Aug. 2020"}
                         price={11.99}
                         rating={5}
                         image={"https://images-na.ssl-images-amazon.com/images/I/41WaY4MSksL._SX387_BO1,204,203,200_.jpg"}/>
                <Product id={222}
                         title={"The Thursday Murder Club Hardcover – 3 Sept. 2020"}
                         price={11.99}
                         rating={4}
                         image={"https://images-na.ssl-images-amazon.com/images/I/51AI72eFWbL._SX323_BO1,204,203,200_.jpg"}/>
            </div>
            <div className={cn.homeRow}>
                <Product id={333}
                         title={"Downton Abbey The Movie [DVD] [2019]"}
                         price={9.99}
                         rating={5}
                         image={"https://images-na.ssl-images-amazon.com/images/I/814Rg4bvu0L._AC_SY679_.jpg"}/>
                <Product id={444}
                         title={"Sh**ged. Married. Annoyed. Hardcover – 3 Sept. 2020"}
                         price={11.72}
                         rating={4}
                         image={"https://images-na.ssl-images-amazon.com/images/I/51uUi+C8V6L._SY344_BO1,204,203,200_.jpg"}/>
                <Product id={555}
                         title={"1917 (DVD Format) [2019]"}
                         price={9.99}
                         rating={5}
                         image={"https://images-na.ssl-images-amazon.com/images/I/81zcfMMyAnL._AC_SY679_.jpg"}/>
            </div>
            <div className={cn.homeRow}>
                <Product id={666}
                         title={"Clementoni 39411 Clementoni-39411-Impossible Puzzle-Marvel-1000 Pieces, Multi-Colour"}
                         price={10.48}
                         rating={4}
                         image={"https://images-na.ssl-images-amazon.com/images/I/91381CdSItL._AC_SX679_.jpg"}/>
            </div>
        </div>
    );
}