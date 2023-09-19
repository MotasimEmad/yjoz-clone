function ReviewCard({ title }) {
    return (
        <div className="w-full px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center -mt-16 md:justify-end">
                <img className="object-cover w-20 h-20 border-2 border-secondray rounded-full" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80" />
            </div>
            <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0">Design Tools</h2>
            <p className="mt-2 text-sm text-gray-600 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
            <div className="flex justify-end mt-4">
                <a href="#" className="text-lg font-medium text-secondray" tabindex="0" role="link">John Doe</a>
            </div>
        </div>
    );
 }
 
 export default ReviewCard;