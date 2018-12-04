import React from 'react';

interface ITempErrorProps {
    city: string,
    state: string
}
const TempError = (props: ITempErrorProps) => {
    const cityName = props.city[0].toUpperCase() + props.city.substr(1)
    const stateName = props.state.toUpperCase()

    return (
        <div>
            <h2 style={{color: 'red'}}>{cityName} was not found in {stateName}.</h2>
        </div>
    )
}

export default TempError;