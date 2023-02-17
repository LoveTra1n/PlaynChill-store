import React from 'react';
import "./cart-menu.css"
import {useDispatch, useSelector} from "react-redux";
import deleteItem from "./../../../img/delete-xxl.png"
import {deleteCardItem} from "../../../redux/cardSlice";
import {Link} from "react-router-dom";

const CartMenu = () => {
    const {cardItems} = useSelector(state=>state.valueReducer)
    const dispatch = useDispatch()

    const deleteItems=(e)=>{
        e.stopPropagation()
        dispatch(deleteCardItem(cardItems.id))
    }

    return (
        <>
            <div className={"card-menu"}>
                <h1 style={{fontSize:"22px",marginBottom:"34"}}>Корзина</h1>

                {cardItems.map(game=>
                    <div className={"cardListItem"}>
                        <div className="left">
                            <img src={game.photo}/>

                            <div className="cardList__info">
                                <h1>{game.title}</h1>
                                <h2>{game.price}</h2>
                            </div>
                        </div>
                        <img className={"deleteIcon"} src={deleteItem} onClick={deleteItems}/>
                    </div>
                )}

                <Link to={`/order`}><p className={"linkCat"}>перейти в каталог</p></Link>
            </div>
        </>
    );
};

export default CartMenu;