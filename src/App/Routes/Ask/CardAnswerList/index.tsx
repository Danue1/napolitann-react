import * as React from 'react'
import styled from 'styled-components'

import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { ActionAnswer, IStore } from '../../../Store'
import { CardAnswer, IProps as ICard } from './CardAnswer'
import { cardList } from './dummy'

const Layout = styled.section`
  display: grid;
  grid-gap: 1rem;
`

export type ICardList = ICard[]

interface IPropsState {
  readonly cardList: ICardList
}

interface IPropsDispatch {
  readonly clearAnswerList: () => void
  readonly addAnswerList: (cardList: ICardList) => void
}

type IProps = IPropsState & IPropsDispatch

export class CardAnswerListLayout extends React.Component<IProps> {
  public render(): JSX.Element {
    return (
      <Layout>
        {this.props.cardList.map(({ question, answer }) => (
          <CardAnswer
            question={question}
            answer={answer}
            key={question.time.getTime()}
          />
        ))}
      </Layout>
    )
  }

  public componentDidMount(): void {
    this.props.addAnswerList(cardList)
  }

  public componentWillUnmount(): void {
    this.props.clearAnswerList()
  }
}

const mapStateToProps: MapStateToProps<IPropsState, void, IStore> = store => ({
  cardList: store.Answer.list
})

const mapDispatchToProps: MapDispatchToProps<
  IPropsDispatch,
  void
> = dispatch => ({
  clearAnswerList() {
    dispatch(ActionAnswer.clear())
  },
  addAnswerList(list) {
    dispatch(ActionAnswer.addList({ list }))
  }
})

export const CardAnswerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardAnswerListLayout)
