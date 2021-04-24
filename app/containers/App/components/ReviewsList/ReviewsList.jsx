import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import ReviewItem from '../ReviewItem/ReviewItem'

export default function ReviewsList() {
    const reviews = useSelector(state => state.resources.reviews.reviews)

    const [title, setTitle] = useState('')
    const [filter, setFilter] = useState('publication_date')
    const [numOfResults, setNumOfResults] = useState(20)

    const onTitleChange = (e) => {
        let searchString = e.target.value
        setTitle(searchString)

    }

    const onFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const onNumOfResultsChange = (e) => {
        setNumOfResults(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const sortFunction = (a, b) => {
        if(a.filter < b.filter) 
            {return 1}
        if(a.filter > b.filter)
            {return -1}
        return 0
    }

    const allReviewItems = reviews.sort(sortFunction).map(review =>  (
        <ReviewItem 
            key={review.id}
            id={review.id}
            title={review.display_title ? review.display_title : 'not available'}
            img={review.multimedia.src ? review.multimedia.src : null}
            dateOfPub={review.publication_date ? review.publication_date : 'not available'}
            mpaa={review.mpaa_rating ? review.mpaa_rating : 'not available'}
            criticsPicks={review.critics_pick ? review.critics_pick : 'not available'}
        />
    ))

    const reviewItemsByTitle = reviews.filter(review => review.display_title.toLowerCase().includes(title.toLowerCase()))

    const renderItemsByTitle = reviewItemsByTitle.sort(sortFunction).map(review =>  (
        <ReviewItem 
            key={review.id}
            id={review.id}
            title={review.display_title ? review.display_title : 'not available'}
            img={review.multimedia.src ? review.multimedia.src : null}
            dateOfPub={review.publication_date ? review.publication_date : 'not available'}
            mpaa={review.mpaa_rating ? review.mpaa_rating : 'not available'}
            criticsPicks={review.critics_pick ? review.critics_pick : 'not available'}
        />
    ))

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
                        <option value="publication_date">Publication Date</option>
                        <option value="mpaa_rating">MPAA Rating</option>
                        <option value="critics_pick">Critic's Pick</option>
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
                {title ? renderItemsByTitle : allReviewItems}
            </ol>
        </>
    )
}