import React from 'react';
import { Jumbotron, Form, Col, Button } from 'react-bootstrap';

const MyInfoForm = (props) => {
    return(
        <div>
           <Jumbotron>
               <h2 className="titles">Welcome to Calorie-Counter!</h2>
               <p>Please enter your details in the form below to get started!</p>
           </Jumbotron>
           <Form id="infoForm" onSubmit={e =>
            {
               props.handleSubmit(e, props.userData);
            }}>
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" xl={1} lg={2} md={2} sm={3} xs={3}>First Name:</Form.Label>
                        <Col xl={8} lg={8} md={8} sm={8} xs={8}><Form.Control type="text" placeholder="Enter First Name" name="firstName" onChange={props.handleChange} value={props.userData.firstName}/></Col>
                    </Form.Row>
                </Form.Group>

                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" xl={1} lg={2} md={2} sm={3} xs={3}>Last Name:</Form.Label>
                        <Col xl={8} lg={8} md={8} sm={8} xs={8}><Form.Control type="text" placeholder="Enter Last Name" name="lastName" onChange={props.handleChange} value={props.userData.lastName}/></Col>
                    </Form.Row>
                </Form.Group>

                <Form.Group>
                        <Form.Check inline type="radio" label="Metric" value="metric" name="unit" checked={props.userData.unit === "metric"} onChange={props.handleChange}/>
                        <Form.Check inline type="radio" label="Imperial" value="imperial" name="unit" checked={props.userData.unit === "imperial"} onChange={props.handleChange}/>
                </Form.Group>
                {props.userData.unit === "metric" ? 

                //Metric Form
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" xl={1} lg={2} md={2} sm={2} xs={3}>Weight:</Form.Label>
                        <Col xl={8} lg={8} md={8} sm={6} xs={6}>
                            <Form.Control 
                                type="number" 
                                placeholder="Enter Weight" 
                                name="weight" 
                                value={props.userData.weight} 
                                onChange={e => {
                                    props.handleChange(e)
                                    props.bmiCalc(e)
                                }}/>
                        </Col>
                        <Form.Label column="lg">Kilograms</Form.Label>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label column="lg" xl={1} lg={2} md={2} sm={2} xs={3}>Height:</Form.Label>
                        <Col xl={8} lg={8} md={8} sm={6} xs={6}>
                            <Form.Control 
                                type="number" 
                                placeholder="Enter Height" 
                                name="height" 
                                id="centimeters" 
                                value={props.userData.height.centimeters} 
                                onChange={e => {
                                    props.handleChange(e)
                                    props.bmiCalc(e)
                                }}/>
                        </Col>
                        <Form.Label column="lg">Centimeters</Form.Label>
                    </Form.Row>  
                </Form.Group> :

                //Imperial form
                <Form.Group>
                <Form.Row>
                    <Form.Label column="lg" xl={1} lg={2} md={2} sm={2} xs={3}>Weight:</Form.Label>
                    <Col xl={8} lg={8} md={8} sm={8} xs={6}>
                        <Form.Control 
                        type="number" 
                        placeholder="Enter Weight" 
                        name="weight" value={props.userData.weight} 
                        onChange={e => {
                            props.handleChange(e)
                            props.bmiCalc(e)
                        }}/>
                    </Col>
                    <Form.Label column="lg" xl={1} lg={2} md={2} sm={2} xs={3}>Pounds</Form.Label>
                </Form.Row>
                <Form.Row>
                    <Form.Label column="lg" xl={1} lg={2} md={2} sm={2} xs={3}>Height:</Form.Label>
                    <Col xl={3} lg={3} md={3} sm={3} xs={2}>
                        <Form.Control 
                            type="number" 
                            placeholder="" 
                            id="feet" 
                            name="height" 
                            value={props.userData.height.feet} 
                            onChange={e => {
                                props.handleChange(e)
                                props.bmiCalc(e)
                            }}/>
                        </Col>
                    <Form.Label column="lg" xl={1} lg={2} md={2} sm={2} xs={2}>Feet</Form.Label>
                    <Col xl={4} lg={3} md={3} sm={3} xs={2}>
                        <Form.Control 
                        type="number" 
                        name="height" 
                        id="inches" 
                        value={props.userData.height.inches} 
                        onChange={e => {
                            props.handleChange(e)
                            props.bmiCalc(e)
                        }}/>
                    </Col>
                    <Form.Label column="lg" xl={3} lg={2} md={2} sm={2} xs={3}>Inches</Form.Label>
                </Form.Row>  
            </Form.Group>}
            <Form.Group>
                <Form.Row>
                    <Form.Label column="lg" xl={1} lg={2} md={2} sm={2} xs={3}>Age:</Form.Label>
                    <Col xl={8} lg={8} md={8} sm={8} xs={6}><Form.Control type="number" placeholder="Enter Age" name="age" value={props.userData.age} onChange={props.handleChange}/></Col>
                </Form.Row>
            </Form.Group>
            <Form.Group>
                <Form.Check type="radio" inline label="Male" value="male" name="gender" checked={props.userData.gender === "male"} onChange={props.handleChange}/>
                <Form.Check type="radio" inline label="Female" value="female" name="gender" checked={props.userData.gender === "female"} onChange={props.handleChange}/>
                <Form.Check type="radio" inline label="Other" value="other" name="gender" checked={props.userData.gender === "other"} onChange={props.handleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Row>
                    <Form.Label column="lg" xl={1} lg={2} md={2} sm={3} xs={4}>Activity Level:</Form.Label>
                    <Col xl={8} lg={8} md={8} sm={8} xs={6}><Form.Control as="select" value={props.userData.activityLevel} onChange={props.handleChange} name="activityLevel">
                        <option value="select">   ---Please Select an option---   </option>
                        <option value="active">Active - 4-5 days per week</option>
                        <option value="moderate">Moderately Active - 2-3 days per week</option>
                        <option value="slight">Slightly Active - 1 day per week</option>
                        <option value="inactive">Not Active</option>
                    </Form.Control>
                    </Col>
                </Form.Row>
            </Form.Group>
            <Form.Group>
                <Form.Row>
                    <Form.Label column="lg" xl={1} lg={2} md={2} sm={2} xs={3}>Goals:</Form.Label>
                    <Col xl={8} lg={8} md={8} sm={8} xs={6}><Form.Control as="select" value={props.userData.goals} onChange={props.handleChange} name="goals">
                        <option value="select">   ---Please Select an option---   </option>
                        <option value="maintain">I want to maintain my weight</option>
                        <option value="lose">I want to lose weight</option>
                        <option value="gain">I want to gain weight</option>
                    </Form.Control>
                    </Col>
                </Form.Row>
            </Form.Group>
            <Form.Group>
                <Form.Row>
                    <Form.Label column="lg" xl={1} lg={2} md={2} sm={2} xs={3}>BMI:</Form.Label>
                    <Col xl={8} lg={8} md={8} sm={8} xs={6}><Form.Control type="number" readOnly  value={props.userData.bmi} name="bmi"/></Col>
                </Form.Row>
            </Form.Group>
            <Button variant="secondary" type="submit" disabled={!props.validSubmit()}>Submit Details</Button>
           </Form>
        </div>
    )
}

export default MyInfoForm;