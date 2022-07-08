import React from 'react'
import ReactDOM from 'react-dom/client'
import { Padre } from './07-tarea-memo/Padre'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { MemoHook } from './06-memos/MemoHook'
//import { Memorize } from './06-memos/Memorize'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustmonHook } from './01-useState/CounterWithCustmonHook'
//import { HooksApp } from './HooksApp'
//import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>    
    <TodoApp />
  //</React.StrictMode>
)
