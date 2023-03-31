import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Ruler/Header";
import Footer from "./Dashboard/Footer";
import Side from "./Ruler/Side";
import Main from "./Ruler/Main";
import styles from './Ruler/main.module.css'
import dev from './Dashboard/dev.json'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./Dashboard/settings";
import Index from "./PHP";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<>


<Index/>

{/* <div className={styles.app}>
  <Header/>
<div className={styles.content}>
  <Side/>
 <BrowserRouter>
  <Routes>
    <Route path="/" element={ <Main data={dev}/>}></Route>
    <Route path="/settings/:id/:name" element={<Settings/>}></Route>
  </Routes>
 </BrowserRouter>
</div>
<Footer/>
</div> */}


</>



  // <BrowserRouter>
  // <div className={styles.app}>
  //   <Sidebar />
  //   <div className={styles.wrapper_content}>
  //     <Header />
  //     <Profile/>
  //     <Footer/>

    
  //       <Routes>
  //         <Route path="/footer" element={<Footer/>}/>
  //         <Route path="/Test" element={<Test/>}/>
  //       </Routes>
     
  //   </div>
  // </div>
  // </BrowserRouter>
);


