import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SubCategoriesPage from './components/pages/SubCategoriesPage';
import ProductDetails from './components/pages/ProductDetails';
import NavBar from './components/molecules/NavBar';
import Footer from './components/organisms/Footer';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <div className='font-ubuntu'>
      <NavBar />
       <Router>
       <Routes>
          <Route exact path="/" element={<HomePage />} />            
          <Route path="/sub-categories" element={<SubCategoriesPage />} />    
          <Route path="/product/:id" element={<ProductDetails />} />         
       </Routes>
    </Router>
    <Footer />
    </div>
    </LocalizationProvider>
  );
}

export default App;
