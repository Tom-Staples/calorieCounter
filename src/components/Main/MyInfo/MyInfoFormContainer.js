import React, { useState } from 'react';
import MyInfoForm from './MyInfoForm';

const MyInfoFormContainer = (props) => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        unit: "metric",
        weight: "",
        height: {
            centimeters: "",
            feet: "",
            inches: ""
        },
        age: "",
        gender: "male",
        activityLevel: "select",
        goals: "select",
        bmi: ""
    });

    const bmiCalc = (e) => {
        const {name, value, id} = e.target;
        let weight;
        let height;
        let bmiScore;
      if (userData.unit === "metric") {
            if (name === "weight") {
                weight = value;
                height = ((userData.height.centimeters / 1) / 100);
                bmiScore = (weight / Math.pow(height, 2)).toFixed(2);
                if (isNaN(bmiScore)) {
                    setUserData(prevState => {
                        return(
                            {
                                ...prevState,
                                bmi: ""
                            }
                        )
                    })
                }
                else {
                    setUserData(prevState => {
                        return(
                            {
                                ...prevState,
                                bmi: bmiScore
                            }
                        )
                    })
                }
            }
            else {
                height = (value / 1) / 100;
                weight = userData.weight / 1;
                bmiScore = (weight / Math.pow(height, 2)).toFixed(2);
                if (isNaN(bmiScore)) {
                    setUserData(prevState => {
                        return(
                            {
                                ...prevState,
                                bmi: ""
                            }
                        )
                    })
                }
                else {
                    setUserData(prevState => {
                        return(
                            {
                                ...prevState,
                                bmi: bmiScore
                            }
                        )
                    })
                }
            }
      }
      else {
        if (name === "weight") {
            weight = ((value / 1) / 2.2).toFixed(2);
            height = ((((userData.height.feet / 1) * 12) + (userData.height.inches / 1)) * 0.0254).toFixed(2);
            bmiScore = (weight / Math.pow(height, 2)).toFixed(2);
            if (isNaN(bmiScore)) {
                setUserData(prevState => {
                    return(
                        {
                            ...prevState,
                            bmi: ""
                        }
                    )
                })
            }
            else {
                setUserData(prevState => {
                    return(
                        {
                            ...prevState,
                            bmi: bmiScore
                        }
                    )
                })
            }
        }
        else if (name === "height" && id === "feet") {
            weight = ((userData.weight / 1) / 2.2).toFixed(2);
            height = ((((value / 1) * 12) + (userData.height.inches / 1)) * 0.0254).toFixed(2);
            bmiScore = (weight / Math.pow(height, 2)).toFixed(2);
            if (isNaN(bmiScore)) {
                setUserData(prevState => {
                    return(
                        {
                            ...prevState,
                            bmi: ""
                        }
                    )
                })
            }
            else {
                setUserData(prevState => {
                    return(
                        {
                            ...prevState,
                            bmi: bmiScore
                        }
                    )
                })
            }
        }
        else {
            weight = ((userData.weight / 1) / 2.2).toFixed(2);
            height = (((value / 1)  + ((userData.height.feet / 1) * 12)) * 0.0254).toFixed(2);
            bmiScore = (weight / Math.pow(height, 2)).toFixed(2);
            if (isNaN(bmiScore)) {
                setUserData(prevState => {
                    return(
                        {
                            ...prevState,
                            bmi: bmiScore
                        }
                    )
                })
            }
            else {
                setUserData(prevState => {
                    return(
                        {
                            ...prevState,
                            bmi: bmiScore
                        }
                    )
                })
            }
        }
      }
    }

    const handleChange = (e) => {
        const {name, value, id} = e.target;
        (id === "centimeters" || id === "feet" || id === "inches") ?
        setUserData(prevState => {
            return(
                {
                    ...prevState,
                    [name]: {
                        ...prevState[name],
                        [id]: value
                    }
                }
            )
        }) :
        setUserData(prevState => {
            return(
                {
                    ...prevState,
                    [name]: value
                }
            )
        })
    }
    const validSubmit = () => {
       const entries = Object.entries(userData);
       const heightEntries = Object.entries(userData.height);
       heightEntries.forEach(entry => {
           entries.push(entry);
       })
       const filter = entries.filter(entry => {
           return(
               entry[1] === "" || entry[1] === "select"
           )
       })
       return((filter.length === 1 && userData.unit === "imperial") || (filter.length === 2 && userData.unit === "metric"));
    }
    return(
        <div>
            <MyInfoForm 
                handleSubmit={props.handleSubmit}
                handleChange={handleChange}
                userData={userData}
                bmiCalc={bmiCalc}
                validSubmit={validSubmit}
            />
        </div>
    )
}

export default MyInfoFormContainer;