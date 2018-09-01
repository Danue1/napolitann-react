import { actionBuilder } from '../_Helper'
import { IPayloadAnswerAddList } from './Reducer'
import { ANSWER } from './Type'

export const Action = {
  clear: actionBuilder(ANSWER.CLEAR),
  addList: actionBuilder<IPayloadAnswerAddList>(ANSWER.ADD_LIST)
}
