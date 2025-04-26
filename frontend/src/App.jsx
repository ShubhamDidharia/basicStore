import Navbar from './components/Navbar';
import CreateItem from './pages/CreateItem';
import HomePage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import EditItem from './pages/EditItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<HomePage />} />
        <Route path = '/create' element = {<CreateItem />} />
        <Route path = '/edit/:id' element = {<EditItem />} />
        
      </Routes>
      <ToastContainer/>
    </>
    
  );
}

export default App;
