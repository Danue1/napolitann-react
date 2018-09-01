import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import styled from 'styled-components'

import { Admin } from './Admin'
import { Ask } from './Ask'
import { Oops } from './Oops'

const Layout = styled.div`
  height: 100%;
`

export const Routes: React.SFC = () => (
  <Layout>
    <Switch>
      <Redirect path='/' exact={true} to='/ask' />
      <Route path='/ask' exact={true} component={Ask} />
      <Route path='/admin' exact={true} component={Admin} />
      <Route path='/oops' exact={true} component={Oops} />
      <Redirect to='/oops' />
    </Switch>
  </Layout>
)
