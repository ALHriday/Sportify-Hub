import { Link, useLoaderData } from "react-router-dom";
import '../components/Equipments.css';

const Equipments = () => {


    const products = useLoaderData();

    return (
        <div className="min-h-screen">

            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Stock Status</th>
                        <th>Product Details</th>
                    </tr>
                </thead>

                <tbody>
                    {products && products.map(product => <tr key={product._id}>
                        <td>{product.pName}</td>
                        <td>{product.category}</td>
                        <td>{product.price}$</td>
                        <td>{product.rating}</td>
                        <td>{product.stockStatus}</td>
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