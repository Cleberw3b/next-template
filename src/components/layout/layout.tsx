import Nav from "./nav"
import Footer from "./footer"
import { FunctionComponent } from "react"

interface IProps {
  children: React.ReactNode
}

const Layout: FunctionComponent<IProps> = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
)

export default Layout