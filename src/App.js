import Login from './component/Login';
import React, { useState } from 'react';
import SignUp from './component/SignUp';
import Welcome from './component/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [data,setData] = useState([]);
  const getData = (getData) => {
      setData([...data,getData]);
  }
  console.log(data);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='signup' element={<SignUp getData={getData} />} />
          <Route path='/' element={<Login data={data}/>} />
          <Route path='welcome' element={<Welcome data={data} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
