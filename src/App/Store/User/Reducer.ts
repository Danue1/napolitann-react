import { actionCreator, IAction } from '../_Helper'
import { USER } from './Type'

export interface IState {
  readonly uuid: string
  readonly id: string
  readonly nickname: string
}

const initialState: IState = {
  uuid: '',
  id: '',
  nickname: ''
}

export type IPayloadLogin = Pick<IState, 'uuid' | 'id' | 'nickname'>

export const Reducer = actionCreator<USER, IState>(initialState, {
  [USER.LOGIN](draft, action: IAction<IPayloadLogin>) {
    draft.uuid = action.payload.uuid
    draft.id = action.payload.id
    draft.nickname = action.payload.nickname
  },
  [USER.LOGOUT](draft, _action: IAction<null>) {
    draft.uuid = initialState.uuid
    draft.id = initialState.id
    draft.nickname = initialState.nickname
  }
})
