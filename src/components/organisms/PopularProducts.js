import React, { useEffect } from 'react';
import SectionLabel from "../atoms/SectionLabel";
import { getPopularProducts } from '../../redux/popularProductsSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../atoms/ProductCard';
import { useNavigate } from 'react-router-dom';

const PopularProducts = () => {
  const navigate = useNavigate();
  const { isLoading, popular_products } = useSelector((state) => state.popular);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularProducts());
  }, [dispatch]);

  const handleProductClick = (id, image) => {
    navigate(`/product/${id}`, { state: { id: id, image: image} });
  };

  const popularList = popular_products.map((product) => (
    <div onClick={() => handleProductClick(product.id, product.images[0])}>
      <ProductCard key={product.id} src={product.images[0]} title={product.title} price={product.prices['day_price']} tag={product.tag} />
    </div>
  ));

    return (
      <section className="container px-6 py-10 mx-auto">
        <SectionLabel label="Popular products" />

        <div className="my-6 grid grid-cols-1 md:grid-cols-4 gap-6 px-12">
          {isLoading ? "loading ..." : popularList}
        </div>
      </section>
    );
  };
  
  export default PopularProducts;
  