import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { PhotosContextProvider } from './contexts/PhotosContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhotosContextProvider>
      <BrowserRouter>
        <App />  
      </BrowserRouter>
    </PhotosContextProvider>
  </React.StrictMode>
)
