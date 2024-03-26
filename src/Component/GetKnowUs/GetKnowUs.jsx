import pic1 from '../../assets/know.png'
import pic2 from '../../assets/know2.png'
import './getknow.css'
const GetKnowUs = () => {
    return (
        <div>
            <h2>Get to know <span>us</span></h2>
            <div className="grid-container">
           
                <div className="grid-item">
                    <img src={pic1} alt="" />
                    <div >
                        <h2><span>Teamwork</span> is the key to our sucess</h2>
                        <p>At TasteNow we make sure that every decision is determined by a team of us. Everyone´s opinion matters, and as group, we are stronger. We firmly belive that team work, makes the dream work.</p>
                    </div>
                </div>
                <div className="grid-item">
                    <img src={pic2} alt="" />
                    <div >
                        <h2>We are all in for the <span>enviroment</span></h2>
                        <p>TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone´s help, we can make a better world. </p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default GetKnowUs;