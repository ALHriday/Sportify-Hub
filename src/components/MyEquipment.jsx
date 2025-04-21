import { Link } from "react-router-dom";
import '../components/Equipments.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";

const MyEquipment = () => {
    const { user, setLoading } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch(`https://sportify-hub-server.vercel.app/myEquipment/${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setData(data);
        //         setLoading(false);
        //     })
        axios.get(`https://sportify-hub-server.vercel.app/myEquipment?email=${user.email}`, { withCredentials: true })
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
    }, [setLoading, user]);


    const sortData = () => {
        const productData = [...data];
        const sorted = productData.sort((a, b) => b.price - a.price)
        setData(sorted);
    }

    const handleDeleteProduct = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sportify-hub-server.vercel.app/products/${id}`, {
                    method: 'DELETE',
                }).then(res => res.json()).then(result => {
                    if (result.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remainingProduct = data.filter(d => d._id !== id);
                        setData(remainingProduct);
                    }
                })
            }
        });
    }



    return (
        <div className="min-h-screen">
            <div className="flex justify-between px-4 py-3 mt-4 bg-blue-700">
                <h1 className="text-xl font-bold text-white">All Products List : </h1>
                <div>
                    <button onClick={sortData} className="btn btn-sm">Sort By Price</button>
                </div>
            </div>

            <div className="overflow-auto">
                <table >
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
                                <div className="flex justify-center items-center p-1 gap-1 md:gap-2 ">
                                    <Link to={`/UpdateEquipment/${product._id}`} className="btn btn-sm btn-info">
                                        <FaEdit />
                                    </Link>
                                    <Link onClick={() => handleDeleteProduct(product._id)} className="btn btn-sm btn-error">
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

            </div>
            <div className="flex justify-center items-center p-4">
                {user ? <Link className="btn" to='/AddEquipment'>Add Equipment</Link> : ''}

            </div>
        </div>
    );
};

export default MyEquipment;