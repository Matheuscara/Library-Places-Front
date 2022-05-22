import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import PageUnitCategory from './pages/PageUnitCategory/index'
import PagePlace from './pages/PagePlace/index'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/Category/:title" element={<PageUnitCategory />} />
          <Route exact path="/Category/:title/:id" element={<PagePlace />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)
