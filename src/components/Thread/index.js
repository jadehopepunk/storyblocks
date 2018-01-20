import React from 'react'
import styled from 'styled-jss'
import Message from '../Message'
import type { MessageProps } from '../Message'

export type ThreadProps = MessageProps

const Container = styled('header')({
  marginBottom: 25,
  border: '1px solid #EEEEEE',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  backgroundColor: 'white',
  '&:last-child': {
    marginBottom: 0
  }
})

const Thread = (props: ThreadProps) => (
  <Container>
    <Message {...props} />
  </Container>
)

export default Thread
