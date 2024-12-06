import { useLoaderData } from "react-router-dom";

const EquipmentDetails = () => {
    const product = useLoaderData();
    console.log(product);
    
    return (
        <div>
            <h1>{product.pName}</h1>
        </div>
    );
};

export default EquipmentDetails;