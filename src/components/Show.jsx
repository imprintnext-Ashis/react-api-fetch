import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

function Show() {

    console.log(useParams());
    const { category } = useParams();
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((res) => setData(res.meals));
    }, [url]);

    return (
        <>
            <h1 className="text-center">Show Items</h1>
            <div className="view">
                {data.map((meal) => (
                    <div className="card my-4" style={{ width: "18rem" }} key={meal.idMeal}>
                        <h5 className="card-title">{category}</h5>
                        <img src={meal.strMealThumb} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{meal.strMeal}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Show;
