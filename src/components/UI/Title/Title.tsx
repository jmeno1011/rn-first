import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { Heading1 } from '../Typography';
import { styled } from 'styled-components/native';

interface TitlProps {
  children: ReactNode;
}

const TitleBlock = styled.View`
  padding: 16px;
`

export default function Title({ children }: TitlProps) {
  return (
    <TitleBlock>
      <Heading1>{children}</Heading1>
    </TitleBlock>
  )
}

