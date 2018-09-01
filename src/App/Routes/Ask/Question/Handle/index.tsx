import * as React from 'react'
import { connect, MapStateToProps } from 'react-redux'
import styled from 'styled-components'

import { ColorBackground, Size } from '../../../../../Style'
import { IStore } from '../../../../Store'

interface IPropsCounter {
  readonly color: string
}

const Counter = styled.div<IPropsCounter>`
  grid-area: Counter;

  color: ${({ color }) => color};
`

interface IPropsButtonSubmit {
  readonly backgroundColor: string
  readonly isEnable: boolean
}

const enum Cursor {
  ENABLE = 'pointer',
  DISABLE = 'not-allowed'
}

const ButtonSubmit = styled.div<IPropsButtonSubmit>`
  grid-area: ButtonSubmit;

  padding: 0.5rem 1rem;

  font-weight: bolder;
  color: rgba(255, 255, 255, 0.84);
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${Size.RADIUS};
  box-shadow: 0 0 0 1px ${ColorBackground.NONE};

  transition-property: color, background-color;
  cursor: ${({ isEnable }) => (isEnable ? Cursor.ENABLE : Cursor.DISABLE)};

  &:hover {
    background-color: ${({ backgroundColor }) => backgroundColor};
  }
`

const Layout = styled.div`
  display: grid;
  grid-gap: 1rem;
  justify-content: flex-end;
  align-items: center;
  grid-template:
    'Counter ButtonSubmit'
    / min-content min-content;

  white-space: nowrap;
`

interface IPropsState {
  readonly count: number
}

type IProps = IPropsState

const COUNT_MAX = 140

class HandleLayout extends React.Component<IProps> {
  public render(): JSX.Element {
    const isNone = this.props.count === 0
    const isEnable = this.props.count <= COUNT_MAX
    const backgroundColor = isNone
      ? ColorBackground.NONE
      : isEnable
        ? ColorBackground.ENABLE
        : ColorBackground.DISABLE

    return (
      <Layout>
        <Counter color={backgroundColor}>
          {this.props.count} / {COUNT_MAX}
        </Counter>
        <ButtonSubmit
          isEnable={isEnable && !isNone}
          backgroundColor={backgroundColor}
          onClick={this.onSubmit}
        >
          질문하기
        </ButtonSubmit>
      </Layout>
    )
  }

  private readonly onSubmit: React.MouseEventHandler<HTMLDivElement> = () => {
    console.log('onSubmit')
  }
}

const mapStateToProps: MapStateToProps<IPropsState, void, IStore> = store => ({
  count: store.Question.text.length
})

export const Handle = connect(mapStateToProps)(HandleLayout)
