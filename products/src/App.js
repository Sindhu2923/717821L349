import Home from './Home';
import Allproducts from './allproducts/Allproducts';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup';

function App() {
  
  return (
    <div className="App">
      <Home/>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/all' element={<Allproducts/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
