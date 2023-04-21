import React, {useEffect, useState} from 'react';
import "./order.css"
import {useSelector} from "react-redux";
import OrderItem from "./order-items/OrderItem";
import cart from "./9716360.png"

const OrderingSite = () => {
    const {cardItems}=useSelector(state=>state.valueReducer)
    const {cardCounter}=useSelector(state=>state.valueReducer)
    const totalPrice = cardItems.reduce((acc,game)=> acc += game.price , 0)
    const [check,setCheck]=useState(false)

    const checkBox = ()=>{
        setCheck(!check)
    }


    return (
        <div className={"order-site"}>
            <h1>Корзина {cardCounter}</h1>
            <div className="order-menu">
                <div className="card-list">
                    {cardCounter === 0 ?
                        <div className={"cartEmpty"}>
                            <img className={"cart"} src={cart}/>
                            <h1>Корзина пустая 😕</h1>
                            </div>
                        : cardItems.map(item=>
                             <OrderItem item={item} key={item.id}/>)
                    }
                </div>
                <div className="order-tab">
                    <p>{cardCounter} товаров</p>
                    <h2>{totalPrice} ₽</h2>
                    {check?<button className={"active-button"}>оформить заказ</button>:<button>оформить заказ</button>}
                    <div className="accepting">
                        <input onChange={checkBox} type={"checkbox"}/>
                        <p>Покупая данный товар, я подтверждаю,что ознакомился и согласен с условиями и условия магазина</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderingSite;