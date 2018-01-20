import React from 'react'
import styled from 'styled-jss'
import Thread from '../Thread'
import type { ThreadProps } from '../Thread'

type ThreadSetProps = {
  threads: Array<ThreadProps>
}

const Container = styled('div')({
  padding: 25
})

const ThreadSet = ({threads}: ThreadSetProps) => (
  <Container>
    {
      threads.map(thread => (
        <Thread {...thread} />
      ))
    }
  </Container>
)

export default ThreadSet
