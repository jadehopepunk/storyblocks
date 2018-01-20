// @flow
import React from 'react'
import styled from 'styled-jss'
import MessageHeader from '../MessageHeader'
import MessageBody from '../MessageBody'
import MessageFooter from '../MessageFooter'

type MessageProps = {
  author: {
    id: string,
    name: string
  },
  text: string
}

const Container = styled('div')({
  padding: 20
})

const Message = ({ author, text }: MessageProps) => (
  <Container className='message'>
    <MessageHeader author={author} />
    <MessageBody text={text} format='markdown' />
    <MessageFooter />
  </Container>
)

export default Message
