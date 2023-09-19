import Icon from "../atoms/Icon";

const NavBar = () => {
    return (
      <nav className="relative border-t-4 border-primary">
          <div className="container px-16 py-4 mx-auto md:flex md:justify-between md:items-center">
              <div className="flex items-center justify-between">
                  <a href="#">
                      <Icon url="https://d12g6zslwlcw3v.cloudfront.net/assets/LogoA.svg" />
                  </a>
              </div>
          </div>
      </nav>
    );
  };
  
  export default NavBar;
  