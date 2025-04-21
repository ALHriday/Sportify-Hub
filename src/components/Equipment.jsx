
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Equipment = ({ product }) => {
    const { HandleAddToCart } = useContext(AuthContext);

    const { _id, photoURL, pName, rating, price, category } = product;

    return (
        <div className="card bg-base-100 shadow-xl relative">

            <div className="h-[280px] md:h-[300px] lg:h-[280px] p-4 rounded-xl">
                <a data-tooltip-id="my-tooltip" data-tooltip-content={`${pName}`}>
                    <Tooltip id="my-tooltip" />
                    <img className="w-full h-full object-cover rounded-xl"
                        src={photoURL}
                    />
                </a>
            </div>

            <div className="p-4 flex flex-col gap-1">
                <div className="flex justify-center items-center gap-1">
                    <div className="flex flex-wrap gap-1">
                        <p className="text-2xl">{pName}</p>
                         <p className="badge badge-secondary">{rating}</p>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center items-center gap-1">
                    <p className="text-md text-bold">{category}</p>
                    <p className="text-xl font-bold">${price}</p>
                </div>
            </div>

            <div className="w-full flex justify-center items-center gap-2 px-2 pb-4">
                <button onClick={() => HandleAddToCart(product)} className="btn bg-teal-500 hover:bg-teal-700 text-black">Add to Cart</button>
                <button className="btn bg-teal-500 hover:bg-teal-700 text-black">Purchase</button>

                <Link to={`/Equipments/${_id}`} className="badge badge-neutral py-2 ml-2 btn"> <FaEye/> </Link>
            </div>
        </div>
    );
};

Equipment.propTypes = {
    product: PropTypes.object
}

export default Equipment;