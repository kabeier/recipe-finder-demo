import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
// Bootstrap's stylesheet. react-bootstrap components only look right with it loaded.
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* The router decides which page to show from the address bar. */}
    <RouterProvider router={router} />
  </StrictMode>,
)
