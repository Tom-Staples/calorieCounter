import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const TrackMyTotals = (props) => {
    const current = props.nutritionData;
    const target = props.targetData;
    const stats = Object.keys(current).map(key => {
        const percentage = Math.round((current[key] / target[key]) * 100)
        const title = key.substring(0,1).toUpperCase() + key.substring(1);
        const unit = key === "calories" ? "kcal" : "grams";
        const messages = [
            "You have currently consumed " + current[key] + " " + unit + ". You need to consume " + (target[key] - current[key]) + " " + unit + " to reach your target!",
            "You have reached your target for today. Great effort!",
            "You are over your target by " + (current[key] - target[key]) + " " + unit + ". Try to consume less " + key + " tomorrow!" 
        ]
        let message;
        if (percentage < 100) {
            message = messages[0];
        }
        else if (percentage === 100) {
            message = messages[1];
        }
        else {
            message = messages[2];
        }
    
        return(
            <Container fluid style={{marginBottom: "20px", border: "solid 3px #a8a7ae", padding: "10px"}} key={key}>
                <Row>
                    <Col className="titles" xl={2} lg={3} md={3}><h2>{title}</h2></Col>
                    <Col xl={8} lg={7} md={6}>
                        {percentage <= 100 ? <ProgressBar now={percentage} className="progress" striped animated variant="info"></ProgressBar> :
                        <ProgressBar>
                            <ProgressBar now={100}  striped animated variant="info" />
                            <ProgressBar now={percentage - 100} striped animated variant="danger" /> 
                        </ProgressBar>}</Col>
                    <Col className="tracker" xl={2} lg={2} md={2}><h3>{current[key] + "/" + target[key]}<span style={{fontSize: "small"}}>{unit}</span></h3></Col>
                </Row>
                <Row>
                    <Col><p style={{fontSize: "large"}}>{message}</p></Col>
                </Row>
            </Container>
        )
    })
    return(
        <div>
           {stats}
        </div>
    )
}

export default TrackMyTotals;