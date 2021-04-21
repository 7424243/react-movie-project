import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet' // Header Generator
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'

import hesImg from 'images/hes.png'
import { getMovieReviews } from 'resources/reviews/reviews.actions'

export function HomePage(props) {
  const history = useHistory()

  useEffect(() => {
    props.getMovieReviews()
  },[])

  return (
    <div>
      <Helmet>
        <meta name="description" content="Home" />
      </Helmet>
      <main>
        <h1>Movie Reviews!!</h1>
        
      </main>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {}

const mapDispatchToProps = dispatch => ({
  getMovieReviews: () => dispatch(getMovieReviews()),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomePage)
