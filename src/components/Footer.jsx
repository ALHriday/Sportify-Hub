import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 py-4 mt-6 p-4 gap-4 md:gap-2">
            <div className="col-span-1 md:col-span-2">
                <h1 className="text-xl font-bold mb-1">Sportify Hub</h1>
                <p className="text-slate-400">Your One-Stop Shop for Sports Excellence.</p>
            </div>
            <div>
                <h1 className="text-md font-bold mb-1">Our Social Platforms</h1>
                <span className="flex justify-start items-center gap-1"><FaFacebook/>Facebook</span>
                <span className="flex justify-start items-center gap-1"><FaTwitter/>Twitter</span>
                <span className="flex justify-start items-center gap-1"><FaSquareInstagram/>Instagram</span>
            </div>
            <div>
                <h1 className="text-md font-bold mb-1">Explore</h1>
                <div className="flex flex-col gap-1">
                    <Link to='/'>Home</Link>
                    <Link to='/Equipments'>Equipments</Link>
                    <Link to='/About'>About</Link>
                </div>
            </div>
            <div>
                <h1 className="text-md font-bold mb-1">Contact With Us.</h1>
                <p>Email: sportifyhub123@gmail.com</p>
                <p>Phone: +1777456789</p>
            </div>

            <div className="text-center md:col-span-5 flex justify-center items-center gap-1 pt-4 pb-1">
            <FaRegCopyright/> 2023 All Rights Reserved by Sportify Hub.
            </div>

        </div>
    );
};

export default Footer;