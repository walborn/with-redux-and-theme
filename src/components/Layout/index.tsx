import * as React from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from 'src/components/Navigation'

const Layout: React.FC = () => (
  <>
    <Navigation />
    <main>
      <Outlet />
    </main>
  </>
)

export default Layout
