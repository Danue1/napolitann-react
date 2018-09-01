import * as React from 'react'
import styled from 'styled-components'

import { Handle } from './Handle'
import { Heading } from './Heading'
import { InputText } from './InputText'

const Layout = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`

export const Question: React.SFC = () => (
  <Layout>
    <Heading />
    <InputText />
    <Handle />
  </Layout>
)
