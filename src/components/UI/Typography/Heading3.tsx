import React, { ReactNode } from 'react'
import { styled } from 'styled-components/native'

interface Heading3Props {
  children: ReactNode;
}

const Head3 = styled.Text`
  font-size: 18px;
`

export default function Heading3({ children }: Heading3Props) {
  return (
    <Head3>{children}</Head3>
  )
}

