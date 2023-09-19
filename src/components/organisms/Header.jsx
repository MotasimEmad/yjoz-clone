import About from "../molecules/About";
import Hero from "../molecules/Hero";
import Search from "./Search";

const Header = () => {
    return (
      <section className="flex flex-col pattern">
        <Hero />
        <Search />
        <About />
      </section>
    );
  };
  
  export default Header;
  