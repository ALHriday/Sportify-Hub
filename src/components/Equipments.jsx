import { useContext } from "react";
import Equipment from "./Equipment";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Equipments = () => {
    const { equipmentData } = useContext(AuthContext);

    return (
        <div>
            <h1 className="text-center p-4 text-2xl md:text-4xl font-bold">All Sporting Equipments Starts Here</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
                {equipmentData.map(product => <Equipment key={product._id} product={product}></Equipment>)}
            </div>
        </div>
    );
};

export default Equipments;