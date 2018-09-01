import { combineReducers, createStore } from 'redux'

import { IState as StateAnswer, ReducerAnswer as Answer } from './Answer'
import {
  IState as StateQuestion,
  ReducerQuestion as Question
} from './Question'
import { IState as StateUrl, ReducerUrl as Url } from './Url'
import { IState as StateUser, ReducerUser as User } from './User'

const combinedReducers = combineReducers({ User, Url, Question, Answer })

declare var window: any

type EnableReduxDevTools = () => any
const enableReduxDevTools: EnableReduxDevTools = () => {
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    return window.__REDUX_DEVTOOLS_EXTENSION__()
  }
}

export const Store = createStore(combinedReducers, enableReduxDevTools())

export interface IStore {
  readonly Url: StateUrl
  readonly User: StateUser
  readonly Question: StateQuestion
  readonly Answer: StateAnswer
}

export { ActionUrl } from './Url'
export { ActionUser } from './User'
export { ActionQuestion } from './Question'
export { ActionAnswer } from './Answer'
