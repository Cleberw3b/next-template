import Nav from "./nav";
import Footer from "./footer";
import { FunctionComponent } from "react";

interface IProps {

}

const Layout: FunctionComponent<IProps> = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout