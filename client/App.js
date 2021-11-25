import React from 'react'
import WebRoutes from './Routes'
import Navbar from './components/Navbar'

class App extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <WebRoutes />
      </div>
    )
  }
}

export default App
