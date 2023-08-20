import React, { ReactNode } from 'react'
import { styled } from 'styled-components/native'

interface Heading1Props {
  children: ReactNode;
}

const Head1 = styled.Text`
  font-size: 24px;
`

export default function Heading1({ children }: Heading1Props) {
  return (
    <Head1>{children}</Head1>
  )
}

