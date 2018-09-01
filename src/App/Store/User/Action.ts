import { actionBuilder } from '../_Helper'
import { IPayloadLogin } from './Reducer'
import { USER } from './Type'

export const Action = {
  login: actionBuilder<IPayloadLogin>(USER.LOGIN),
  logout: actionBuilder<null>(USER.LOGOUT)
}
