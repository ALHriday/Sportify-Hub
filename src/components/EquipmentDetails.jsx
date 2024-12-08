import { Link, useLoaderData } from "react-router-dom";

const EquipmentDetails = () => {
    const product = useLoaderData();
    const { pName, photoURL, category} = product;

    return (
        <div className="min-h-screen">
            <div className="w-1/3 mx-auto mt-6 rounded-md">

                <div >
                    <div className="card bg-base-100 shadow-xl">

                        <div className="h-[200px] rounded-lg p-2">
                            <img className="w-full h-full object-fill rounded-lg"
                                src={photoURL}
                            />
                        </div>

                        <div className="card-body">
                            <h2 className="card-title">{pName}</h2>
                            <p>{category}</p>

                            <div className="card-actions justify-end">
                                <Link to='/Equipments'>                                <button className="btn btn-primary w-full">X</button>
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