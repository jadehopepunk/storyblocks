import React from 'react'
import styled from 'styled-jss'

const ActionLink = styled('a')({
  color: '#333333',
  opacity: 0.4,
  fontWeight: 'bold',
  marginRight: 25,
  '&:last-child': {
    marginRight: 0
  },
  '&:hover': {
    opacity: 1.0
  }
})

const MessageFooter = () => (
  <footer>
    <ActionLink href='#'>Like</ActionLink>
    <ActionLink href='#'>Reply</ActionLink>
  </footer>
)

export default MessageFooter
