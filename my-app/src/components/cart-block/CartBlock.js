import React, {useState} from 'react';
import './cart-block.css'
import cart from "../header/Vector.svg"
import {useSelector} from "react-redux";
import CartMenu from "./cart-menu/CartMenu";
import {deleteCardItem} from "../../redux/cardSlice";
import {Link} from "react-router-dom";

const CartBlock = () => {
    const [popup,setPopup] = useState(false)
    const {cardItems} = useSelector(state=>state.valueReducer)
    const totalPrice = cardItems.reduce((acc,game)=> acc += game.price , 0)

    const cartOn = ()=>{
        setPopup(!popup)
    }

    return (
        <>
            <div className={"cartList"}>
                <div onClick={cartOn} className={'cart-block'}>
                    <h1>{totalPrice} рублей</h1>
                    <img src={cart}/>
                </div>
                {popup?<CartMenu/>:<div className={""}></div>}

            </div>
        </>

    );
};

export default CartBlock;