import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Bootstrap's stylesheet. react-bootstrap components only look right with it loaded.
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
