import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)
