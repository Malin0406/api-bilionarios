import React from 'react'
import ReactDOM from 'react-dom/client'
import Top3 from '../src/pages/page-top-3.jsx/top-3'
import Home from '../src/pages/home/home.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Top3 />
  </React.StrictMode>,
)
