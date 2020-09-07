import React from "react";
import * as cn from "./Header.module.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import classnames from "classnames";

export function Header() {
    return <nav className={cn.header}>
        <Link to="/">
            <img
                className={cn.headerLogo}
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""/>
        </Link>
        <div className={cn.headerSearch}>
            <input className={cn.headerSearchInput} type="text"/>
            <SearchIcon className={cn.headerSearchIcon}/>
        </div>
        <div className={cn.headerNav}>
            <Link className={cn.headerLink} to="/login">
                <div className={cn.headerOption}>
                    <span>Hello,</span>
                    <span className={cn.lineTwo}>Sign In</span>
                </div>
            </Link>
            <Link className={cn.headerLink} to="/">
                <div className={cn.headerOption}>
                    <span>Returns</span>
                    <span className={cn.lineTwo}>& Orders</span>
                </div>
            </Link>
            <Link className={cn.headerLink} to="/">
                <div className={cn.headerOption}>
                    <span>Try</span>
                    <span className={cn.lineTwo}>Prime</span>
                </div>
            </Link>
            <Link className={cn.headerLink} to="/checkout">
                <div className={cn.headerOptionBasket}>
                    <ShoppingBasketIcon/>
                    <span className={classnames(cn.lineTwo, cn.basketCount)}>0</span>
                </div>
            </Link>
        </div>
    </nav>

}