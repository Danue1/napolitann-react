import * as React from 'react'
import styled from 'styled-components'

import { ColorBackground, Size } from '../../../../../Style'

interface IPropsLayout {
  readonly isActive: boolean
}

const Layout = styled.li<IPropsLayout>`
  padding: 1rem 1.5rem;

  font-weight: bolder;
  color: ${({ isActive }) =>
    isActive ? 'rgba(0, 0, 0, 0.84)' : 'rgba(0, 0, 0, 0.36)'};
  border-radius: ${Size.RADIUS};
  border-bottom: 2px solid
    ${({ isActive }) => (isActive ? ColorBackground.ENABLE : 'transparent')};

  transition-property: border-bottom-color;

  ${({ isActive }) =>
    !isActive &&
    `
  &:hover {
    border-bottom-color: ${ColorBackground.HOVER};
  }
  `};
`

export interface IProps {
  readonly text: string
  readonly url: string
  readonly changeUrl: React.MouseEventHandler<HTMLLIElement>
}

export const Element: React.SFC<IProps> = ({ text, url, changeUrl }) => {
  const isActive = window.location.pathname === url

  return (
    <Layout isActive={isActive} onClick={changeUrl}>
      {text}
    </Layout>
  )
}
