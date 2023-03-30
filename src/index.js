import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import reportWebVitals from "./reportWebVitals";
import Profile from './components/Profile'
// import Test from './Test';
// import Footer from './components/Footer'
import { Route,BrowserRouter,Routes,Router} from "react-router-dom";
import Test from "./components/Test";
import Login from "./auth/components/Login";
import { Buttons,ProgressBar,CheckBoxes,Texts,FABACTIONS,Selections } from "./Materials/CrashMaterialIcon";
import Header from "./Dashboard/Header";
import Footer from "./Dashboard/Footer";
import Side from "./Dashboard/Side";
import Main from "./Dashboard/Main";
import styles from  "./Dashboard/main.module.css";
import dev from './Dashboard/dev.json'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<>
<div className={styles.app}>
  <Header/>
<div className={styles.content}>
  <Side/>
  <Main data={dev}/>
</div>
<Footer/>
</div>


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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
