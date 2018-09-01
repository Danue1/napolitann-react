import { actionBuilder } from '../_Helper'
import { IPayloadUrlChange } from './Reducer'
import { URL } from './Type'

export const Action = {
  clear: actionBuilder(URL.CLEAR),
  changeUrl: actionBuilder<IPayloadUrlChange>(URL.CHANGE_URL)
}
