import * as React from 'react'
import { RouteComponentProps, StaticContext, withRouter } from 'react-router'
import styled from 'styled-components'

import { Element, IProps as IPropsElement } from './Element'

interface IPropsLayout {
  readonly countElement: number
}

const Layout = styled.ul<IPropsLayout>`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(
    ${({ countElement }) => countElement},
    min-content
  );

  text-transform: capitalize;
`

type IElement = Pick<IPropsElement, 'text' | 'url'>
const elementList: IElement[] = [
  { text: 'ask', url: '/ask' },
  { text: 'admin', url: '/admin' }
]

type IProps = RouteComponentProps<void, StaticContext>

export const TabList = withRouter<IProps>(({ history }) => (
  <Layout countElement={elementList.length}>
    {elementList.map(({ text, url }, index) => (
      <Element
        text={text}
        url={url}
        key={index}
        changeUrl={() => history.replace(url)}
      />
    ))}
  </Layout>
))
