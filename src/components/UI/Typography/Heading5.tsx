import React, { ReactNode } from 'react'
import { styled } from 'styled-components/native'

interface Heading5Props {
  children: ReactNode;
}

const Head5 = styled.Text`
  font-size: 14px;
`

export default function Heading5({ children }: Heading5Props) {
  return (
    <Head5>{children}</Head5>
  )
}

