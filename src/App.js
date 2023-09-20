import React, { useState } from 'react';
import { slides } from "./Banner/CarouselData";
import Navbar from "./Navbar/navbar.jsx";
import { Carousel } from './Banner/Carousel';
import DataGrid from "./DataGrid/DataGrid";
import { createContext } from 'react';
import SearchForm from './SearchForm/SearchForm';
import Footer from './Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

export const DataParentContext = createContext();


const App = () => {
  const [data, setData] = useState([]);
  return (
    <DataParentContext.Provider value={{ data, setData }} >
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/DataGrid' element={<DataGrid />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataParentContext.Provider>
  )
}

export default App  