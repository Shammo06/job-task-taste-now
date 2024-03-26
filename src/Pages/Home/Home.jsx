import Banner from "../../Component/Banner/Banner";
import FoodCard from "../../Component/FoodCard/FoodCard";
import Footer from "../../Component/Footer/Footer";
import GetKnowUs from "../../Component/GetKnowUs/GetKnowUs";


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <FoodCard></FoodCard>
           <GetKnowUs></GetKnowUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;