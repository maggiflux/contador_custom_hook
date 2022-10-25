import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterWithCustomHooks } from './components/CounterWithCustomHooks';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHooks/>
  </React.StrictMode>
)
