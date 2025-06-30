import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'

import Home from './Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <div>

  <StrictMode>
<Home></Home>
  </StrictMode>,
  </div>
)
