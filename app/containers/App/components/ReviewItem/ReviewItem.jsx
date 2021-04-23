import React from 'react'
import ReviewDetails from '../ReviewDetails/ReviewDetails'

export default function ReviewItem(props) {

    return (
        <li>
            <h2>{props.title}</h2>
            <img src={props.img} alt={props.title}/>
            <p>Date of Publications: {props.dateOfPub}</p>
            <p>MPAA Rating: {props.mpaa}</p>
            <p>Critics Picks: {props.criticsPicks}</p>
            <ReviewDetails 
                movieId={props.id}
            />
        </li>
    )
}