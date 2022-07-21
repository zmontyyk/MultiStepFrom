import './App.css';
import Home from './Home';
import BasicInformation from './Pages/BasicInformation';
import EmployeeInformation from './Pages/EmployeeInformation';
import Address from './Pages/Address';
import FinalForm from './Pages/FinalForm';
import Generalinfo from './Pages/Generalinfo';
import { Routes, Route } from "react-router-dom";
import Projects from './Pages/Projects';
import { Progress_bar } from './Progress_bar';
import Tabs from './Pages/Tabs';


const App=()=> {
  return (
    <div>
    <Progress_bar />
    <Tabs/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='BasicInformation' element={<BasicInformation Progressbar={undefined}/>} />
        <Route path='EmployeeInformation' element={<EmployeeInformation/>} />
        <Route path='Address' element={<Address/>} />
        <Route path='Generalinfo' element={<Generalinfo/>} />
        <Route path='Projects' element={<Projects/>} />
        <Route path='FinalForm' element={<FinalForm/>} />
     </Routes>
    </div>
  );
}

export default App;
