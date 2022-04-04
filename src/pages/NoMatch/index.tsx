import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <div>
    <h1>Page Not Found</h1>
    <h2>We could not find what you were looking for.</h2>
    <p>
      <Link to="/">Go to the home page</Link>
    </p>
  </div>
)

export default NoMatch
