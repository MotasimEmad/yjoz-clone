import React, {useEffect, useState} from 'react';
import { getCategories } from '../../redux/categoriesSlice';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CategoryCard from '../atoms/CategoryCard';
import SubCategoryCard from '../atoms/SubCategoryCard ';

const AddProductPage = () => {
    const { isLoading, categories } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCategories());
    }, [dispatch]);

    const categoriesList = categories.map((category) => (
        <div onClick={() => handleCategoryClick(category)} key={category.id} className="bg-gray-100 text-gray-600 rounded-2xl my-1 px-4 py-2 w-fit flex items-center hover:bg-primary hover:text-white cursor-pointer">
            <img src={category.image} className="w-4 h-4 mx-2" />
            {category.category}
        </div>
    ));

    const [selectedImages, setSelectedImages] = useState([]);
    const [category, setCategory] = useState("");
    const [subCateories, setSubcategories] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [day, setDay] = useState(0);
    const [week, setWeek] = useState(0);
    const [month, setMonth] = useState(0);
    const [item, setItem] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [rental, setRental] = useState(1);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [subOpen, setSubopen] = useState(false);
    const handleSubopen = () => setSubopen(true);
    const handleSubclose = () => setSubopen(false);

    const style = {
        position: 'absolute',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const handleCategoryClick = (category) => {
        setSubcategories(category.sub_categories);
        setOpen(false);
    };

    const subCategoriesList = subCateories.map((category) => (
        <div onClick={() => handleSubCategoryClick(category.id)} key={category.id} className="bg-gray-100 text-gray-600 rounded-2xl my-1 px-4 py-2 w-fit flex items-center hover:bg-primary hover:text-white cursor-pointer">
            <img src={category.image} className="w-4 h-4 mx-2" />
            {category.category}
        </div>
    ));

    const handleSubCategoryClick = (id) => {
        setCategory(id);
        setSubopen(false);
    };


    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));

        // FOR BUG IN CHROME
        event.target.value = "";
    };

    function deleteHandler(image) {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    }

    const handleSubmitClick = () => {
        const data = {
            'sub_category_id': category,
            'item_price': item,
            'day_price': day,
            'week_price': week,
            'month_price': month,
            'quantity': quantity,
            'min_rental_days': rental,
            'selectedImages': selectedImages
        };

        console.log(data);
    };

    return (
       <section className='flex flex-col px-32 py-6'>
         <div class="mt-4 text-center">
            <h1 class="text-4xl text-gray-700 truncate">
                List an item
            </h1>
        </div>

        <input type="file" name="images" onChange={onSelectFile} multiple accept="image/png , image/jpeg, image/webp" />

        {selectedImages.length > 0 &&
            (selectedImages.length > 10 ? (
                <p className="error">
                    You can't upload more than 10 images! <br />
                    <span> please delete <b> {selectedImages.length - 10} </b> of them{" "} </span>
                </p>
                ) : (
                <button className="upload-btn">
                    {/* UPLOAD {selectedImages.length} IMAGE */}
                    {/* {selectedImages.length === 1 ? "" : "S"} */}
                </button>
            ))}
            <div className="grid grid-cols-5 gap-2 py-8">
                {selectedImages &&
                selectedImages.map((image, index) => {
                return (
                    <div key={image} className="rounded-lg">
                        <div class="relative w-full mb-3">
                            <div class="absolute flex flex-col top-0 right-0 p-3">
                                <button onClick={() => deleteHandler(image)} class="transition ease-in duration-300 bg-gray-50  hover:text-primary shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                                <svg className='w-6 h-6' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg>
                                </button>
                            </div>
                            <img src={image} alt="Just a flower" class="object-cover rounded-lg" />
                        </div>
                    </div>
                );
                })}
            </div>

        <span className='text-primary flex justify-center cursor-pointer'>Learn more about uploading photos</span>

        <div className='flex flex-col'>
            <label>Item info</label>
            <input type="text" placeholder="Item title" className='bg-gray-100 rounded-md py-2 px-4 mt-4 focus:border-primary' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            <div className='flex mt-4 gap-1'>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                        <Box sx={style}>
                        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                            {isLoading ? "loading ..." : categoriesList}
                        </div>
                        </Box>
                </Modal>

                <Button onClick={handleSubopen}>Open sub</Button>
                <Modal
                    open={subOpen}
                    onClose={handleSubclose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                        <Box sx={style}>
                        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                            {isLoading ? "loading ..." : subCategoriesList}
                        </div>
                        </Box>
                </Modal>
            </div>

            <textarea rows='8' placeholder='Description' className='bg-gray-100 rounded-md py-2 px-4 mt-4 focus:border-primary' value={description} onChange={(e) => {setDescription(e.target.value)}}></textarea>

            <label className='mt-4'>Item price (AED) per</label>
            <div className='flex mt-4 gap-1'>
                <input type="text" placeholder="Day" className='bg-gray-100 rounded-md py-2 px-4 mt-4 w-full focus:border-primary' value={day} onChange={(e) => {setDay(e.target.value)}} />
                <input type="text" placeholder="Week" className='bg-gray-100 rounded-md py-2 px-4 mt-4 w-full focus:border-primary' value={week} onChange={(e) => {setWeek(e.target.value)}} />
                <input type="text" placeholder="Month" className='bg-gray-100 rounded-md py-2 px-4 mt-4 w-full focus:border-primary' value={month} onChange={(e) => {setMonth(e.target.value)}} />
            </div>

            <label className='mt-4'>Item status</label>
            <select type="text" className='bg-gray-100 rounded-md py-2 px-4 mt-2 w-full focus:border-primary'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>

            <input type="text" placeholder="Item price" className='bg-gray-100 rounded-md py-2 px-4 mt-4 w-full focus:border-primary' value={item} onChange={(e) => {setItem(e.target.value)}}/>
            <input type="text" placeholder="Quantity" className='bg-gray-100 rounded-md py-2 px-4 mt-4 w-full focus:border-primary' value={quantity} onChange={(e) => {setQuantity(e.target.value)}}/>
            <input type="text" placeholder="Minimum rental days" className='bg-gray-100 rounded-md py-2 px-4 mt-4 w-full focus:border-primary' value={rental} onChange={(e) => {setRental(e.target.value)}} />


            <button onClick={() => handleSubmitClick()}>Submit</button>
        </div>
    </section>
    );
}
export default AddProductPage;