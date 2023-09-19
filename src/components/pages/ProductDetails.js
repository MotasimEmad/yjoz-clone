import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails, getSuggestedProducts } from '../../redux/popularProductsSlice';
import Button from '../atoms/Button';
import ProductCard from '../atoms/ProductCard';
import PriceCard from '../atoms/PriceCard';
import { useNavigate } from 'react-router-dom';
import { DateRangePicker } from '@mui/x-date-pickers-pro';



const ProductDetails = () => {
   
    const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);


    const handleDateRangeChange = (newDateRange) => {
        setSelectedDateRange(newDateRange);
        setStartDate(newDateRange[0]);
        setEndDate(newDateRange[1]);
      };

    const navigate = useNavigate();
    const { product_details, isLoadingProductDetails, suggested_products, isLoadingSuggestedProducts } = useSelector((state) => state.popular);
    const location = useLocation(); 
    const dispatch = useDispatch();
    const [activeImg, setActiveImage] = useState(location.state.image);

    useEffect(() => {
        dispatch(getProductDetails(location.state.id));
        dispatch(getSuggestedProducts(SuggestedProductsData));
    }, [dispatch]);

    const SuggestedProductsData = {
        'product_id': product_details ? product_details.id : null,
        'sub_category_id': product_details.category ? product_details.category.sub_categories[0].id : null 
    };

    const handleProductClick = (id, image) => {
        navigate(`/product/${id}`, { state: { id: id, image: image} });
      };

    const suggestedList = suggested_products.length > 0 ? suggested_products.map((product) => (
        <div onClick={() => handleProductClick(product.id, product.images[0])}>
            <ProductCard key={product.id} src={product.images[0]} title={product.title} price={product.prices['day_price']} tag={product.tag} />
        </div>
    )) : 'There is no data';

    
    const productImages = product_details.images
  ? product_details.images.map((image, index) => (
      <img key={index} src={image} alt="" className='mx-2 w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(image)} />
    ))
  : null;

    const prices = product_details.prices;

    const handleOrderClick = (data) => {
        console.log(data);
    };


    return (
        <div>
           {
                isLoadingProductDetails ? <div>Loading ...</div> 
                : 
                <div className='flex flex-col'>
                     <div  className='flex flex-col justify-between lg:flex-row gap-16 m-12'>
                        <div className='flex flex-col gap-6 lg:w-2/4'>
                            <img src={activeImg} alt="" className='w-full h-96 aspect-square object-cover rounded-xl'/>
                            <div className='flex flex-row h-24'>
                                {productImages}
                            </div>

                            <div>
                                <div>
                                    <h1 className='text-2xl capitalize mt-4'>Description</h1>
                                    <p className='text-gray-500 text-md capitalize mt-6 font-normal'>
                                        {product_details.description}
                                    </p>
                                </div>

                                <div className='mt-12'>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-2xl capitalize'>Location</h1>
                                        <h1 className='text-gray-500 text-md capitalize mt-6 font-normal'>({product_details.address ? product_details.address.city : null})</h1>
                                    </div>

                                    <img src='https://images.unsplash.com/photo-1519178614-68673b201f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' className='w-full h-56 rounded-lg object-cover mt-4' />
                                </div>

                                <div className='bg-gray-100 rounded-lg px-6 py-4 flex flex-col mt-12'>
                                    <h1 className='text-xl capitalize'>
                                        Item owned by <span className='text-primary'>{product_details.owner ? product_details.owner.first_name + ' '+product_details.owner.last_name : null}</span>
                                    </h1>

                                    <div className='flex items-center justify-between mt-4'>
                                        <div className='w-1/4'>
                                            {/* <img src={product_details.owner ? product_details.owner.image : null} className='object-cover w-16 h-16 rounded-full' /> */}
                                            <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100' className='object-cover w-16 h-16 rounded-full' />
                                        </div>
                                        <div>
                                            <p className='mx-4 text-gray-500 text-sm capitalize mt-6 font-normal'>I'm a wedding and portrait photographer. Just renting out some of my gear so other people can create with them when I'm not using it.</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center justify-between gap-2 mt-6'>
                                        <Button label='Message' style='rounded-2xl bg-gray-200 text-gray-800 w-full px-4 py-2'></Button>
                                        <Button label='See profile' style='rounded-2xl bg-gray-200 text-gray-800 w-full px-4 py-2'></Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 lg:w-2/4'>
                            <div>
                                {/* <span class="text-xs px-2 py-1 ml-3 rounded-lg" style={tagStyle}>{product_details.tag.tag}</span> */}
                                <h1 className='text-4xl capitalize mt-4'>{product_details.title}</h1>
                            </div>
                            <p className='text-gray-700 text-sm capitalize'>
                                {product_details.owner ? product_details.owner.first_name + ' '+product_details.owner.last_name : null}
                            </p>

                            <div className='bg-gray-100 rounded-lg px-6 py-4 flex flex-col'>
                                <div className='flex gap-2 items-center justify-between text-gray-700'>
                                    <h1 className='capitalize'>Prices in UAE</h1>
                                </div>

                                <div className='flex gap-2 items-center justify-between py-8'>
                                    <PriceCard label="Day" price={product_details.prices ? prices.day_price : null} />
                                    <PriceCard label="+7 Days" price={product_details.prices ? prices.week_price : null} />
                                    <PriceCard label="+30 Days" price={product_details.prices ? prices.month_price : null} />
                                </div>

                                <DateRangePicker
        value={selectedDateRange}
        onChange={handleDateRangeChange}
        startText="Start Date"
        endText="End Date"
      />
                                   <Button onClick={() => handleOrderClick({
                                    'product_id': product_details.id,
                                    'start_date': startDate['$d'],
                                    'end_date': endDate['$d'],
                                   
                                })} label="Book Now" style="rounded-2xl bg-primary text-white px-4 py-2 mt-6"></Button>
                            </div>
                        </div>
                    </div>

                    <div className='px-12'>
                        <h1 className='text-2xl capitalize mt-4'>Suggested Products</h1>
                        <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {isLoadingSuggestedProducts ? "loading ..." : suggestedList}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
  };
  
  export default ProductDetails;
  