import React, {useEffect, useState} from 'react';
import GamesItem from "../gamesItem/GamesItem";
import "./bestSell.css"

const BestSellers = () => {
    const [items,setItem]= useState([])
    useEffect(()=>{
        fetch(`https://63da870919fffcd620cbac39.mockapi.io/games?rate=9`)
            .then((res)=>res.json())
            .then((arr)=>{
                setItem(arr)
            }).then(()=>{console.log(items)})
    },[])
    return (
        <>
            <div className={'title'}>
                <h1>хит продаж</h1>
                <div className="cards">
                    {items.slice(0,4).map(items => <GamesItem active={true} games={items} key={items.id}/>)}
                </div>
            </div>



        </>
    );
};

export default BestSellers;