import React from 'react';
import {Link} from "react-router-dom";
import "./header.css"
import CartBlock from "../cart-block/CartBlock";
import logo from "./image 910.svg"
import Search from "../search/Search";



const Header = () => {

    return (
        <div className={'header'}>
            <div className="wrapper">
                <Link to={"/"} className={'header_store-title'}><img src={logo}/>Playnchill</Link>
            </div>
            <Search/>
            <div className="header_cart-btn-wrapper wrapper" style={{justifyContent:"flex-end"}}>
                <CartBlock/>
            </div>
        </div>
    );
};

export default Header;