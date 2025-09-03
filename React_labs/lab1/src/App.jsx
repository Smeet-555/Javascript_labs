// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './practice programs/practise1.css';
// import {Header, Hero , Footer, Form } from './practice programs/practise1'

// import FacultyList from "./practice programs/lab17/program1";
// import StudentList from "./practice programs/lab17/program2";
// import ProductList from "./practice programs/lab17/program3";


// import Parent  from "./practice programs/lab18/program1";
// import B from "./practice programs/lab18/program2";


// import Home from "./practice programs/lab19/home";
// import { Header, Footer } from "./practice programs/lab19/header";
// import  Page1  from "./practice programs/lab19/page1"
// import  Page2  from "./practice programs/lab19/page2"


// import UseState from "./practice programs/lab20/useState";
import UseEffect from "./practice programs/lab20/useEffect";

// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
function App() {
  return (
    
    <>
    {/* LAB17 PROGRAM1 */}
     {/* <div>
      <FacultyList />
    </div> */}
    {/* LAB17 PROGRAM2 */}
    {/* <div>
      <StudentList/>
    </div> */}
    {/* LAB17 PROGRAM3 */}
    {/* <div>
      <ProductList/>
    </div> */}

    {/* LAB 18 PROGRAM1 */}
      {/* <div>
      <Parent/>
    </div> */}
      

      {/* LAB 19 */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter> */}

        {/* LAB 20 */}
          {/* <UseState/> */}
             <UseEffect/>
         
    </>
  );
}



export default App
