import { BrowserRouter, Routes , Route} from "react-router-dom";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar"
import Second from "./component/Second";
export default function App() {
  return (
    <div >
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/second' element={<Second />} /> 
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

