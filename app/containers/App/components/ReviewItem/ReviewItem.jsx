import React from 'react'
import ReviewDetails from '../ReviewDetails/ReviewDetails'
import PropTypes from 'prop-types'

export default function ReviewItem(props) {

    return (
        <li>
            <h2>{props.title}</h2>
            <img src={props.img} alt={props.title}/>
            <p>Date of Publications: {props.dateOfPub}</p>
            <p>MPAA Rating: {props.mpaa}</p>
            <p>Critics Picks: {props.criticsPicks}</p>
            <ReviewDetails movieId={props.id}/>
        </li>
    )
    
}

ReviewItem.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    dateOfPub: PropTypes.string,
    mpaa: PropTypes.string,
    criticsPicks: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    id: PropTypes.number
}