import { Routes, Route } from 'react-router-dom';
import Top from './pages/Dashboard/Dashboard';
import Head from './components/header/head';
import Login from './pages/Login/Login';
import Marks from './pages/Marks/Marks';
import MarksForm from './pages/Marks/MarksForm';
import Data from './pages/Data/Data'
import Change from './pages/Change/Change'
import Delete from './pages/Delete/Delete'


// import '../src/Backend/server'


function App() {

  return (
    <div>

      <Head />

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='Dashboard' element={<Top />}></Route>
        <Route path='Marks' element={<Marks />}></Route>
        <Route path='MarksForm' element={<MarksForm />}></Route>
        <Route path='Data' element={<Data/>}></Route>
        <Route path='Change' element={<Change/>}></Route>
        <Route path='Delete' element={<Delete/>}></Route>

      </Routes>

      {/* <Top /> */}
    </div>
  );
}

export default App;