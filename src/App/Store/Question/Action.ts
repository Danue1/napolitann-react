import { actionBuilder } from '../_Helper'
import { IPayloadQuestionChange } from './Reducer'
import { QUESTION } from './Type'

export const Action = {
  clear: actionBuilder(QUESTION.CLEAR),
  change: actionBuilder<IPayloadQuestionChange>(QUESTION.CHANGE)
}
