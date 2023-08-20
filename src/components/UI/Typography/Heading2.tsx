import React, { ReactNode } from 'react'
import { styled } from 'styled-components/native'

interface Heading2Props {
  children: ReactNode;
}

const Head2 = styled.Text`
  font-size: 20px;
`

export default function Heading2({ children }: Heading2Props) {
  return (
    <Head2>{children}</Head2>
  )
}

