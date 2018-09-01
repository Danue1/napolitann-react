import * as React from 'react'
import styled from 'styled-components'

import { Left } from './Left'
import { Right } from './Right'

const Layout = {
  Root: styled.div`
    display: grid;
    align-items: flex-end;
    grid-template: 'Left Right' / min-content 1fr;

    max-width: 80rem;
    width: 100%;
  `,
  Left: styled.div`
    grid-area: Left;
  `,
  Right: styled.div`
    grid-area: Right;
    justify-self: self-end;
  `
}

export const Header: React.SFC = () => (
  <Layout.Root>
    <Layout.Left>
      <Left />
    </Layout.Left>
    <Layout.Right>
      <Right />
    </Layout.Right>
  </Layout.Root>
)
