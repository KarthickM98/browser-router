import './App.css';
import {Routes, Route} from 'react-router-dom'
import Contact from './Components/Constct';
import Dome from './Components/Dome';
import None from './Components/None';
import HOme from './Components/HOme';
import NavBar from './Components/NavBar';
import Details from './Components/Details';
import Namecompo from './Components/Namecompo';


function App() {
  return (
    <div className="App"><h1>browser router !!</h1>
    <NavBar/>
      <Routes>
        <Route path='/' Navigate={<HOme/>}/>
        <Route path='/home' element={<HOme/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/none' element={<None/>}/>
        <Route path='/dome' element={<Dome/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/students/:id' element={<Namecompo/>}/>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
