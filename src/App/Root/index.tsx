import * as React from 'react'
import styled from 'styled-components'

import { ColorBackground, Size } from '../../Style'
import { Footer } from './Footer'
import { Header } from './Header'

const Layout = {
  Root: styled.div`
    display: grid;
    grid-template:
      'Header' min-content
      'Guard' 1fr
      / 100vw;

    height: 100vh;
  `,
  Header: styled.header`
    grid-area: Header;
    display: flex;
    justify-content: center;

    background-color: rgba(255, 255, 255, 1);
    border-radius: ${Size.RADIUS};
    border-top: 2px solid ${ColorBackground.ENABLE};
    box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.16);
  `,
  Guard: styled.div`
    overflow-y: auto;

    grid-area: Guard;
    display: grid;
    justify-content: center;
    grid-gap: 1rem;
  `
}

export const Root: React.SFC = ({ children }) => (
  <Layout.Root>
    <Layout.Header>
      <Header />
    </Layout.Header>
    <Layout.Guard>
      {children}
      <Footer />
    </Layout.Guard>
  </Layout.Root>
)
