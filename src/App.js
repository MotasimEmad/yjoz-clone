import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SubCategoriesPage from './components/pages/SubCategoriesPage';
import ProductDetails from './components/pages/ProductDetails';
import NavBar from './components/molecules/NavBar';
import Footer from './components/organisms/Footer';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CheckOutPage from './components/pages/CheckOutPage';
import LoginPage from './components/pages/LoginPage';
import SignUpStepOnePage from './components/pages/SignUpStepOnePage';
import SignUpStepTwoPage from './components/pages/SignUpStepTwoPage';
import ProfilePage from './components/pages/ProfilePage';
import AddProductPage from './components/pages/AddProductPage';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       <div className='font-ubuntu'>
       <Router>
        <NavBar />
       <Routes>      
          <Route exact path="/" element={<HomePage />} />            
          <Route path="/sub-categories" element={<SubCategoriesPage />} />    
          <Route path="/checkout" element={<CheckOutPage />} />       


          {/* Auth routes */}
          <Route path="/login" element={<LoginPage />} />        
          <Route path="/signup-step-1" element={<SignUpStepOnePage />} />       
          <Route path="/signup-step-2" element={<SignUpStepTwoPage />} />    

          {/* Profile routes */}
          <Route path="/profile" element={<ProfilePage />} />       


        {/* Products routes */}
        <Route path="/product/:id" element={<ProductDetails />} />    
        <Route path="/add-item" element={<AddProductPage />} />    
       </Routes>
    </Router>
    <Footer />
    </div>
    </LocalizationProvider>
  );
}

export default App;
