 import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Post from "./components/post";
import Dashbord from "./components/Dashboard";
import Login from "./components/Login";
import Logout from "./components/Logout"

let isLogged = true
let data = {
  "st":"User not login"
}

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        {/* <Route path="/" element={<h1>hello react router</h1>}/> */}
        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
        <Route path="/post/:category" element={<Post></Post>}/>
        <Route path="/post/:category/:id" element={<Post></Post>}/>
        <Route path="/logout" element={<Logout></Logout>}/>
        
        <Route path="/login" element={<Login></Login>}/>
        <Route path="dashboard" element={isLogged ? <Dashbord></Dashbord> : <Navigate to="/login" replace state={data}/>}/>
        

        <Route path="*" element={<h1>Error 404 page</h1>}></Route>
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
