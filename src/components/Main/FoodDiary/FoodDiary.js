import React, { useState } from 'react';
import { Form, Button, CardDeck } from 'react-bootstrap';
import Meal from './Meal';

const FoodDiary = (props) => {
    const mealArray = JSON.parse(localStorage.getItem("meals"));
    const [meals, setMeals] = useState(mealArray || []);
    const [data, setData] = useState({
        calories: "",
        carbs: "",
        proteins: "",
        fats: ""
    });
    const cardArray = meals.map((meal, index) => {
        return(
            <Meal calories={meal.calories}
                  carbs={meal.carbs}
                  proteins={meal.proteins}
                  fats={meal.fats}
                  key={index}
                  index={index} 
            />
        )
    })

    const handleChange = (e) => {
        const {value, name} = e.target;
        setData(prevState => {
            return(
                {
                    ...prevState,
                    [name]: value
                }
            )
        })
    }
    const validSubmit = () => {
        const values = Object.values(data);
        const filter = values.filter(item => {
            return(
                item === ""
            );
        })
        return (filter.length === 0)
    }

    const handleSubmit = () => {
        setMeals(prevState => {
            return(
                [...prevState, data]
            )
        });
        localStorage.setItem("meals" , JSON.stringify([...meals, data]));
        setData({
            calories: "",
            carbs: "",
            proteins: "",
            fats: ""
        });
    }
    const handleClick = () => {
        props.handleNewDay();
        setMeals([]);
        localStorage.removeItem("meals");
        localStorage.removeItem("currentCalories")
        localStorage.removeItem("currentCarbs");
        localStorage.removeItem("currentProteins");
        localStorage.removeItem("currentFats");
    }
    return(
        <div>
            <Form onSubmit={e => {
                props.handleData(e, data);
                handleSubmit();
                }}>
                <Form.Group>
                    <Form.Label className="titles">Enter new meal</Form.Label>
                    <Form.Row>
                        <Form.Control type="number" placeholder="Enter Calories" onChange={handleChange} name="calories" value={data.calories}/>
                        <Form.Text>Please enter the total calories in your meal in kcal.</Form.Text>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Form.Control type="number" placeholder="Enter Carbs" onChange={handleChange} name="carbs" value={data.carbs}/>
                        <Form.Text>Please enter the total carbs in your meal in grams.</Form.Text>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Form.Control type="number" placeholder="Enter Proteins" onChange={handleChange} name="proteins" value={data.proteins}/>
                        <Form.Text>Please enter the total proteins in your meal in grams.</Form.Text>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Row>
                        <Form.Control type="number" placeholder="Enter Fats" onChange={handleChange} name="fats" value={data.fats}/>
                        <Form.Text>Please enter the total fats in your meal in grams.</Form.Text>
                    </Form.Row>
                </Form.Group>
                <Button type="submit" variant="secondary" disabled={!validSubmit()}>Submit Meal</Button>
            </Form><br />
            <CardDeck>
                {cardArray}
            </CardDeck><br />
            <Button variant="secondary" type="button" onClick={handleClick}>Start new day</Button>
        </div>
    )
}

export default FoodDiary;