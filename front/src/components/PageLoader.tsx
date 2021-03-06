import React from 'react'
import styled from 'styled-components'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <img alt="SYS" src="images/pageloader.png" />
    </Wrapper>
  )
}

export default PageLoader
