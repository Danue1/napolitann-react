import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import { Store } from './Store'

import { Root } from './Root'
import { Routes } from './Routes'

const Layout = styled.div`
  height: 100%;
`

export const App: React.SFC = () => (
  <Layout>
    <BrowserRouter>
      <Provider store={Store}>
        <Root>
          <Routes />
        </Root>
      </Provider>
    </BrowserRouter>
  </Layout>
)
