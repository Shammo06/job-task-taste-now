import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './footer.css'
const Footer = () => {
    return (
        <footer className="flex-container">
            <div className="footer-title">
                <h1>Taste now</h1>
                <div className='icon-head'>
                    <FaFacebookSquare className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaYoutube className='icon'/>
                </div>
            </div>
            <div className="grid">
                <ul className='list'>
                    <li>Seslendirme ve Alt Jazz</li>
                    <li>Media Market</li>
                    <li>Gillie</li>
                    <li>Size Last</li>
                </ul>
                <ul>
                    <li>Self Setimes</li>
                    <li>Yatırımcı İlişkileri</li>
                    <li>Basal Himmler</li>
                </ul>
                <ul>
                    <li>Yard Market</li>
                    <li>Mullein Koşulları</li>
                    <li>Autumnal Bulgier</li>
                    
                </ul>
                <ul>
                    <li>Seslendirme ve Alt Jazz</li>
                    <li>Media Market</li>
                    <li>Gillie</li>
                    <li>Size Last</li>
                </ul>
            </div>
            <div className='mobile-icon'>
                    <FaFacebookSquare className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaYoutube className='icon'/>
            </div>
            
        </footer>
    );
};

export default Footer;