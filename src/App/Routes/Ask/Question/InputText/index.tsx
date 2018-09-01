import * as React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import styled from 'styled-components'

import { ColorBackground, Size } from '../../../../../Style'
import { ActionQuestion, IStore } from '../../../../Store'

const TextArea = styled.textarea`
  width: 100%;

  padding: 0.5rem 1rem;

  font-size: 1rem;
  font-weight: lighter;
  background-color: rgba(255, 255, 255, 0.36);
  border-radius: ${Size.RADIUS};
  border-width: 0;
  outline: 0;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.16);

  resize: none;

  transition-property: background-color, box-shadow;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.84);
  }

  &:hover {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.36);
  }

  &:focus {
    box-shadow: 0 0 0 1px ${ColorBackground.ENABLE};
  }
`

const Layout = styled.div``

interface IPropsState {
  readonly text: string
}

interface IPropsDispatch {
  readonly clearQuestion: () => void
  readonly changeQuestion: (text: string) => void
}

type IProps = IPropsState & IPropsDispatch

class InputTextLayout extends React.Component<IProps> {
  public render(): JSX.Element {
    return (
      <Layout>
        <TextArea
          minLength={1}
          required={true}
          spellCheck={false}
          autoComplete='off'
          placeholder='프로그래밍은 재미있나요?'
          rows={3}
          onChange={this.onChange}
          value={this.props.text}
        />
      </Layout>
    )
  }

  public componentDidMount(): void {
    this.props.clearQuestion()
  }

  private onChange: React.ChangeEventHandler<HTMLTextAreaElement> = event => {
    const text = event.currentTarget.value
    this.props.changeQuestion(text)
  }
}

const mapStateToProps: MapStateToProps<IPropsState, void, IStore> = store => ({
  text: store.Question.text
})

const mapDispatchToProps: MapDispatchToProps<
  IPropsDispatch,
  void
> = dispatch => ({
  clearQuestion() {
    dispatch(ActionQuestion.clear())
  },
  changeQuestion(text) {
    dispatch(ActionQuestion.change({ text }))
  }
})

export const InputText = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTextLayout)
