import React from 'react'
import ReactDOM from 'react-dom/client'
import { TasksReducer } from './components'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksReducer/>
  </React.StrictMode>,
)
