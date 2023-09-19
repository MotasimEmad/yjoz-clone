import Button from "../atoms/Button";

function Search() {
    return (
        <section className="px-96 flex flex-col">
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" className="block p-4 pl-10 w-full text-sm text-gray-900 pattern rounded-lg border border-primary focus:ring-primary focus:border-primary" placeholder="Search Cameras, Books..." required />
                <Button label="Search" style="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-4 py-2"></Button>
            </div>

           <div className="w-38 flex items-center my-6">
               Or <Button label="List an item" style="mx-4 rounded-md bg-gray-200 px-4 py-2"></Button>
           </div>
        </section>
    );
 }
 
 export default Search;