import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import AddTodo from "./components/AddTodo"

function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App