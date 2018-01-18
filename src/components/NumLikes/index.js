// @flow
import React from 'react'
import PropTypes from 'prop-types'

type NumLikesProps = {
  /** The total number of likes. */
  total: number
}

/**
 * Displays the number of people who like this message, and provides some
 * indication of who some of them are (if they are people you know).
 */
const NumLikes = ({}: NumLikesProps) => {
  return (
    <a href='#'>18 likes</a>
  )
}

export default NumLikes
