import React from 'react'


function Card(props){
    return(
        <div className='card'>
            <img className='card-img' src={`images/${props.item.image}`}  />
            <div className='card-info'> 
                <img src='images/pin.svg'/>
                <span className='small'>{props.item.country}</span>
                <h1 className='card-location'>{props.item.location}</h1>
                <p className='date'>
                {props.item.dates.startDate.day +` `}  
                {props.item.dates.startDate.month}, {props.item.dates.startDate.year} 
                - {props.item.dates.endDate.day + ` `}
                {props.item.dates.endDate.month}, {props.item.dates.endDate.year}
                </p>
                <p className='entry'>{props.item.entry}</p>
            </div>
        </div>
    )
}

export default Card