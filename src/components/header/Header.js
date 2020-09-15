import React from "react";
import * as cn from "./Header.module.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import classnames from "classnames";
import {StateContext} from "../StateProvider";
import {auth} from "../firebase";

export function Header() {
    const [{basket, user, searchText}, dispatch] = React.useContext(StateContext);

    const updateSearch = (event) => {
        dispatch({
            type: 'SEARCH',
            searchText: event.target.value,
        });
    };

    const login = async () => {
        if (user) {
            await auth.signOut();
        }
    }
    return (
        <nav className={cn.header}>
            <Link to="/">
                <img
                    className={cn.headerLogo}
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""/>
            </Link>
            <div className={cn.headerSearch}>
                <input
                    value={searchText}
                    className={cn.headerSearchInput}
                    type="text"
                    onChange={updateSearch}
                />
                <SearchIcon className={cn.headerSearchIcon}/>
            </div>
            <div className={cn.headerNav}>
                <Link className={cn.headerLink} to={!user ? "/login" : "/"}>
                    <div onClick={login} className={cn.headerOption}>
                        <span>Hello, {user?.email}</span>
                        <span className={cn.lineTwo}>{user ? 'Sign Out' : 'Sign In'}</span>
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
                        <span className={classnames(cn.lineTwo, cn.basketCount)}>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}