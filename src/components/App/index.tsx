import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from 'src/components/Layout'
import Home from 'src/pages/Home'
import NoMatch from 'src/pages/NoMatch'

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
)

export default App
