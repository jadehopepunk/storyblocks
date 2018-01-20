// @flow
import React from 'react'
import styled from 'styled-jss'

type NameLinkProps = {
  id: string,
  name: string
}

const Link = styled('header')({
  color: '#444444',
  fontWeight: 'bold',
  '&:hover': {
    textDecoration: 'underline'
  }
})

const NameLink = ({ id, name }: NameLinkProps) => (
  <Link href={id} className='ProfileLink'>{name}</Link>
)

export default NameLink
