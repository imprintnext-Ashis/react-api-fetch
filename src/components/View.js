import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../App.css';

function View() {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((res) => setData(res.categories));
    }, []);

    const shortenDescription = (description, maxLength = 150) => {
        if (description.length <= maxLength) {
            return description;
        }
        return `${description.substring(0, maxLength)}...`;
    };

    const handleShowMealClick = (category) => {
        navigate(`/show/${category.strCategory}`);
    };

    return (
        <>
            <div className="view">
                {data.map((category) => (
                    <div className="card  my-4" style={{ width: "18rem" }} key={category.idCategory}>
                        <img src={category.strCategoryThumb} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{category.strCategory}</h5>
                            <p className="card-text">{shortenDescription(category.strCategoryDescription)}</p>
                            <button
                                className="btn btn-primary"
                                style={{ width: "100%" }}
                                onClick={() => handleShowMealClick(category)}
                            >
                                Show {category.strCategory} meal
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default View;
