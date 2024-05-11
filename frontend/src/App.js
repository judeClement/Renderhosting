
import './App.css';
import StudentDash from './components/StudentDash';
import AdminLogin from './components/AdminLogin';
import { Routes, Route } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import Home from './components/Home';
import AdminDash from './components/AdminDash';
import Main from './components/Main';
import Scsa from './components/Scsa';
import Sst from './components/Sst';
import Smlai from './components/Smlai';
import Sfsd from './components/Sfsd';
import Sdsa from './components/Sdsa';
import PrivateRoutes from './components/PrivateRoutes';


function App() {
  return (
    <div className="App">

      <Routes>
      <Route path={'/'} element={<Main child={<Home/>}/>} />

   
       <Route path='/adminlog' element={<Main child={<AdminLogin/>}/>} />
       <Route path={'/studentlog'} element={<Main child={<StudentLogin/>}/>} />
       <Route element={<PrivateRoutes/>}>
       <Route path='/sdash' element={<Main child={<StudentDash/>}/>} />
       <Route path={'/admindash'} element={<Main child={<AdminDash/>}/>} />

{/* student details */}
<Route path={'/scsa'} element={<Main child={<Scsa/>}/>} />
<Route path={'/sdsa'} element={<Main child={<Sdsa/>}/>} />
<Route path={'/sfsd'} element={<Main child={<Sfsd/>}/>} />
<Route path={'/smlai'} element={<Main child={<Smlai/>}/>} />
<Route path={'/sst'} element={<Main child={<Sst/>}/>} />
</Route>
      </Routes>
    </div>
  );
}

export default App;


