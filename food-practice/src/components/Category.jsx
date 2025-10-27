import React from "react";
import { useState, useEffect } from "react";
import CardCategory from "./CardCategory";

export default function Category() {

    const categoryURL = "https://www.themealdb.com/api/json/v1/1/categories.php"
    const [category, setCategory] = useState([])

    const getCategory = async () => {
        const resp = await fetch(categoryURL)
        if (resp.ok) {
            const data = await resp.json()
            setCategory(data.categories)
           
        }

    }

    useEffect(() => {
        getCategory()
    }, [])

console.log(category)


    return (<div>
        {
            category.map((categoryType, index) =>
            (<CardCategory
                key={index}
                category={categoryType}
            />
            )
            )
        }
    </div>)
}