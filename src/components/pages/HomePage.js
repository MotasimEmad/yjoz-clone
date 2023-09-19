import AboutUs from '../molecules/AboutUs';
import Categories from '../organisms/Categories';
import Clients from '../organisms/Clients';
import PopularProducts from '../organisms/PopularProducts';
import Header from '../organisms/Header';

const HomePage = () => {
    return (
    <div>
        <Header />
        <Categories />
        <AboutUs />
        <PopularProducts />
        <Clients />
    </div>
    );
  };
  
  export default HomePage;
  