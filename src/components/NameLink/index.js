// @flow
import React from 'react'

type NameLinkProps = {
  id: string,
  name: string
}

const NameLink = ({ id, name }: NameLinkProps) => (
  <a href={id} className='ProfileLink'>{name}</a>
)

export default NameLink
