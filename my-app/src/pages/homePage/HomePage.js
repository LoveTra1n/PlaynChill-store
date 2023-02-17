import React, {useEffect, useState} from 'react';
import {NavLink,Link} from "react-router-dom";
import "../../App.css"
import './homePage.css'
import Slider from "../../components/slider/Slider";
import data from "../../data/data.json"
import GamesItem from "../../components/gamesItem/GamesItem";
import Categories from "../../components/categories/Categories";
import BestSellers from "../../components/best-sellers/BestSellers";



const HomePage = () => {
    const [categoryId, setCategoryId] = useState(0)
    const [items, setItems]= useState([])
    const [itemNum,setItemNum]=useState(12)



    useEffect(()=>{
        fetch(`https://63da870919fffcd620cbac39.mockapi.io/games?${categoryId < 1 ? "" : `category=${categoryId}`}`)
            .then((res)=>res.json())
            .then((arr)=>{
                setItems(arr)

            })

        },[categoryId])

    const renderMoreItems=()=>{
        setItemNum(itemNum+4)
    }



    return (
        <div className={'home-page'}>
            <Slider/>
            <BestSellers/>
                <Categories value={categoryId} onClickCategory={(i)=> setCategoryId(i)}/>
            <div className="all">
                {items.slice(0,itemNum).map(items => <GamesItem games={items} key={items.id}/>)}
            </div>
            <div className={"link-catalog"}><h1 className={"renderItem"} onClick={renderMoreItems}>загрузить ещё больше</h1></div>
        </div>
    );
};

export default HomePage;