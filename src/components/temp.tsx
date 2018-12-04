import React from 'react';

interface ITempProps {
    temperature: number,
    city: string,
    state: string
}
const Temp = (props: ITempProps) => {
    const cityName = props.city[0].toUpperCase() + props.city.substr(1)
    const stateName = props.state.toUpperCase()
    let color = '';
    if(props.temperature > 79 ) {
        color = 'red'
    }
    if(props.temperature > 69 && props.temperature <= 79) {
        color = 'yellow'
    }
    if(props.temperature < 70 && props.temperature > 50) {
        color='green'
    }
    if(props.temperature <= 49) {
        color = 'blue'
    }

    return (
        <div>
        <h1>It is <span style={{color: color}}>{props.temperature}</span> degrees in {cityName}, {stateName}</h1>
     </div>
    )
    }




export default Temp;