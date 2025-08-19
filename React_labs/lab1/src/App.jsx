// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './practice programs/practise1.css';
// import {Header, Hero , Footer, Form } from './practice programs/practise1'

import FacultyList from "./practice programs/lab17/program1";
import StudentList from "./practice programs/lab17/program2";
import ProductList from "./practice programs/lab17/program3";



function App() {
  return (
    
    <>

    {/* LAB17 PROGRAM1 */}
     <div>
      <FacultyList />
    </div>
    {/* LAB17 PROGRAM2 */}
    <div>
      <StudentList/>
    </div>
    {/* LAB17 PROGRAM3 */}
    <div>
      <ProductList/>
    </div>
    </>
  );
}



export default App
