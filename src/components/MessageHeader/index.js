// @flow
import React from 'react'
import styled from 'styled-jss'
import { isEmpty } from 'lodash'
import Avatar from '../Avatar'
import NameLink from '../NameLink'
import PublishedAt from '../PublishedAt'
import HashTag from '../HashTag'

type MessageHeaderProps = {
  author: {
    id: string,
    name: string
  },
  date: Date,
  channels: Array<string>
}

const Container = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  fontSize: '120%'
})

const Main = styled('div')({
  flex: 1,
  marginLeft: 10,
  marginRight: 10
})

const MainMeta = styled('div')({
  fontSize: '90%'
})

const Meta = styled('div')({
})

const MessageHeader = ({ author, date, channels }: MessageHeaderProps) => (
  <Container>
    <Avatar name={author.name} />
    <Main className='main'>
      <NameLink id={author.id} name={author.name} />
      <MainMeta>
        <PublishedAt date={date} />
      </MainMeta>
    </Main>
    <Meta>
      {!isEmpty(channels) && <HashTag value={channels[0]} />}
    </Meta>
  </Container>
)

export default MessageHeader
