import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { MysteryContextProvider } from './contexts/MysteryContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MysteryContextProvider>
        <App />
      </MysteryContextProvider>  
    </BrowserRouter>
  </React.StrictMode>
)
