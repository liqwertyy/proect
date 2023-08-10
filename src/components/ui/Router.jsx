import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Catalog from '../Main/Catalog';
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} /> 
        <Route path='/catalog' element={<Catalog/>} /> 
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
