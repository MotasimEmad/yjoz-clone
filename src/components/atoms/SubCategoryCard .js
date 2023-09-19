import { useNavigate } from 'react-router-dom';

function SubCategoryCard({ id, title, img }) {
    return (
        <div className="bg-gray-100 text-gray-600 rounded-2xl px-4 py-2 my-4 w-fit flex items-center hover:bg-primary hover:text-white cursor-pointer">
            <img src={img} className="w-4 h-4 mx-2" />
            {title}
        </div>
    );
 }
 
 export default SubCategoryCard;