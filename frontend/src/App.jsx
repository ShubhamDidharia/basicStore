import Navbar from './components/Navbar';
import CreateItem from './pages/CreateItem';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import EditItem from './pages/EditItem';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<HomePage />} />
        <Route path = '/create' element = {<CreateItem />} />
        <Route path = '/edit/:id' element = {<EditItem />} />
        
      </Routes>
    </>
    
  );
}

export default App;
