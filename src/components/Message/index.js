// @flow
import React from 'react'
import MessageHeader from '../MessageHeader'

type MessageProps = {
  author: {
    id: string,
    name: string
  }
}

const Message = ({ author }: MessageProps) => (
  <div className='message'>
    <MessageHeader author={author} />
    <section>
      main section
    </section>
    <footer>
      footer
    </footer>
  </div>
)

export default Message
