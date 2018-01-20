// @flow
import React from 'react'
import styled from 'styled-jss'

const Container = styled('header')({
  backgroundColor: '#f5f5f5'
})

const FeedPanel = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default FeedPanel
