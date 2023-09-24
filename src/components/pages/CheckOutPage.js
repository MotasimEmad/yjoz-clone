import React, { useEffect } from 'react';
import Button from "../atoms/Button";
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { Checkbox } from "rsuite";
import { useDispatch, useSelector } from 'react-redux';
import { calculateSummary } from '../../redux/ordersSlice';
import { useLocation } from 'react-router-dom';

const CheckOutPage = () => {
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
      } = usePaymentInputs();

      const location = useLocation(); 
      const { order_data, isLoadding, error } = useSelector((state) => state.order);

      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(calculateSummary(location.state.data));
      }, [dispatch]);

    return (
        <div>
            {order_data ?  <div className="flex py-6 px-12 gap-2">
                <div className="w-1/2 h-full">
                    <h1 className='text-4xl capitalize mt-4'>Payment Methods</h1>

                    <div className='bg-gray-100 rounded-lg px-6 py-4 flex flex-col mt-8'>
                        <div className='flex gap-2 items-center justify-between text-gray-700 my-8'>
                            <h1 className='capitalize'>Payment cards</h1>
                        </div>

                        <PaymentInputsWrapper {...wrapperProps}>
                            <svg {...getCardImageProps({ images })} />
                            <input {...getCardNumberProps()} />
                            <input {...getExpiryDateProps()} />
                            <input {...getCVCProps()} />
                        </PaymentInputsWrapper>

                        <div className='flex items-center mt-8'>
                            <Checkbox /> I have read and agree to <span className='mx-1 text-secondray font-bold'>Terms and Conditions</span>
                        </div>
                            
                        <Button label="Place an order" style="rounded-2xl bg-primary text-white px-4 py-2 mt-6"></Button>
                    </div>
                </div>
                <div className="w-1/2 h-full">
                    <h1 className='text-4xl capitalize mt-4'>{order_data.product?.title}</h1>

                    <div className="felx flex-col">
                        <div className='bg-gray-100 rounded-lg px-6 py-4 flex flex-col mt-8'>
                            <div className='flex items-center mt-4'>
                                <div>
                                    <img src={order_data?.product?.owner.image} className='object-cover w-10 h-10 rounded-full' />
                                </div>
                                <div>
                                    <p className='mx-4 text-gray-500 text-sm capitalize font-normal'>{order_data?.product?.owner.first_name +' '+ order_data?.product?.owner.last_name}</p>
                                </div>
                            </div>

                            <div className='border-2 border-gray-200 mt-4'></div>

                            <div className='flex items-center justify-between mt-6'>
                                <h1 className='capitalize text-gray-700'>{order_data?.number_of_days} days</h1>
                                <p>{order_data?.start_date.toLocaleString('en-US')} - {order_data?.end_date.toLocaleString('en-US')}</p>
                            </div>

                            <div className='flex items-center justify-between mt-4'>
                                <h1 className='capitalize text-gray-700'>{order_data?.product?.prices.day_price} AED x {order_data?.number_of_days}</h1>
                                <p>{order_data?.prices?.total_by_day} AED</p>
                            </div>

                            <div className='flex items-center justify-between mt-4'>
                                <h1 className='capitalize text-gray-700'>Service Fees</h1>
                                <p>{order_data?.prices?.service_fees} AED</p>
                            </div>

                            {order_data?.prices?.discount_price &&  <div className='flex items-center justify-between mt-4'>
                                <h1 className='capitalize text-green-600'>Discount</h1>
                                <p className='text-green-600'>{order_data?.prices?.discount_price} AED</p>
                            </div>}

                            <div className='border-2 border-gray-200 mt-6'></div>

                            <div className='flex items-center justify-between mt-4'>
                                <h1 className='capitalize text-secondray'>Total</h1>
                                <p className='text-secondray'>{order_data?.prices?.total} AED</p>
                            </div>
                        </div>

                        <div className='bg-gray-100 rounded-lg px-6 py-4 flex flex-col mt-8'>
                            <Button label='Add Coupon' style='rounded-2xl bg-primary text-white px-4 py-2'></Button>
                        </div>

                        <div className='bg-gray-100 rounded-lg py-4 flex flex-col mt-8 text-start'>
                            <div className='flex flex-col gap-2 text-gray-700 my-8 px-4'>
                                <h1 className='capitalize'>Method of Receiving</h1>

                                <div className="mt-2 border border-gray-300 hover:border-primary cursor-pointer px-4 py-2 rounded-lg w-full">
                                    <div className="flex items-center gap-2">
                                        <img className="w-10 h-6" src="https://d12g6zslwlcw3v.cloudfront.net/assets/svg/icons/pick-up.png" />
                                        <p>Pick up</p>
                                    </div>

                                    <p className="mt-2 font-semibold">The buyer should coordinate with the seller to schedule a pickup.</p>
                                </div>

                                <div className="border border-gray-300 hover:border-primary cursor-pointer px-4 py-2 rounded-lg w-full">
                                    <div className="flex items-center gap-2">
                                        <img className="w-10 h-6" src="https://d12g6zslwlcw3v.cloudfront.net/assets/svg/icons/delivery.png" />
                                        <p>Delivery</p>
                                    </div>

                                    <p className="mt-2 font-semibold">Our delivery agent will collect the product from the owner and deliver it to you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div>Loading ...</div>}
        </div>
    );
}
export default CheckOutPage;