
import Home from "./Home/Home"
import { Route,Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/signup/:id' element={<SignUp></SignUp>}></Route>
    </Routes>
    </>
  )
}

export default App
