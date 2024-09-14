import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import User_Info from './Components/User_Info/User_Info';
import Address_Info from './Components/Address_Info/Address_Info';


function App() {
  return (
    <>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="" element={<Header />} /> 
          <Route path="/User_Info" element={<User_Info />} /> 
          <Route path="/Address_Info" element={<Address_Info />} /> 
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
