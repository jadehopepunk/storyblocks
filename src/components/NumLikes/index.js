// @flow
import React from 'react'
import pluralize from 'pluralize'

type NumLikesProps = {
  /** The total number of likes. */
  total: number
}

/**
 * Displays the number of people who like this message, and provides some
 * indication of who some of them are (if they are people you know).
 */
const NumLikes = ({ total }: NumLikesProps) => {
  if (!total) return null

  return (
    <div>{total} {pluralize('like', total)}</div>
  )
}

export default NumLikes
