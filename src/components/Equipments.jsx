import { Link, useLoaderData } from "react-router-dom";
import '../components/Equipments.css';
import { useEffect, useState } from "react";

const Equipments = () => {
    const [data, setData] = useState([]);
    const products = useLoaderData();

    useEffect(() => {
        setData(products)
    },[products])

    const sortData = () => {
        const sorted = [...data].sort((a,b) => b.price - a.price)
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
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Stock Status</th>
                        <th>Price</th>
                        <th>Product Details</th>
                    </tr>
                </thead>

                <tbody>
                    {data && data.map(product => <tr key={product._id}>
                        <td>{product.pName}</td>
                        <td>{product.category}</td>
                        <td>{product.rating}</td>
                        <td>{product.stockStatus}</td>
                        <td>{product.price}$</td>
                        <td><Link to={`/Equipments/${product._id}`} className="btn btn-link">Details</Link></td>
                    </tr>)}
                </tbody>
                <tfoot>
                    <tr>
                        <td>All Products List</td>
                    </tr>
                </tfoot>


            </table>
        </div>
    );
};

export default Equipments;