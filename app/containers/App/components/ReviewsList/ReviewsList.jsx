import React, { useState } from 'react'
import ReviewItem from '../ReviewItem/ReviewItem'

export default function ReviewsList() {

    const [title, setTitle] = useState('')
    const [filter, setFilter] = useState('Publication Date')
    const [numOfResults, setNumOfResults] = useState(20)

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const onFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const onNumOfResultsChange = (e) => {
        setNumOfResults(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(this.props)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="title">Search by Title: </label>
                    <input type="text" name="title" onChange={onTitleChange} value={title}/>
                </div>
                <div>
                    <label htmlFor="filter">Filter: </label>
                    <select name="filter" onChange={onFilterChange} defaultValue={filter}>
                        <option value="Publication Date">Publication Date</option>
                        <option value="MPAA Rating">MPAA Rating</option>
                        <option value="Publication Date">Publication Date</option>
                        <option value="Critic's Pick">Critic's Pick</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="results">Number of Results: </label>
                    <input type="number" min="0" max="50" onChange={onNumOfResultsChange} value={numOfResults}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <hr/>
            <ol>
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
            </ol>
        </>
    )
}