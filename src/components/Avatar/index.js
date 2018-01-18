import React from 'react'

type AvatarProps = {
  /** Optionally specify the avatar size, or it will use the default */
  size?: number
}

/**
 * Displays the specified avatar image for a user
 */
const Avatar = ({ size }: AvatarProps) => (
  <img src={`http://place-hoff.com/${size}/${size}`} width={size} height={size} />
)

Avatar.defaultProps = {
  size: 50
}

export default Avatar
