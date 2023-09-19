import { useNavigate } from 'react-router-dom';

function CategoryCard({ sub_categories, title, id }) {
  const navigate = useNavigate();
    return (
        <a class="w-full max-w-xs text-center" onClick={() => {
            navigate(`/sub-categories`, { state: { category: title, sub_categories: sub_categories, id: id }});
        }}>
            <img class="object-cover object-center w-full h-42 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1461784180009-21121b2f204c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="avatar" />
            <div class="mt-2">
                <h3 class="text-sm font-medium text-gray-700">{title}</h3>
            </div>
        </a>
    );
 }
 
 export default CategoryCard;