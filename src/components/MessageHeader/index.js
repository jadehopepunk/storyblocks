// @flow
import React from 'react'
import Avatar from '../Avatar'
import NameLink from '../NameLink'

type MessageHeaderProps = {
  author: {
    id: string,
    name: string
  }
}

const MessageHeader = ({ author }: MessageHeaderProps) => (
  <header>
    <Avatar name={author.name} />
    <div className="name">
      <NameLink id={author.id} name={author.name} />
    </div>
  </header>
)

export default MessageHeader
