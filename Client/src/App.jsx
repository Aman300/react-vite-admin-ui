
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import Login from "./views/auth/Login";
import Home from "./views/home/Home";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
          
          <Route path='/login' element={<Login />} />
          {/* <Route path='/signup' element={<Signup />} /> */}

          <Route>
          <Route
            path="/"
            element={
              <div>
                {/* <Sidebar /> */}
                <div>
                  <Outlet /> 
                </div>
                {/* <Footer/> */}
              </div>
            }
          >
            <Route path="/" element={<Home />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            
          </Route>
        </Route>

        </Routes>
        
      </BrowserRouter>
    </>
  )
}