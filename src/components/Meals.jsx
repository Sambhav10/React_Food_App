import useHttp from "../Hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";


const requestConfig = [];


export default function Meal() {

  const {data:loadedMeals, isLoading , error} =  useHttp('http://localhost:3000/meals', requestConfig, []);

    if(isLoading){
        return <p className="center">Fetching Meals!.... </p>
    }

    if(error){
        return <Error title ="failed to fetch meals" message={error} />
    }
    return <ul id="meals">
        {loadedMeals.map((meal =>
            <MealItem  key = {meal.id} meal= {meal}/>
             ))}
    </ul>
}