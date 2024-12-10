
import Home from "./Home/Home"
import { Route,Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Contact from "./components/ContactUs/Contact"
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/signup/:id' element={<SignUp></SignUp>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
    </>
  )
}

export default App
