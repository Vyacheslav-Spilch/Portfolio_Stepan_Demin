import React from 'react'
import ReactDOM from 'react-dom/client'
//@ts-ignore
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter >
      <App />
  </BrowserRouter>
  ,
)
