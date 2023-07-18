import React from 'react'
import Navigation from './Components/Nav';
import Content from './Components/Content';
import Navfooter from './Components/myFooter';
const App = () => {
  return (
    <div>
      <Navigation />
      <Content />
      <Navfooter/>
    </div>
  )
}

export default App