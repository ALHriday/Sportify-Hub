import { Link, useLoaderData } from "react-router-dom";
import '../components/Equipments.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Equipments = () => {
    const [data, setData] = useState([]);
    const products = useLoaderData();

    const { user } = useContext(AuthContext);

    useEffect(() => {
        setData(products)
    }, [products])

    const sortData = () => {
        const sorted = [...data].sort((a, b) => b.price - a.price)
        setData(sorted);
    }

    return (
        <div className="min-h-screen">
            <div className="flex justify-between px-4 py-3 mt-4 bg-blue-700">
                <h1 className="text-xl font-bold text-white">All Products List : </h1>
                <div>
                    <button onClick={sortData} className="btn btn-sm">Sort By Price</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>No. </th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Product Details</th>
                        <th>Edit / Del</th>
                    </tr>
                </thead>

                <tbody>
                    {data && data.map((product, idx) => <tr key={product._id}>
                        <td>{idx + 1}</td>
                        <td>{product.pName}</td>
                        <td>{product.category}</td>
                        <td>{product.stockStatus}</td>
                        <td>{product.price}$</td>
                        <td><Link to={`/Equipments/${product._id}`} className="btn btn-link">Details</Link></td>
                        <td>
                            <div className="flex justify-center items-center gap-1 md:gap-2 ">
                            <Link to={`/UpdateEquipment/${product._id}`} className="btn btn-sm btn-info">
                                <FaEdit />
                            </Link>
                            <Link className="btn btn-sm btn-error">
                                <MdDeleteForever />
                            </Link>
                            </div>
                        </td>
                    </tr>)}
                </tbody>
                <tfoot>
                    <tr className="text-center">
                       <td>All Products</td>
                    </tr>
                </tfoot>


            </table>
            <div className="flex justify-center items-center p-4">
                {user ? <Link className="btn" to='/AddEquipment'>Add Equipment</Link> : ''}

            </div>
        </div>
    );
};

export default Equipments;