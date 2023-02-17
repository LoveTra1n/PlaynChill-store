import React from 'react';
import "./search-tab.css"
import {Link} from "react-router-dom";
import {changeValue} from "../../../redux/cardSlice";
import {useDispatch} from "react-redux";

const SearchTab = ({icons,searchValue}) => {
    const dispatch=useDispatch()
    const deleteValue=()=>{
        dispatch(changeValue(""))
    }

    return (
        <div className={"st-icons"}>
            <div className="view-icon">
                <img className={"view-img"} src={icons.photo}/>
            </div>
            <div className="view-info">
                <Link to={`/${icons.id}`}><h1 onClick={deleteValue}>{icons.title}</h1></Link>
                <h2>{icons.price}₽</h2>
            </div>
        </div>
    );
};

export default SearchTab;