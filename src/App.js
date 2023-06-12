import React from 'react'
import Footer from './components/Footer'
import SiteHeader from './components/SiteHeader'
import Content from './components/Content'
import Intro from './jsxSample/Intro'
import MapSample2 from './jsxSample/MapSample2'
import MapSample3 from './jsxSample/MapSample3'
import JsxEvents from './jsxSample/JsxEvents'
import CssIntro from './cssSample/CssIntro'
import Navbar from './template/Navbar'
import Header from './template/Header'
import PageContent from './template/PageContent'
import SiteFooter from './template/SiteFooter'



function App() {
  return (
    <>
  <Navbar></Navbar>
  <Header></Header>
  <PageContent></PageContent>
  <SiteFooter></SiteFooter>
    </>
  )
}

export default App