// @flow
import React from 'react'

type AvatarProps = {
  /** The name of this user as understood by the viewer */
  name: string,
  /** Optionally specify the avatar size, or it will use the default */
  size?: number
}

const defaultSize = 50

/**
 * Displays the specified avatar image for a user
 */
const Avatar = ({ size, name }: AvatarProps) => {
  const sizeOrDefault = size || defaultSize
  return (
    <img
      src={`http://place-hoff.com/${sizeOrDefault.toString()}/${sizeOrDefault.toString()}`}
      width={size}
      height={size}
      alt={name ? `avatar image for ${name}` : 'avatar image'}
      />
  )
}

Avatar.defaultProps = {
  size: defaultSize
}

export default Avatar
