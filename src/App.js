
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Student from './component/Student';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Detail from './component/Detail';
import AddStudent from './component/AddStudent';
import Update from './component/Update';


function App() {
 return (

  <Detail>
  
    <div className="App">

<BrowserRouter>

<Navbar />

<Routes>

<Route path='/home' element={<Home />} />
<Route path='/student' element={<Student />} />
<Route path='/contact' element={<Contact />} />
<Route  path='/add-student' element={<AddStudent />}/>
<Route path='/Update' element={<Update />}/>

</Routes>

</BrowserRouter>


     
    </div>
    </Detail>
  );
 
}

export default App;