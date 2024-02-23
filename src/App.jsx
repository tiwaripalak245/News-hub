import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Carousel from './components/Carousel'
import { NewsProvider } from './context/NewsContext'
import { QuoteProvider } from './context/QuoteContext'
import { WeatherProvider } from './context/Weather/WeatherContext'

const App = () => {
  return (
    <Router>
    <NewsProvider>
   <QuoteProvider>
   <WeatherProvider>
   <Navbar/>
    <Carousel/>
 <div className="container p-4">
 <Routes>
    <Route path='*' element={<PageNotFound/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
 </div>
   </WeatherProvider>
   </QuoteProvider>
    </NewsProvider>
    </Router>
  )
}

export default App
