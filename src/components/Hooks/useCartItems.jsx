import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";


const useCartItems = () => {
    const {user, setCartItem, setLoading } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const cartItems = () => {
        axiosPublic.get(`/cartItem/${user?.email}`)
            .then(res => {setCartItem(res.data); setLoading(false);})
    }
    return {cartItems};
};

export default useCartItems;