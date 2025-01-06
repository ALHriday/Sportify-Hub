import { useContext } from "react";
import Equipment from "./Equipment";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Equipments = () => {
    const { equipmentdata } = useContext(AuthContext);

    return (
        <div>
            <h1 className="text-center py-6 px-4 text-4xl md:text-5xl font-bold">All Sporting Equipments Starts Here</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                {equipmentdata.map(product => <Equipment key={product._id} product={product}></Equipment>)}
            </div>
        </div>
    );
};

export default Equipments;