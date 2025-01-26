import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import { ToastContainer } from 'react-toastify';
import Loader from "./Custom/Loader";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Testimonials />
        <Services />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact setLoading={setLoading}/>
      </main>
      <ToastContainer />
      {loading && <Loader loading={loading} />}
    </>
  );
}

export default App;
