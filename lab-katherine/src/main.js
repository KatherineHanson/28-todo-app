import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'
import 'core-js/es6/map'
import 'core-js/es6/set'

const container = document.createElement('div')
document.body.appendChild(container)
ReactDom.render(<App />, container)
