import React from 'react'
import { hot } from 'react-hot-loader'
import PageLayout from './components/PageLayout'

const App = () => {
  return (
    <PageLayout
      header={() => {
        return <h1>Sample</h1>
      }}
      content={() => {
        return <h2>Sample 2</h2>
      }}
    />
  )
}

export default hot(module)(App)
