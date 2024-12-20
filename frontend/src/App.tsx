
import Home from "./Home/Home"
import { Route,Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Contact from "./components/ContactUs/Contact"
import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop"
import { Toaster } from "react-hot-toast"
import Otp from "./components/otp"

function App() {
  return (
    <>
    <ScrollToTop>
      <Navbar></Navbar>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup/:id' element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/otp" element={<Otp/>}></Route>
      </Routes>
    </ScrollToTop>
    </>
  )
}

export default App
