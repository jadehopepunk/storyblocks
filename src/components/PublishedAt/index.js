// @flow
import React from 'react'
import moment from 'moment'
import styled from 'styled-jss'

type PublishedAtProps = {
  date: Date
}

const Container = styled('div')({
  color: '#999999'
})

const PublishedAt = ({ date }: PublishedAtProps) => {
  const at = moment(date)
  return <Container>{at.fromNow()}</Container>
}

export default PublishedAt
