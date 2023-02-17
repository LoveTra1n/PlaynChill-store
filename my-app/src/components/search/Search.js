import React, {useEffect, useState} from 'react';
import search from "../header/Union.png";
import "./search.css"
import Delete from "../../pages/ordering/order-items/Union.png"
import {useDispatch, useSelector} from "react-redux";
import {changeValue, setAllItemsAction} from "../../redux/cardSlice";
import SearchTab from "./searchTab/SearchTab";


const Search = () => {
    const dispatch = useDispatch()
    const {valueInput} = useSelector(state=>state.valueReducer)
    const [game, setGame] = useState([])
    const [value, setValue] = useState("")


    useEffect(()=>{
        fetch(`https://63da870919fffcd620cbac39.mockapi.io/games?`)
            .then((res)=>res.json())
            .then((arr)=>{
                setGame(arr)
                dispatch(setAllItemsAction(arr))
            })
    },[])


    const handleChange = (e) =>{
        dispatch(changeValue(e.target.value))
        setValue(e.target.value)
    }

    const clearInput =()=>{
        setValue("")
    }


    return (
        <div className="search">
            <input value={value} onChange={handleChange} className={'search-input'} placeholder={"поиск игр"}/>
            <div className="right-side">
                {value&&<img onClick={clearInput} className={"delete"} src={Delete}/>}
                <button className={'search-button'}><img src={search}/></button>
            </div>
            {value&&<div className="search-menu">
                {game.filter(game=>{
                    if(game.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
                        return game
                    }
                    return false
                }).map((game)=><SearchTab key={game.id} icons={game}/>)}
            </div>}
        </div>
    );
};

export default Search;