import React from 'react'
import GlobalStyles from '../../src/components/global-style'

export default (storyFn) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  )
}