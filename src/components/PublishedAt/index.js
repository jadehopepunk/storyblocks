// @flow
import React from 'react'
import moment from 'moment'

type PublishedAtProps = {
  date: Date
}

const PublishedAt = ({ date }: PublishedAtProps) => {
  const at = moment(date)
  return <div>{at.fromNow()}</div>
}

export default PublishedAt
