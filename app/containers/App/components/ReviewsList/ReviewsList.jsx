import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ReviewItem from '../ReviewItem/ReviewItem'

export default function ReviewsList() {

    //useSelector() hook to access global-like state
    //https://react-redux.js.org/api/hooks
    const reviews = useSelector(state => state.resources.reviews.reviews)

    const [title, setTitle] = useState('')
    const [filter, setFilter] = useState('publication_date')
    const [numOfResults, setNumOfResults] = useState(20)
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (e) => {
        setCurrentPage(Number(e.target.id))
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const onFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const onNumOfResultsChange = (e) => {
        setNumOfResults(e.target.value)
    }

    //logic for displaying reviews
    const indexOfPrevReview = currentPage * numOfResults
    const indexOfFirstReview = indexOfPrevReview - numOfResults
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfPrevReview)

    const sortFunction = (a, b) => {
        if(filter === 'publication_date') {
            if(a.publication_date < b.publication_date) 
                {return 1}
             if(a.publication_date > b.publication_date)
                {return -1}
            return 0
        } else if(filter === 'mpaa_rating') {
            if(a.mpaa_rating < b.mpaa_rating) 
                {return 1}
            if(a.mpaa_rating > b.mpaa_rating)
                {return -1}
            return 0
        } else if(filter === 'critics_pick') {
            if(a.critics_pick < b.critics_pick) 
                {return 1}
            if(a.critics_pick > b.critics_pick)
                {return -1}
            return 0
        }
    }

    const allReviewItems = currentReviews.sort(sortFunction).map(review => (
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

    //filter review items as user types
    const reviewItemsByTitle = currentReviews.filter(review => review.display_title.toLowerCase().includes(title.toLowerCase()))

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

    //logic for display page numbers
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(reviews.length / numOfResults); i++) {
        pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => (
        <button
            key={number}
            id={number}
            className='page-number'
            onClick={handlePageChange}
        >
            {number}
        </button>
    ))

    return (
        <>
            <div className='form-container'>
                <form>
                    <div>
                        <label htmlFor='title'>Search by Title: </label>
                        <input 
                            type='text'
                            name='title'
                            onChange={onTitleChange} 
                            value={title}
                            aria-label='movie title'
                        />
                    </div>
                    <div>
                        <label htmlFor='filter'>Filter: </label>
                        <select 
                            name='filter' 
                            onChange={onFilterChange} 
                            defaultValue={filter}
                            aria-label='filter by'
                        >
                            <option value='publication_date' aria-label='publication date'>Publication Date</option>
                            <option value='mpaa_rating' aria-label='mpaa rating'>MPAA Rating</option>
                            <option value='critics_pick' aria-label='number of critic`s pick'>Critic's Pick</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='results'>Number of Results: </label>
                        <input 
                            type='number' 
                            min='0' 
                            max='50' 
                            onChange={onNumOfResultsChange} 
                            value={numOfResults}
                            aria-label='number of results per page'
                        />
                    </div>
                </form>
            </div>
            <hr/>
            <ol>
                {title ? renderItemsByTitle : allReviewItems}
            </ol>
            <div id='page-numbers' className='pagination'>
                {renderPageNumbers}
            </div>
        </>
    )
    
}