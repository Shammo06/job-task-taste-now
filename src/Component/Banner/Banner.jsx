import banner from '../../assets/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="">
                <h2>Experience food <span>Delivery</span> like no other</h2>
                <p>We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more.</p>
            </div>
            <div className="aa">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;