import React from 'react';
import "./order-item.css"
import deleteI from "./Union.png"
import {useDispatch, useSelector} from "react-redux";
import {deleteCardItem} from "../../../redux/cardSlice";

const OrderItem = ({item}) => {
    const {cardItems}=useSelector(state=>state.valueReducer)
    const dispatch = useDispatch()
    const deleteItem = (e)=>{
        console.log(item.id)
        e.stopPropagation()
        dispatch(deleteCardItem(cardItems.id))
    }
    return (
        <div className={"order"}>
            <img src={item.photo}/>
            <div className="order-item__info">
                <div className="order-item__head">
                    <p>{item.title}</p>
                    <img onClick={deleteItem} src={deleteI}/>
                </div>
                <h1>{item.price}</h1>
                <div className="order-item__more">
                    <div className="order-item__more-region">
                        <p>Регион активации</p>
                        <p className={"p-white"}>Россия и страны СНГ</p>
                    </div>
                    <div className="order-item__more-service">
                        <p>Сервис активации</p>
                        <p className={"p-white"}>Steam</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OrderItem;