// @flow
import React from 'react'
import styled from 'styled-jss'
import Avatar from '../Avatar'
import NameLink from '../NameLink'
import PublishedAt from '../PublishedAt'

type MessageHeaderProps = {
  author: {
    id: string,
    name: string
  },
  date: Date
}

const Container = styled('header')({
  border: '1px solid blue',
  display: 'flex',
  flexDirection: 'row'
})

const Main = styled('div')({
  flex: 1,
  border: '1px solid blue',
  marginLeft: 10,
  marginRight: 10
})

const Meta = styled('div')({
  border: '1px solid red'
})

const MessageHeader = ({ author, date }: MessageHeaderProps) => (
  <Container>
    <Avatar name={author.name} />
    <Main className='main'>
      <NameLink id={author.id} name={author.name} />
      <PublishedAt date={date} />
    </Main>
    <Meta>
      metadata
    </Meta>
  </Container>
)

export default MessageHeader
