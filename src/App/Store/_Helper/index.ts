import immer, { Draft } from 'immer'
import { Action } from 'redux'

export interface IAction<IAction> {
  readonly type: string
  readonly payload: IAction
}

export type Handler<IEnum extends string, IState> = {
  readonly [key in IEnum]: (
    draft: Draft<IState>,
    action: IAction<unknown>
  ) => void
}

type IReducer<IState> = (state: IState, action: Action) => IState

type ActionCreator = <IEnum extends string, IState>(
  initialState: IState,
  handler: Handler<IEnum, IState>
) => IReducer<IState>

export const actionCreator: ActionCreator = (initialState, handler) => (
  state = initialState,
  action
) =>
  immer(
    state,
    draft =>
      handler.hasOwnProperty(action.type)
        ? handler[action.type](draft, action)
        : state || draft
  )

export type ActionBuilder = <IPayload>(
  type: string
) => (payload?: IPayload) => IAction<IPayload>

export const actionBuilder: ActionBuilder = type => payload => ({
  type,
  payload: payload!
})
