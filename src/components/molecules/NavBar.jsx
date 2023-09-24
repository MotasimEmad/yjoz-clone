import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const NavBar = () => {
    const { user, token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate(`/login`);
    };

    const handleProfileImgClick = () => {
        navigate(`/profile`);
    };

    const handleIconClick = () => {
        navigate(`/`);
    };

    return (
      <nav className="relative border shadow-md">
          <div className="px-8 py-4">
              <div className="flex items-center justify-between">
                  <a onClick={handleIconClick} className="cursor-pointer">
                      <Icon url="https://d12g6zslwlcw3v.cloudfront.net/assets/LogoA.svg" />
                  </a>

                  <div>
                    {token ? <div className="flex items-center gap-1">
                        <button type="button" class="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                        <div class="w-10 h-10 overflow-hidden rounded-full">
                            <img src={user.image} class="object-cover w-full h-full" alt="avatar" onClick={handleProfileImgClick} />
                        </div>
                    </button>
                    </div>
                    : <Button label="Login" style="px-6 py-2 text-white bg-primary rounded-3xl" onClick={handleLoginClick}></Button> }
                  </div>
              </div>
          </div>
      </nav>
    );
  };
  
  export default NavBar;
  