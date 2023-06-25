
// import './App.css';

import { AboutUs } from "./components/AboutUs";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Services } from "./components/Services";

function App() {
  return (
    <div className="">
     <Navbar/>
     <Header/>
     <Services/>
     <AboutUs/>
     <Pricing/>
    </div>
  );
}

export default App;
