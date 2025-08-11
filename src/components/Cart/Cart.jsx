import axios from "axios";
import PropTypes from "prop-types";
import useCartItems from "../Hooks/useCartItems";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Cart = ({ item }) => {
    const { setLoading } = useContext(AuthContext);
    const { cartItems } = useCartItems();

    const { _id, pName, photoURL, price, category } = item;

    const handleDeleteItem = (id) => {

        axios.delete(`https://sportify-hub-server.vercel.app/cartItem/${id}`).then(res => {
            if (res.data.deletedCount) {
                setLoading(false);
                cartItems();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${pName} deleted successful`,
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
        )
    }

    return (
        <div className="flex gap-2 justify-between items-center border-b p-1 text-left">
            <div className="w-12 h-12 rounded-full">
                <img className="w-full h-full object-cover rounded-full" src={photoURL} alt="" />
            </div>
            <h1>{pName}</h1>
            <h1>{category}</h1>
            <h1>${price}</h1>
            <div className="text-center">
                <button onClick={() => handleDeleteItem(_id)} className="btn btn-sm btn-error">DEL</button>
            </div>
        </div>
    );
};

Cart.propTypes = {
    item: PropTypes.object
}

export default Cart;