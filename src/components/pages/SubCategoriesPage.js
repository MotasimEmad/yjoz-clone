import { useLocation } from 'react-router-dom';
import SubCategoryCard from '../atoms/SubCategoryCard ';
import { useDispatch, useSelector } from 'react-redux';
import { sendFilterRequest } from '../../redux/filterProductsSlice';
import { useEffect, useState } from 'react';
import ProductCard from '../atoms/ProductCard';

const SubCategoriesPage = () => {
  const dispatch = useDispatch();
  const [ subCategoryId, setSubCategoryId ] = useState(null);
  const { products, isLoading, error } = useSelector((state) => state.filter_products);
  
  useEffect(() => {
    dispatch(sendFilterRequest({category_id: location.state.id, sub_category_id: subCategoryId}));
  }, [dispatch, subCategoryId]);

  const handleSubCategoryClick = (categoryId) => {
    setSubCategoryId(categoryId);
  };


  const location = useLocation();  
  if (location.state && location.state.sub_categories) {
    const subCategoriesList = location.state.sub_categories.map((category) => (
      <div onClick={() => handleSubCategoryClick(category.id)}>
        <SubCategoryCard key={category.id} title={category.category} img={category.image} />
      </div>
    ));

    const productsList = products.length > 0 ? products.map((product) => (
      <ProductCard key={product.id} src={product.images[0]} title={product.title} price={product.prices['day_price']} tag={product.tag} />
    )) : 'no data found ';

    return (
      <div className="px-4 flex w-full h-full">
        <div className="w-64">
         {subCategoriesList}
        </div>
        <div className="w-full mt-4 mx-12 flex flex-col">
          {location.state.category}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 px-12">
          {isLoading ? "loading ..." : productsList}
        </div>
        </div>
      </div>
    );
  } else {
    // Handle the case where there is no sub_categories_data in the location state
    return <div>No sub-categories data available.</div>;
  }
};

export default SubCategoriesPage;
