import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-jss'

type MessageBodyProps = {
  text: string,
  format: 'markdown'
}

const Container = styled('section')({
  marginTop: '1em',
  marginBottom: '1em'
})

const NoContent = styled('p')({
  color: '#999999'
})

const MessageBody = ({ text }: MessageBodyProps) => (
  <Container>
    { text
      ? <ReactMarkdown source={text} />
      : <NoContent>no content found</NoContent>
    }
  </Container>
)

export default MessageBody
