
const Hero = () => {
    return (
        <section>
            <div className="container px-6 py-12 mx-auto text-center">
                <div className="absolute inset-0 w-4 h-16 animate-slide">
                    <div aria-hidden="true" className="absolute inset-0 rotate-[-20deg] scale-y-125 bg-gradient-to-r from-transparent via-white/30"></div>
                </div>
                <div className="mb-8 border relative border-primary inline-flex items-center p-0.5 pl-2.5 rounded-full gap-x-2 border-white/40 bg-gray-950/10 before:scale-y-110 before:absolute before:inset-x-4 before:-bottom-px before:bg-gradient-to-r before:from-transparent before:via-yellow-50 before:to-transparent before:h-px before:w-3/5">
                    <span className="text-sm tracking-wide text-gray-800">
                        Do it worry free with YJOZ Gurentee Cover up to 20,000 AED
                    </span>

                    <a>
                    <span className="px-2 py-0.5 text-white text-xs font-semibold leading-5 tracking-wide bg-gray-950/20 border border-white/30 rounded-full">
                        Learn more
                    </span>
                    </a>
                </div>
                <div className="flex items-center">
                   <div className="w-1/2">
                        <h1 className="mt-8 text-3xl font-bold sm:text-4xl text-blue-950 lg:text-6xl">
                            <span className="relative whitespace-nowrap text-primary">
                                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-primary/70" preserveAspectRatio="none">
                                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">

                                    </path>
                                </svg>

                                <span className="relative uppercase">Rent </span>
                            </span>
                             anything from people in your area
                        </h1>
                        <p className="mt-5 text-gray-700 lg:mt-8 sm:text-lg">
                            Get items on rent from other people for home tasks, fun experiences, or work-related projects.
                        </p>
                   </div>

                   <div className="w-1/2">
                        <img src="./images/undraw_experience_design_re_dmqq.svg" />
                   </div>
                </div>
            </div>
        </section>
    );
  };
  
  export default Hero;
  