function AboutCard({ src, title, content }) {
    return (
        <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">
            <img className="w-8 h-12" src={src} />

            <h1 className="text-xl font-semibold text-gray-700 capitalize ">{title}</h1>

            <p className="text-gray-500">
                {content}
            </p>
        </div>
    );
 }
 
 export default AboutCard;