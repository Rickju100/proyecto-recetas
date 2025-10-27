import { useEffect, useState } from 'react'
import reactLogo from "../assets/react.svg"

import viteLogo from '/vite.svg'
import './App.css'
import Dish from '../components/Dish'
import Sidebar from '../components/Sidebar'

function App() {
  const [meal, setMeal] = useState([])

  const ApiURL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"

  const food = async () => {
    const resp = await fetch(ApiURL)
    if (resp.ok) {
      const data = await resp.json()
      setMeal(data.meals)
    }
  }

  useEffect(() => {
    food()
  }, [])

  console.log(meal)
  return (<div className='d-flex flex-row justify-content-center'>

    <div className='row'>
      <div className="col-2 mt-2">
        <Sidebar/>
      </div>
      <div className="col">
       
        <div className="row">
 {meal.map((dish, index) =>
        (<div className="col-6 " key={index } >
            < Dish
          meal={dish}
        />
        </div>
        
        
        ))}
        </div>

       

      </div>

    </div>


  </div>
  )
}

export default App
