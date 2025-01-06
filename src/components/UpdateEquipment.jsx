import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateEquipment = () => {
    const { user } = useContext(AuthContext);

    const products = useLoaderData();
    const navigate = useNavigate();
    
    const {_id, pName, price, category, rating, stockStatus, batWithExtraGrip, processingTime, photoURL } = products || {};


    const handleUpdateEquipment = (event) => {
        event.preventDefault();
        const form = event.target;
        
        const pName = form.pName.value;
        const price = form.price.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const stockStatus = form.stockStatus.value;
        const batWithExtraGrip = form.batWithExtraGrip.value;
        const processingTime = form.processingTime.value;
        const photoURL = form.photoURL.value;

        const productInfo = {pName,price,category,rating,stockStatus,batWithExtraGrip,processingTime,photoURL}


        fetch(`https://sportify-hub-server.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productInfo)
        }).then(res => res.json()).then(result => {         
            if (result.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Equipment Updated.",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(-1);
            }
        })
    }
    return (
        <div className="">
            <h1 className="text-4xl text-center font-bold w-5/6 md:w-1/2 mx-auto py-4">Update Sports Equipment</h1>
            <form onSubmit={handleUpdateEquipment} className="card-body grid grid-cols-2 gap-4 md:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="pName" placeholder="Product Name" defaultValue={pName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name="price" placeholder="Product Price" defaultValue={price} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" name="category" placeholder="Product Category" defaultValue={category} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="PhotoURL" defaultValue={photoURL} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="Rating" defaultValue={rating} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock Status</span>
                    </label>
                    <input type="text" name="stockStatus" placeholder="Stock" defaultValue={stockStatus} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Bat With Extra Grip</span>
                    </label>
                    <input type="text" name="batWithExtraGrip" placeholder="Yes/No" defaultValue={batWithExtraGrip} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Processing Time</span>
                    </label>
                    <input type="text" name="processingTime" placeholder="Processing Time" defaultValue={processingTime} className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input type="text" name="userName" readOnly defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" readOnly defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                </div>

                <div className="form-control my-2 col-span-2">
                    <button className="btn btn-primary">Update Equipment</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEquipment;