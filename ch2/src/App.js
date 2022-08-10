import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Post from "./components/post";
import PostLayout from "./components/PostLayout";
import PostDetails from "./components/postDeatils";

function App() {
  return (
    <>
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="post" element={<PostLayout/>}>
          <Route path=":category" element={<PostDetails></PostDetails>}/>
          <Route index element={<Post></Post>}/>
        </Route>
        <Route index element={<Home/>}></Route>
      
      </Route>
<Route path="*" element={<h1>error 404 page</h1>}></Route>
   </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
