import Home from "./Home/Home"
import { Route,Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Contact from "./components/ContactUs/Contact"
import ScrollToTop from "./components/ScrollToTop"
import { Toaster } from "react-hot-toast"
import ProfileMainPage from "./Shopkeeper/ProfileSteps/ProfileMainPage"
import { useSelector } from "react-redux"
import Navbar from "./components/Navbar"
import ShopHome from "./Shopkeeper/ShopHome"
import ShopNavbar from "./Shopkeeper/ShopNavbar"
function App() {
  const {token,user}=useSelector((state:any)=>state.auth)
    return (
      <>
      <ScrollToTop>
      <Toaster position="top-center" reverseOrder={false} />
      {
        token==="" ? <Navbar></Navbar>
        : <ShopNavbar></ShopNavbar>

      }
      {
        token==="" ?
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup/:id' element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        :
        <>
        {
          user==="shopkeeper"? 
          <Routes>
        <Route path='/' element={<ShopHome></ShopHome>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path='/profilebuilder' element={<ProfileMainPage></ProfileMainPage>}></Route>
        </Routes>
        :
        <Routes>
        <Route path='/' element={<div>hii everyone</div>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        }
        </>
      }
    </ScrollToTop>
      </>
    );
}

export default App
