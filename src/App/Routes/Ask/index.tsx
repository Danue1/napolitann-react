import * as React from 'react'
import styled from 'styled-components'

import { Size } from '../../../Style'
import { CardAnswerList } from './CardAnswerList'
import { Question } from './Question'

const Layout = {
  Root: styled.div`
    display: grid;
    grid-gap: 2rem;
    justify-content: center;
    grid-template:
      'Top'
      'Bottom'
      / minmax(min-content, 80rem);

    height: calc(100% - ${Size.HEIGHT_HEADER});

    margin-top: 2rem;
  `,
  Top: styled.div`
    grid-area: Top;

    max-width: 80rem;
    width: 100%;
  `,
  Bottom: styled.div`
    grid-area: Bottom;

    max-width: 80rem;
    width: 100%;
    height: 100%;
  `
}

export const Ask: React.SFC = () => (
  <Layout.Root>
    <Layout.Top>
      <Question />
    </Layout.Top>
    <Layout.Bottom>
      <CardAnswerList />
    </Layout.Bottom>
  </Layout.Root>
)
