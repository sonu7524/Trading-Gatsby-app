import * as React from "react"
import Header from "./Header"
import MainContent from "./MainContent"
const Layout = ({ location, title, children }) => {

  return (
    <div className="global-wrapper">
        <Header />
        <MainContent />
    </div>
  )
}

export default Layout