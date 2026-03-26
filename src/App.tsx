import { useState } from 'react';

import { BrowserRouter, Routes, Route, Link,HashRouter } from 'react-router-dom';
import  {Layout}  from './layout/Layout';
import FridgePage from './features/fridge/FridgePage';
import { Text } from './pages/Text';
import DashboardPage from './features/dashboard/DashboardPage';
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
       <Route element={<Layout/>}>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/fridge' element={<FridgePage/>} />

     </Route>
      </Routes>

</BrowserRouter>

  


  )
}

export default App
