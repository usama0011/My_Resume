import Header from "./Header"
import Footer from '../components/Footer';
const Layout = ({children}) => {
  return (
  <>
  <Header/>
  {children}
  
  </>
  )
}

export default Layout