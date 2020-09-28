import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigation = (props) => {
    return(
        <div id="navigation">
            <Nav fill justify variant="tabs" defaultActiveKey="myInfo">
                <Nav.Item><Nav.Link eventKey="myInfo" onClick={props.handleClick} id="myInfo">My Info</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="foodDiary" onClick={props.handleClick} disabled={localStorage.length === 0} id="foodDiary">Food Diary</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="trackMyTotals" onClick={props.handleClick} id="trackMyTotals" disabled={localStorage.length === 0}>Track my totals</Nav.Link></Nav.Item>
            </Nav>
        </div>    
    )
}

export default Navigation;