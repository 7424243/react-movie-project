import React from 'react'
import ReviewItem from '../ReviewItem/ReviewItem'

export default function ReviewsList() {
    return (
        <>
            <div>
                <label htmlFor="title">Search by Title: </label>
                <input type="text" name="title"/>
            </div>
            <div>
                <label htmlFor="filter">Filter: </label>
                <select name="filter">
                    <option defaultValue="Publication Date">Publication Date</option>
                    <option defaultValue="MPAA Rating">MPAA Rating</option>
                    <option defaultValue="Publication Date">Publication Date</option>
                    <option defaultValue="Critic's Pick">Critic's Pick</option>
                </select>
            </div>
            <div>
                <label htmlFor="results">Number of Results: </label>
                <input type="number" min="0" max="50" defaultValue="20"/>
            </div>
            <hr/>
            <ol>
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
            </ol>
        </>
    )
}