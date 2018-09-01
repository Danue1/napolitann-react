import { actionCreator, IAction } from '../_Helper'
import { ANSWER } from './Type'

import { ICardList } from '../../Routes/Ask/CardAnswerList'

export interface IState {
  readonly list: ICardList
}

const initialState: IState = {
  list: []
}

export interface IPayloadAnswerAddList {
  readonly list: ICardList
}

export const Reducer = actionCreator<ANSWER, IState>(initialState, {
  [ANSWER.CLEAR](draft, _action) {
    draft.list = []
  },
  [ANSWER.ADD_LIST](draft, action: IAction<IPayloadAnswerAddList>) {
    draft.list = action.payload.list
  }
})
