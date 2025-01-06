import { FaBackspace } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const EquipmentDetails = () => {
    const product = useLoaderData();
    const { pName, price, category, rating, stockStatus, batWithExtraGrip, processingTime, photoURL } = product;

    return (
        <div className="min-h-screen p-4">
            <div className="w-full sm:w-2/3 md:w-3/6 mx-auto mt-6 rounded-md">
                <div >
                    <div className="card bg-base-100 shadow-xl">
                        <div className="h-[200px] rounded-lg p-2">
                            <img className="w-full h-full object-fill rounded-lg"
                                src={photoURL}
                            />
                        </div>

                        <div className="p-4 flex flex-col gap-2">
                            <div className="flex justify-between flex-wrap">
                                <h2 className="card-title text-2xl">{pName} <span className="badge badge-secondary">{rating}</span></h2>
                                <p className="font-bold">{price}$</p>
                            </div>
                            <p className="font-bold text-slate-400 py-1">{category}</p>

                            <div className="text-center flex flex-col gap-1">
                                <p>Stock Status: {stockStatus}</p>
                                <p>BatWithExtraGrip: {batWithExtraGrip}</p>
                                <p>Processing Time: {processingTime}</p>
                            </div>

                            <div className="justify-center">
                                <Link to='/Equipments'>                                <button className="btn btn-primary w-full"> <FaBackspace/> </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default EquipmentDetails;