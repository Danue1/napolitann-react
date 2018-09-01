import * as React from 'react'
import styled from 'styled-components'

import { ColorBackground, Size } from '../../../../../Style'
import { Field, IField } from './Field'

const Layout = styled.article`
  display: grid;
  grid-gap: 1.5rem;

  padding: 1rem;

  background-color: rgba(255, 255, 255, 0.36);
  border-radius: ${Size.RADIUS};
  box-shadow: 0 0 0 1px ${ColorBackground.HOVER};

  transition-property: background-color, box-shadow;

  &:hover {
    background-color: rgba(255, 255, 255, 0.84);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.36);
  }
`

export interface IProps {
  readonly question: IField
  readonly answer: IField
}

export const CardAnswer: React.SFC<IProps> = ({ question, answer }) => (
  <Layout>
    <Field field={question} />
    <Field field={answer} />
  </Layout>
)
