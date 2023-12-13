
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import View from './components/View';
import Show from "./components/Show";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/show/:category" element={<Show />} />
      </Routes>
    </BrowserRouter>




    //     <>
    //     <h1 className="text-center">FOOD MEAL API</h1>    
    // <View/>
    //     </>
  );
}

export default App;
