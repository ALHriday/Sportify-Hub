import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import { useNavigate } from "react-router-dom";
import { FaDirections } from "react-icons/fa";

const Products = () => {
    const { cardData, HandleAddToCart } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <div className="flex justify-center items-center gap-1">
                <h1 className="text-center py-6 px-4 text-3xl sm:text-5xl font-bold">Sports Excellence Starts Here </h1>
                <div onClick={() => navigate('/Equipments')} >
                    <a data-tooltip-id="my-tooltip" data-tooltip-content='Go To All Equipments'>
                        <Tooltip id="my-tooltip" />
                        <FaDirections className="text-4xl font-bold cursor-pointer"></FaDirections>
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3">
                {cardData?.map(product =>
                    <div key={product._id} className="flex flex-col justify-between gap-4 shadow-md p-2 rounded-lg">
                        <div onClick={() => navigate(`/Equipments/${product._id}`)} className="flex flex-col">
                            <div className="min-w-[120px] min-h-[80px] h-[140px] sm:min-h-[140px] md:h-[150px] max-h-[280px] rounded-md">
                                <a data-tooltip-id="my-tooltip" data-tooltip-content={`${product?.pName}`}>
                                    <Tooltip id="my-tooltip" />
                                    <img className="w-full h-full object-cover rounded-md"
                                        src={product?.photoURL}
                                    />
                                </a>
                            </div>
                            <div className="flex justify-between gap-1 px-2 mt-1">
                                <div className="flex flex-wrap gap-1">
                                    <p className="text-md">{product?.pName.length > 12 ? product.pName.slice(0, 12).concat('...') : product.pName}</p>
                                    <p className="badge badge-sm badge-secondary">{product?.rating}</p>
                                </div>
                                <p className="text-md font-bold">${product?.price}</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <button onClick={() => HandleAddToCart(product)} className="btn btn-sm btn-accent text-black w-full">Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Products;