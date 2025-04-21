import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {

    const { cardData, HandleAddToCart } = useContext(AuthContext);

    return (
        <div className="p-4">
            <div>
            <h1 className="text-center py-6 px-4 text-4xl md:text-5xl font-bold">Sports Excellence Starts Here</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cardData.map(product =>
                    <div key={product._id} className="card bg-base-100 shadow-xl relative">
                        <div className="h-[280px] md:h-[300px] lg:h-[280px] p-4 rounded-xl">
                            <a data-tooltip-id="my-tooltip" data-tooltip-content={`${product.pName}`}>
                                <Tooltip id="my-tooltip" />
                                <img className="w-full h-full rounded-xl object-cover"
                                    src={product.photoURL}
                                />
                            </a>
                        </div>

                        <div className="p-4 flex flex-col gap-1">
                            <div className="flex justify-center items-center gap-1">
                                <div className="flex flex-wrap gap-1">
                                    <p className="text-2xl">{product.pName}</p>
                                    <p className="badge badge-secondary">{product.rating}</p>
                                </div>
                            </div>


                            <div className="flex flex-col justify-center items-center gap-1">
                                <p className="text-md text-bold">{product.category}</p>
                                <p className="text-xl font-bold">${product.price}</p>
                            </div>

                        </div>

                        <div className="w-full flex justify-center items-center gap-2 px-2 pb-4">
                            <button onClick={() => HandleAddToCart(product)} className="btn bg-teal-500 hover:bg-teal-700 text-black">Add to Cart</button>
                            <button className="btn bg-teal-500 hover:bg-teal-700 text-black">Purchase</button>

                            <Link to={`/Equipments/${product._id}`} className="badge badge-neutral py-2 ml-2 btn"> <FaEye /> </Link>
                        </div>
                    </div>
                )}

            </div>
        </div>

    );
};

export default Products;