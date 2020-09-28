import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Meal = (props) => {
    return(
        <Card>
            <Card.Body>
                <Card.Title>Meal {props.index + 1}</Card.Title>
                <ListGroup>
                    <ListGroup.Item><span className="titles">Calories - </span> {props.calories}</ListGroup.Item>
                    <ListGroup.Item><span className="titles">Carbs - </span> {props.carbs}</ListGroup.Item>
                    <ListGroup.Item><span className="titles">Proteins - </span> {props.proteins}</ListGroup.Item>
                    <ListGroup.Item><span className="titles">Fats - </span> {props.fats}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default Meal;