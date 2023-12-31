function ProductCard({ src, title, price, tag }) {  
    const tagStyle = {
        color: `${tag['font_color']}`,
        backgroundColor: `${tag['color']}`,
      };

      
    return (
        <div>
          <div class="relative flex flex-col items-center justify-center cursor-pointer">
            <div class="container">
              <div class="max-w-md w-full bg-gray-50 shadow-lg rounded-xl p-6">
                <div class="flex flex-col">
                  <div class="">
                    <div class="relative h-62 w-full mb-3">
                      <div class="absolute flex flex-col top-0 right-0 p-3">
                        <button class="transition ease-in duration-300 bg-gray-50  hover:text-primary shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg></button>
                      </div>
                      <img src={src} alt="Just a flower" class="w-full h-56 object-cover rounded-2xl" />
                    </div>
                    <div class="flex-auto justify-evenly">
                      <div class="flex flex-wrap ">
                        
                      <h2 class="text-gray-700 text-sm capitalize">
                        {title}
                      </h2>
                      </div>
                      <div class="flex items-center w-full justify-between mt-6">
                      <div class="text-sm text-gray-500 mt-1">AED {price}/day</div>
                      <div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg" style={tagStyle}>{tag.tag}</div>
                      
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
 }
 
export default ProductCard;