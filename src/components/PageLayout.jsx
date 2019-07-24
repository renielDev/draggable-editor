import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 1rem;
  }

  html, body, div#root {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  background: green;
  height: 100%;
`

const Header = styled.div`
  background: green;
  height: 70px;
  padding: 5px 15px;
`

const ContentLayout = styled.div`
  display: flex;
  flex: 1;
  background: yellow;
`

const Sidebar = styled.div`
  height: 100%;
  background: red;
  width: 200px;
`

const Content = styled.div`
  height: 100%;
  background: white;
  flex: 1;
`

const PageLayout = props => {
  const { header, content } = props
  return (
    <React.Fragment>
      <GlobalStyle />
      <Page>
        <Header>{header}</Header>
        <ContentLayout>
          <Sidebar />
          <Content />
          {content}
        </ContentLayout>
      </Page>
    </React.Fragment>
  )
}

PageLayout.propTypes = {
  header: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
}

export default PageLayout
