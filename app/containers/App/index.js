/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
// Header Generator
import { Helmet } from 'react-helmet' 
import { Switch, Route } from 'react-router-dom'
import HomePage from 'containers/HomePage/HomePage'
import Header from 'components/Header/Header'
import '../../styles/styles.scss'
import CriticsList from './components/CriticsList/CriticsList'


export default function App() { 
    return (
      <div className='app-wrapper'>
        <Helmet defaultTitle='Everyone`s a critic'>
          <meta name='description' content='React Movie Reviews' />
        </Helmet>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/home' component={HomePage} />
          <Route path='/critics' component={CriticsList} />
        </Switch>
      </div>
    )
  }
