import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';


const App = () => {
    const [selected, setSelected] = useState("myInfo");
    const [userData, setUserData] = useState({});
    const [nutritionData, setNutritionData] = useState({
        calories: localStorage.currentCalories || 0,
        carbs: localStorage.currentCarbs || 0,
        proteins: localStorage.currentProteins || 0,
        fats: localStorage.currentFats || 0
    });
    const [targetData, setTargetData] = useState({
        calories: localStorage.targetCalories,
        carbs: localStorage.targetCarbs,
        proteins: localStorage.targetProteins,
        fats: localStorage.targetFats
    })

    const handleNewDay = () => {
        setNutritionData({
            calories: 0,
            carbs: 0,
            proteins: 0,
            fats: 0
        })    
    }

    const handleClick = (e) => {
        setSelected(e.target.id)
    }

    const logOut = () => {
        localStorage.clear();
        setUserData({});
        setNutritionData({
            calories: 0,
            carbs: 0,
            proteins: 0,
            fats: 0
        });
        setTargetData({});
    }
    const handleData = (e, data) => {
        e.preventDefault();
        localStorage.setItem("currentCalories", (localStorage.currentCalories / 1 || 0) + (data.calories / 1));
        localStorage.setItem("currentCarbs", (localStorage.currentCarbs / 1 || 0) + (data.carbs / 1));
        localStorage.setItem("currentProteins", (localStorage.currentProteins / 1 || 0) + (data.proteins / 1));
        localStorage.setItem("currentFats", (localStorage.currentFats / 1 || 0) + (data.fats / 1));
        setNutritionData(prevState => {
            return(
                {
                    calories: (prevState.calories / 1) + (data.calories / 1),
                    carbs: (prevState.carbs / 1) + (data.carbs / 1),
                    proteins: (prevState.proteins / 1) + (data.proteins / 1),
                    fats: (prevState.fats / 1) + (data.fats / 1)
                }
            )
        })
    }

    const handleSubmit = (e, data) => {
        e.preventDefault();
        const keys = Object.keys(data);
        keys.forEach(key => {
            if (key === "height") {
                const units = Object.keys(data[key]);
                units.forEach(unit => {
                    localStorage.setItem(unit, data[key][unit]);
                })
            }
            else {
                localStorage.setItem(key, data[key]);
                }
        })
        
        setUserData(data);
        calorieCalc(data);
    }

    const calorieCalc = (data) => {
        const weight = data.unit === "metric" ?
            data.weight :
            Math.round((data.weight / 2.2))
        const height = data.unit === "metric" ? 
            data.height.centimeters :
            Math.round(Math.sqrt(weight / (data.bmi / 1)) * 100)
        const bmr = data.gender === "female" ? 
                        655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * data.age) :
                        66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * data.age)
        let factor;
        const activityLevel = data.activityLevel;
        const goals = data.goals;
        if (activityLevel === "active") {
            factor = 1.725;
        }
        if (activityLevel === "moderate") {
            factor = 1.55
        }
        if (activityLevel === "slight") {
            factor = 1.375;
        }
        if (activityLevel === "inactive") {
            factor = 1.2;
        }
        let extraCal;
        if (goals === "gain") {
            extraCal = 500;
        }
        if (goals === "maintain") {
            extraCal = 0;
        }
        if (goals === "lose") {
            extraCal = -500;
        }
        const totalCal = Math.round(bmr * factor) + (extraCal);
        const carbs = Math.round((totalCal * 0.5) / 4);
        const proteins = Math.round((totalCal * 0.2) / 4);
        const fats = Math.round((totalCal * 0.3) / 9);
        const targets = {
            targetCalories: totalCal,
            targetCarbs: carbs,
            targetProteins: proteins,
            targetFats: fats
        }
       
        const keys = Object.keys(targets);
        keys.forEach(key => {
            localStorage.setItem(key, targets[key]);
        })
        setTargetData({
            "calories": totalCal,
            "carbs": carbs,
            "proteins": proteins,
            "fats": fats
        });
    }

    return(
       <div>
           <Header />
           <Navigation 
           handleClick={handleClick}
           userData={userData}/>
           <Main    
                selected={selected}
                nutritionData={nutritionData} 
                targetData={targetData}
                userData={userData}
                logOut={logOut}
                handleSubmit={handleSubmit}
                handleData={handleData}
                handleNewDay={handleNewDay}
            />
       </div>
    )
}

export default App;