import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// On React, we import our CSS straight into our JavaScript file, which is read by Vite afterwards

import './global.css'


// Selects what element in our HTML is going to receive our React app content

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
