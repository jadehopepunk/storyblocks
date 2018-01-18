import React from 'react'
import moment from 'moment'

type PublishedAt = {
  date: date
}

const PublishedAt = ({ date }: PublishedAt) => {
  const at = moment(date)
  return <div>{at.fromNow()}</div>
}

export default PublishedAt
