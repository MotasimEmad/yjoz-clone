import React, { useEffect } from 'react';
import SectionLabel from "../atoms/SectionLabel";
import CategoryCard from "../atoms/CategoryCard";
import { getCategories } from '../../redux/categoriesSlice';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {
  const { isLoading, categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categoriesList = categories.map((category) => (
    <CategoryCard key={category.id} sub_categories={category.sub_categories} title={category.category} id={category.id} />
  ));

    return (
      <section className="container px-6 py-10 mx-auto">
        <SectionLabel label="Explore our categories" />

        <div className="my-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-12">
          {isLoading ? "loading ..." : categoriesList}
        </div>
      </section>
    );
  };
  
  export default Categories;
  