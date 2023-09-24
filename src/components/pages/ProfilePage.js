import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProducts, getUserProfile } from '../../redux/userSlice';
import ProductCard from '../atoms/ProductCard';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();
    const { user, isLoading, error, user_products } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUserProfile());
      dispatch(getUserProducts());
    }, [dispatch]);

    const productList = user_products.map((product) => (
        <div onClick={() => handleProductClick(product.id, product.images[0])}>
            <ProductCard key={product.id} src={product.images[0]} title={product.title} price={product.prices['day_price']} tag={product.tag} />
        </div>
      ));

    const coverImage = {
        backgroundImage: `url(${user?.cover_image})`
    };

    const handleProductClick = (id, image) => {
        // navigate(`/product/${id}`, { state: { id: id, image: image} });
      };

    return (
        <div>
            {user ? <main class="flex-1 overflow-y-auto">
                <div>
                    <div>
                        <div class="w-full bg-gradient-to-r h-36 sm:h-64 from-primary to-secondray"></div>
                        {/* {user ? <div class="w-full bg-gradient-to-r h-36 sm:h-64" style={coverImage}></div> :  <div class="w-full bg-gradient-to-r h-36 sm:h-64 from-primary to-secondray"></div>} */}
                    </div>

                    <div class="-mt-20">
                        <div class="flex flex-col items-center">
                            <img class="w-24 h-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                src={user.image}
                                alt="profile" />

                            <div class="mt-4 text-center">
                                <h1 class="text-2xl font-bold text-gray-700 truncate">
                                    {user.first_name +' '+ user.last_name}
                                </h1>

                                <p class="mt-1 text-gray-500">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-4 mt-8 bg-white rounded-lg xl:p-6 px-4 py-8 sm:px-6">
                    <div class="md:flex md:items-center md:justify-between">
                        <div>
                            <h1 class="text-lg font-medium text-gray-700 capitalize sm:text-xl">Items</h1>
                        </div>

                        <a href="#" class="flex items-center justify-center w-full px-2 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary rounded-md md:w-auto md:mt-0 hover:bg-secondray focus:ring focus:ring-primary focus:ring-opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span class="mx-1">Add an item</span>
                        </a>
                    </div>

                    <div class="grid gap-4 mt-6 grid-cols-1s xl:grid-cols-4">
                        {isLoading ? "loading ..." : productList}
                    </div>
                </div>
            </main> : <div>Loading ...</div>}
        </div>
    );
}
export default ProfilePage;