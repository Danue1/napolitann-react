import { actionCreator, IAction } from '../_Helper'
import { QUESTION } from './Type'

export interface IState {
  readonly text: string
}

const initialState: IState = {
  text: ''
}

export interface IPayloadQuestionChange {
  readonly text: string
}

export const Reducer = actionCreator<QUESTION, IState>(initialState, {
  [QUESTION.CLEAR](draft, _action) {
    draft.text = ''
  },
  [QUESTION.CHANGE](draft, action: IAction<IPayloadQuestionChange>) {
    draft.text = action.payload.text
  }
})
