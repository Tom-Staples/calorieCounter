import React from 'react';
import MyInfo from './MyInfo/MyInfo';
import MyInfoFormContainer from './MyInfo/MyInfoFormContainer';
import FoodDiary from './FoodDiary/FoodDiary';
import TrackMyTotals from './TrackMyTotals/TrackMyTotals';


const Main = (props) => {
    const sections = {
        myInfo: localStorage.length > 0 ? 
                    <MyInfo 
                        targetData={props.targetData}
                        logOut={props.logOut}
                    /> :
                    <MyInfoFormContainer 
                        handleSubmit={props.handleSubmit}/>,
        foodDiary: <FoodDiary 
                        handleData={props.handleData}
                        handleNewDay={props.handleNewDay}
                    />,
        trackMyTotals: <TrackMyTotals
                             targetData={props.targetData}
                             nutritionData={props.nutritionData}
                             
                        />
       
    };

    return(
        <div style={{margin: "10px"}}>
            {sections[props.selected]}      
        </div>
    )
}

export default Main;