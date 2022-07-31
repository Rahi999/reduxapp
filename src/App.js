import React from 'react';
import logo from './logo.svg';
import './App.css';
import { loadData, saveData } from './utils/LocalStorage';
import AllRoutes from './Components/AllRoutes';

function App() {

  //http://localhost:8080/products

  
  return (
    <div className="App">
     <AllRoutes />
    </div>
  );
}
 
export default App;
