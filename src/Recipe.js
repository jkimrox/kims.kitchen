import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,dietlabel,image,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{dietlabel}</p>
            <ul>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
};

export default Recipe;