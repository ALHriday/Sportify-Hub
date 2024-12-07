import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {

    const { products } = useContext(AuthContext);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4">
            <h1 className="col-span-1 sm:col-span-2 md:col-span-3 py-6 px-4 text-4xl md:text-5xl font-bold">Sporting Excellence Starts Here</h1>
            {products && products.map((product, idx) => <div key={idx}>
                <div className="card bg-base-100 shadow-xl">

                    <div className="h-[200px] sm:h-[280px] md:h-[320px] lg:h-[300px] p-4 rounded-xl">
                        <a data-tooltip-id="my-tooltip" data-tooltip-content={`${product?.pName}`}>
                        <Tooltip id="my-tooltip" />
                            <img className="w-full h-full rounded-xl"
                                src={product?.photoURL}
                                alt="Shoes" />
                        </a>

                    </div>
                    <div className="p-4 flex flex-col justify-center items-center gap-1">
                        <h2 className="card-title">
                            {product?.pName}
                        </h2>
                        <p>{product?.category}</p>
                        <p className="font-bold">Price: {product?.price}$</p>
                        <div className="flex gap-1 justify-center items-center">
                        <p className="font-bold">Rating: {product?.rating}
                        </p><FaStar/>
                        </div>
                        <Link to={`/Equipments/${product._id}`} className="btn-link py-2">Details</Link>
                    </div>
                    <div className="flex justify-center items-center gap-2 px-2 pb-4">
                        <button className="btn btn-sm bg-teal-600 hover:bg-teal-700 text-white">Add to Cart</button>
                        <button className="btn btn-sm bg-teal-600 hover:bg-teal-700 text-white">Purchase</button>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Products;