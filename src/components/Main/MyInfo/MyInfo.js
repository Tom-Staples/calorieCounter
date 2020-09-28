import React from 'react';
import { Jumbotron, Card, ListGroup, CardDeck, Button } from 'react-bootstrap';

const MyInfo = (props) => {
    return(
        <div>
            <Jumbotron>
                <h2 className="titles">Welcome back {localStorage.firstName}</h2>
                <p>You can view your profile below</p>
            </Jumbotron>
            <CardDeck>
                <Card>
                    <Card.Header><span className="titles">Personal Details</span></Card.Header>
                    <ListGroup>
                        <ListGroup.Item><span className="titles">Name - </span> {localStorage.firstName + " " + localStorage.lastName}</ListGroup.Item>
                        <ListGroup.Item><span className="titles">Age - </span> {localStorage.age}</ListGroup.Item>
                        <ListGroup.Item><span className="titles">Height - </span> {localStorage.unit === "metric" ?
                            localStorage.centimeters + " cm" :
                            localStorage.feet + " ft " + localStorage.inches + " in"}
                        </ListGroup.Item>
                        <ListGroup.Item><span className="titles">Weight - </span> {localStorage.unit === "metric" ? 
                            localStorage.weight + " kg" :
                            localStorage.weight + " lbs"}
                        </ListGroup.Item>
                        <ListGroup.Item><span className="titles">Gender - </span> {localStorage.gender[0].toUpperCase() + localStorage.gender.substring(1)}</ListGroup.Item>
                        <ListGroup.Item><span className="titles">BMI - </span> {localStorage.bmi}</ListGroup.Item>
                        </ListGroup>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title style={{textDecoration: "underline"}}>Nutritional Targets</Card.Title>
                    <Card.Text>
                        {localStorage.firstName}, based on your activity levels and goals, we have recommended the following
                        nutritional intake to help you reach your targets.
                    </Card.Text>
                    <ListGroup>
                        <ListGroup.Item><span className="titles">Calories - </span> {props.targetData.calories} kcal</ListGroup.Item>
                        <ListGroup.Item><span className="titles">Carbs - </span> {props.targetData.carbs} grams</ListGroup.Item>
                        <ListGroup.Item><span className="titles">Proteins - </span> {props.targetData.proteins} grams</ListGroup.Item>
                        <ListGroup.Item><span className="titles">Fats - </span> {props.targetData.fats} grams</ListGroup.Item>
                    </ListGroup>
                    </Card.Body>
                </Card>
            </CardDeck><br />
            <Button variant="secondary" onClick={props.logOut}>Log Out</Button>
        </div>
    )
}

export default MyInfo;