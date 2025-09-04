import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile' 
import Counter from './components/Counter'
import React from 'react'

const App = () => {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Counter/> 
      <Footer />
    </div>
  )
}

export default App
