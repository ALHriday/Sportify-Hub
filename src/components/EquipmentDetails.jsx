import { FaBackspace } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";

const EquipmentDetails = () => {
    const product = useLoaderData();
    const navigate = useNavigate();
    const { pName, price, category, rating, stockStatus, batWithExtraGrip, processingTime, photoURL } = product;

    return (
        <div className="min-h-screen p-4">
            <div className="w-full p-4 md:p-0 md:w-4/6 mx-auto rounded-md">
                <div className="shadow-xl rounded-lg md:flex">
                    <div className="h-[280px] rounded-lg md:w-[50%] p-4">
                        <img className="w-full h-full object-cover rounded-lg"
                            src={photoURL}
                        />
                    </div>
                    <div className="md:w-[50%] flex flex-col justify-between overflow-y-auto">
                        <div className="p-4 flex flex-col justify-between md:h-[280px]">
                            <div className="flex justify-between flex-wrap">
                                <h2 className="text-2xl">{pName} <span className="badge badge-secondary">{rating}</span></h2>
                                <p className="font-bold">{price}$</p>
                            </div>
                            <p className="text-xl font-bold text-slate-400 py-1">{category}</p>

                            <div className="flex flex-col">
                                <p>Stock Status: {stockStatus}</p>
                                <p>BatWithExtraGrip: {batWithExtraGrip}</p>
                                <p>Processing Time: {processingTime}</p>
                            </div>

                            <div className="justify-center">
                                <button onClick={() => navigate(-1)} className="btn btn-primary w-full"> <FaBackspace /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default EquipmentDetails;