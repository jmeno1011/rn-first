import React, { ReactNode } from 'react'
import { styled } from 'styled-components/native'

interface Heading4Props {
  children: ReactNode
}

const Head4 = styled.Text`
  font-size: 16px;
`

export default function Heading4({ children }: Heading4Props) {
  return (
    <Head4>{children}</Head4>
  )
}

