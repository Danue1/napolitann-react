import * as React from 'react'
import styled from 'styled-components'

import { TabList } from './TabList'

const Layout = styled.nav``

export const Left: React.SFC = () => (
  <Layout>
    <TabList />
  </Layout>
)
