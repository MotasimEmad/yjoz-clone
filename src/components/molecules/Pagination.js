import React from "react";

const Pagination = ({
    totalItems,
    itemsPerPage,
    setCurrentPage,
    currentPage,
    lastPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className="flex my-8 justify-center">
            <a onClick={() => setCurrentPage(1)} className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-pointer">
                <div className="flex items-center -mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>

                    <span class="mx-1">
                        previous
                    </span>
                </div>
            </a>

            {pages.map((page, index) => {
                const linkClassName = `px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-primary hover:text-white ${
                    page === currentPage ? 'bg-primary text-white' : 'text-gray-700'
                  } cursor-pointer`;
                return (
                    <a key={index} onClick={() => setCurrentPage(page)} className={linkClassName}>
                        {page}
                    </a>
                );
            })}

            <a onClick={() => setCurrentPage(lastPage)} className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md   hover:bg-primary  hover:text-white cursor-pointer">
                <div className="flex items-center -mx-1">
                    <span className="mx-1">
                        Next
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </a>
        </div>
    );
};

export default Pagination;