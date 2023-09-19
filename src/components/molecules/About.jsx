import AboutCard from "../atoms/AboutCard";

const About = () => {
    return (
        <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">    
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
               <AboutCard src="https://d12g6zslwlcw3v.cloudfront.net/assets/access-more.svg" title="Access More" content="Get Things Done"></AboutCard>
               <AboutCard src="https://d12g6zslwlcw3v.cloudfront.net/assets/save-money.svg" title="Save Money" content="Buy Less share more"></AboutCard>
               <AboutCard src="https://d12g6zslwlcw3v.cloudfront.net/assets/help-planet.svg" title="Help the planet" content="Reduce Waste"></AboutCard>
            </div>
        </div>
    </section>
    );
  };
  
  export default About;
  