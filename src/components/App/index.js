import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

import * as routes from '../../constants/routes'

import PageLoading from '../common/PageLoading'

import './index.css'

const HomePage = React.lazy(() => import('../Pages/Home'))

const App = () => {

  return (
    <Suspense fallback={<PageLoading />}>
      <div className="app">
        <Route exact path={routes.Home} component={() => <HomePage />} />
      </div>
    </Suspense>
  )
}

export default App
