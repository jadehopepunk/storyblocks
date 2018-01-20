// @flow
import React from 'react'
import styled from 'styled-jss'
import Avatar from '../Avatar'
import NameLink from '../NameLink'

type MessageHeaderProps = {
  author: {
    id: string,
    name: string
  }
}

const Container = styled('header')({
  border: '1px solid red'
})

const MessageHeader = ({ author }: MessageHeaderProps) => (
  <Container>
    <Avatar name={author.name} />
    <div className='name'>
      <NameLink id={author.id} name={author.name} />
    </div>
  </Container>
)

export default MessageHeader
