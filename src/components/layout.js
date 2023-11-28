import * as React from "react"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
const Layout = ({ location, title, children }) => {

  return (
    <div className="global-wrapper">
        <Header />
        <MainContent />
        <Footer />
    </div>
  )
}

export default Layout