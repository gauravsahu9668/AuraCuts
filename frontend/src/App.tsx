
import Home from "./Home/Home"
import { Route,Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/signup/:id' element={<SignUp></SignUp>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
    </>
  )
}

export default App
