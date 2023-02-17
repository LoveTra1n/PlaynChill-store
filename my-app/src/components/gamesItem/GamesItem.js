import React, {useEffect, useState} from 'react';
import "./game-item.css"
import ellipse from "./Ellipse 335.svg"
import {useDispatch, useSelector} from "react-redux";
import {setCardItems,deleteCardItem} from "../../redux/cardSlice";
import {Link} from "react-router-dom";



const GamesItem = ({games, active}) => {
    const {cardItems} = useSelector(state=>state.valueReducer)



    const [check, setCheck] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        for (let i = 0; i < cardItems.length; i++) {
            if(cardItems[i].id === games.id){
                setCheck(true)
            }
        }
    },)
    const handleClick = (e)=>{
        e.stopPropagation()
        dispatch(setCardItems(games))
        setCheck(true)
    }

    const deleteItems=(e)=>{
        setCheck(false)
        e.stopPropagation()
        dispatch(deleteCardItem(cardItems.id))
    }


    return (
        <div className={"card"}>
            <div className="card-main">
                <div className={active ? "best" : "none"}>хит продаж</div>
                <Link to={`/${games.id}`}><img className={"card-view"} src={games.photo}/></Link>
                {check?<button onClick={deleteItems}>удалить</button>:<button onClick={handleClick} className={"cart-button"}>в корзину</button>}

            </div>
            <h1>{games.price} ₽</h1>
            <h2>{games.title}</h2>
            <div className="categoriesItem">
                <img className={"ellipse"} src={ellipse}/>
                <h3>{games.categoryName}</h3>
            </div>
        </div>
    );
};

export default GamesItem;