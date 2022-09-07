import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './styles/Global';
import App from './App'

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
