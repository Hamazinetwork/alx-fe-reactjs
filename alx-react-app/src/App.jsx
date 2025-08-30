import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import React from 'react'

const App = () => {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent /> 
      <Footer />
    </div>
  )
}

export default App
