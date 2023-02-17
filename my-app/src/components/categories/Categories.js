import React from 'react';
import './categories.css'

const Categories = ({value,onClickCategory}) => {

    const categories = ['Новинки','Аккаунты', 'Ключи', 'Активация']

    return (
        <div className={'all-cat'}>
            {
                categories.map((categoryName,i)=>(
                    <li
                        onClick={()=> onClickCategory(i)}
                        key={i}
                        className={value=== i ? 'active':''}
                    >{categoryName}</li>
                ))
            }
        </div>
    );
};

export default Categories;