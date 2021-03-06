import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import { getMovieReviews } from 'resources/reviews/reviews.actions'
import ReviewsList from '../App/components/ReviewsList/ReviewsList'
import { getCriticsData } from '../../resources/critics/critics.actions'


export function HomePage(props) {

  //useEffect() is similar to ComponentDidMount
  useEffect(() => {
    props.getMovieReviews(),
    props.getCriticsData()
  },[])

  return (
    <div>
      <Helmet>
        <meta name='description' content='Home' />
      </Helmet>
      <main>
        <h1>Movie Reviews</h1>
        <ReviewsList />
      </main>
    </div>
  )
}

//runs when the store changes or any field of ownProps is different
const mapStateToProps = state => ({
    reviews: state.resources.reviews.reviews,
    critics: state.resources.critics.critics
})

const mapDispatchToProps = dispatch => ({
  getMovieReviews: () => dispatch(getMovieReviews()),
  getCriticsData: () => dispatch(getCriticsData()),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage)

HomePage.propTypes = {
  getCriticsData: PropTypes.func.isRequired,
  getMovieReviews: PropTypes.func.isRequired
}
