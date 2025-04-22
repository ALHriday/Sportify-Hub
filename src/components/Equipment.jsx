import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Equipment = ({ product }) => {
    const { HandleAddToCart } = useContext(AuthContext);
    const navigate = useNavigate();

    const { _id, photoURL, pName, rating, price } = product;

    return (
        <div className="flex flex-col justify-between gap-4 shadow-xl p-2 rounded-lg">
            <div onClick={() => navigate(`/Equipments/${_id}`)} className="flex flex-col">
                <div className="min-h-[120px] h-[160px] sm:min-h-[140px] max-h-[280px] rounded-md">
                    <a data-tooltip-id="my-tooltip" data-tooltip-content={`${pName}`}>
                        <Tooltip id="my-tooltip" />
                        <img className="w-full h-full object-cover rounded-md"
                            src={photoURL}
                        />
                    </a>
                </div>
                <div className="flex justify-between gap-2 px-2 mt-1">
                    <div className="flex flex-wrap gap-1">
                        <p className="text-md">{pName.length > 15 ? pName.slice(0, 15).concat('...') : pName}</p>
                        <p className="badge badge-sm badge-secondary">{rating}</p>
                    </div>
                    <p className="text-md font-bold">${price}</p>
                </div>
            </div>
            <div className="w-full">
                <button onClick={() => HandleAddToCart(product)} className="btn btn-accent text-black w-full">Add to Cart</button>
            </div>
        </div>
    );
};

Equipment.propTypes = {
    product: PropTypes.object
}

export default Equipment;