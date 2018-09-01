import { actionCreator, IAction } from '../_Helper'
import { URL } from './Type'

export interface IState {
  readonly current: string
}

const initialState: IState = {
  current: ''
}

export interface IPayloadUrlChange {
  readonly url: string
}

export const Reducer = actionCreator<URL, IState>(initialState, {
  [URL.CLEAR](draft, _action) {
    draft.current = ''
  },
  [URL.CHANGE_URL](draft, action: IAction<IPayloadUrlChange>) {
    draft.current = action.payload.url
  }
})
