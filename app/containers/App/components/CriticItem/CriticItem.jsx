import React from 'react'
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types'

export default function CriticItem(props) {

    const reviews = useSelector(state => state.resources.reviews.reviews)

    const criticReviews = reviews.filter(review => review.byline.toLowerCase().split(' ').join('') === props.name.toLowerCase().split(' ').join('') )

    const numOfReviews = criticReviews.length

    const criticPicks = criticReviews.filter(review => review.critics_pick !== 0)

    const numOfPicks = criticPicks.length

    return (
        <li>
            <h2>{props.name}</h2>
            {props.img ? <img src={props.img} alt="critic"/> : null}
            <p>Number of Reviews Written: {numOfReviews}</p>
            <p>Number of Critics Picks: {numOfPicks}</p>
            {props.bio ? <p>Bio: {props.bio}</p> : null}
        </li>
    )

}

CriticItem.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    bio: PropTypes.string
}