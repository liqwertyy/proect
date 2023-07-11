import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Main} />     
           <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};