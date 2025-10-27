import React from "react";

export default function Dish({meal}) {

    const {strArea, strMealThumb, strMeal} = meal

    return (<div className="card w-75 m-2" >
            <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">{strMeal}</h5>
                <p className="card-text">{strArea}</p>
                <img src={strMealThumb} className="card-img-top w-75 h-50 m-2" alt="..." />
                <a href="#" className="btn btn-primary w-75">Go somewhere</a>
            </div>
        </div>

    )
}