import React from 'react'
import ReviewDetails from '../ReviewDetails/ReviewDetails'

export default function ReviewItem() {
    return (
        <li>
            <h2>Movie Title :</h2>
            <img />
            <p>Date of Publications: </p>
            <p>MPAA Rating: </p>
            <p>Critics Picks: </p>
            <ReviewDetails />
        </li>
    )
}