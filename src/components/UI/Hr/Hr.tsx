import React from 'react'
import { styled } from 'styled-components/native'

const HrBlock = styled.View`
  padding: 4px 0;
  height: 1px;
  border-bottom-width: 1px;
  border-color: silver;
`

export default function Hr() {
  return (
    <HrBlock>
    </HrBlock>
  )
}