import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const AddEquipment = () => {

    const { user } = useContext(AuthContext);

    const handleAddEquipment = (e) => {
        e.preventDefault();
        const form = e.target;

        const pName = form.pName.value;
        const price = form.price.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const stockStatus = form.stockStatus.value;
        const batWithExtraGrip = form.batWithExtraGrip.value;
        const processingTime = form.processingTime.value;
        const photoURL = form.photoURL.value;
        const userName = form.userName.value;
        const email = form.email.value;


        const productInfo = { pName, price, category, rating, stockStatus, batWithExtraGrip, processingTime, photoURL, userName, email };

        console.log(productInfo);

        fetch('http://localhost:2100/products', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productInfo)
        }).then(res => res.json()).then(result => {
            if (result.insertedId) {
                console.log(result);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "New Equipment Added.",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        )
    }


    return (

        <div className="">
            <h1 className="text-4xl text-center font-bold w-1/2 mx-auto py-4">Add Sports Equipment</h1>
            <form onSubmit={handleAddEquipment} className="card-body grid grid-cols-2 gap-4 w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="pName" placeholder="Enter Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name="price" placeholder="Enter Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" name="category" placeholder="Enter Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="Enter Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock Status</span>
                    </label>
                    <input type="text" name="stockStatus" placeholder="" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Bat With Extra Grip</span>
                    </label>
                    <input type="text" name="batWithExtraGrip" placeholder="" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Processing Time</span>
                    </label>
                    <input type="text" name="processingTime" placeholder="" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input type="text" name="userName" defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                </div>

                <div className="form-control my-2 col-span-2">
                    <button className="btn btn-primary">Add Equipment</button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipment;