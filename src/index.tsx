import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './App'
import { Style } from './Style'

import registerServiceWorker from './registerServiceWorker'

Style.clearfix()

const app = <App />
const Root = window.document.getElementById('Root') as HTMLElement
ReactDOM.render(app, Root)
registerServiceWorker()
