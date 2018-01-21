// @flow
import React from 'react'
import styled from 'styled-jss'
import MessageHeader from '../MessageHeader'
import MessageBody from '../MessageBody'
import MessageFooter from '../MessageFooter'

export type MessageProps = {
  id: string,
  author: {
    id: string,
    name: string
  },
  date: Date,
  channels: Array<string>,
  text: string
}

const Container = styled('div')({
  padding: 20
})

const Message = ({ author, text, date, channels }: MessageProps) => (
  <Container className='message'>
    <MessageHeader author={author} date={date} channels={channels} />
    <MessageBody text={text} format='markdown' />
    <MessageFooter />
  </Container>
)

export default Message
