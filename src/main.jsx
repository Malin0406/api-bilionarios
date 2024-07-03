import React from 'react'
import ReactDOM from 'react-dom/client'
import Top3 from '../src/pages/page-top-3.jsx/top-3'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Top3 />
  </React.StrictMode>,
)
