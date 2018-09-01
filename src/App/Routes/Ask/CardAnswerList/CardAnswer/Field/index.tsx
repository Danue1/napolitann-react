import * as React from 'react'
import styled from 'styled-components'

import { transposeTime } from './transposeTime'

const Heading = styled.div`
  color: rgba(0, 0, 0, 0.84);
`

const Time = styled.div`
  font-size: 0.75rem;
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.36);
`

const Layout = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`

export interface IField {
  readonly text: string
  readonly time: Date
}

interface IProps {
  readonly field: IField
}

export const Field: React.SFC<IProps> = ({ field }) => (
  <Layout>
    <Heading>{field.text}</Heading>
    <Time>{transposeTime(field.time)}</Time>
  </Layout>
)
