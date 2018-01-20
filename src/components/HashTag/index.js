import React from 'react'
import styled from 'styled-jss'

type HashTagProps = {
  value: string,
}

const TagLink = styled('a')({
  fontWeight: 'bold'
})

const HashTag = ({ value }: HashTagProps) => (
  <TagLink href={value}>{value}</TagLink>
)

export default HashTag
