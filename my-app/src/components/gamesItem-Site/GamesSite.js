import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {deleteCardItem, getUserInfo, setCardItems} from "../../redux/cardSlice";
import "./games-item.css"
import {Button} from "react-bootstrap";
import garant from "./Group 5691.png"
import GamesItem from "../gamesItem/GamesItem";
import {map} from "react-bootstrap/ElementChildren";

const GamesSite = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUserInfo(id))
    },[])

    const {user}=useSelector(state=>state.valueReducer)
    const [sumProc,setSumProc]= useState(0)
    const [price,setPrice]= useState(0)
    const {cardItems} = useSelector(state=>state.valueReducer)
    const [checked,setChecked]= useState(false)

    useEffect(()=>{
        for (let i = 0; i < cardItems.length; i++) {
            if(cardItems[i].id === user.id){
                setChecked(true)
            }
        }
    },)

    useEffect(()=>{
            setSumProc(user.promotion)
            const j = user.price / 100 * sumProc
            const x = user.price - j
            setPrice(x)
    },)

    const handleClick = (e)=>{
        console.log(user.id)
        e.stopPropagation()
        dispatch(setCardItems(user))
    }
    const deleteItems=(e)=>{
        setChecked(false)
        e.stopPropagation()
        dispatch(deleteCardItem(cardItems.id))
    }


    return (
        <div className={"gameSite-Info"}>
                <div className="game-preview">
                    <div className="game-photo">
                        <img src={user.photo}/>
                    </div>
                    <div className="game-info">
                        <h1>Купить  {user.title}</h1>
                        {sumProc === 0 ?
                            <div className="price">
                                <h1>{user.price} ₽</h1>
                            </div>
                            :
                            <div className="price">
                                <h1>{price} ₽</h1>
                                <h1 className={"green"}>-{sumProc}%</h1>
                                <h1 className={"old-price"}>{user.price} ₽</h1>
                            </div>
                        }
                        <div className="buttons">
                            <Link to={"/order"}><Button className={"cart-path"}>оформить</Button></Link>
                            {checked ? <Button onClick={deleteItems} className={"more-btn"}>удалить</Button> : <Button onClick={handleClick} className={"more-btn"}>в корзину</Button>}
                        </div>
                        <div className="more-info">
                            <div className="genre">
                                <p>Жанр</p>
                                <h1>{user.genre}</h1>
                            </div><div className="genre">
                            <p>Платформа</p>
                            <h1>Steam</h1>
                        </div><div className="genre">
                            <p>Регионы активации</p>
                            <h1>Страны СНГ</h1>
                        </div><div className="genre">
                            <p>тип активации</p>
                            <h1>Учетная запись</h1>
                        </div>
                        </div>
                        <div className="garant">
                            <div className="delivery">Моментальная доставка</div>
                            <div className="garant-banner"><img src={garant}/>Гарантия качества</div>
                        </div>
                    </div>
                </div>
            <div className="description">
                <div className="description-item"><h1>Описание товара</h1></div>
                <div className="description-text">
                    <h1 style={{fontWeight:"bold"}}>Полное погружение {user.title}</h1>
                    <p style={{color:"#9D9AA6"}}>Признайтесь, вы ведь тоже сразу после анонса нового поколения VR-шлемов захотели увидеть на них TES V? Тодд Говард вот точно захотел и, как это обычно бывает, воплотил желание в жизнь. Очередной Skyrim предлагает написать историю Довакина по-новому — буквально его же руками. Игра поддерживает все современные устройства (Oculus Rift, HTC Vive, Windows Mixed Reality, Valve Index) и не требует дополнительных настроек: просто жмите «Новая игра» и размещайтесь поудобнее в стартовой телеге. Стрельба из лука, поединки на мечах, колдовство — всё здесь осуществляется при помощи «ручных» контроллеров, но это лишь самые базовые удобства. Bethesda переработала меню, инвентарь и панель быстрого доступа, чтобы обеспечить действительно невиданный игровой опыт. Всё это — с полным набором дополнений и, разумеется, возможностью ставить моды. Путешествия по Скайриму никогда не были такими иммерсивными!</p>
                </div>
            </div>

        </div>


    );
};

export default GamesSite;