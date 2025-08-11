import { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Cart from '../Cart/Cart';
import useCartItems from '../Hooks/useCartItems';


const Carts = () => {
    const { cartItem} = useContext(AuthContext);
    const {cartItems} = useCartItems();

    useEffect(() => {
        cartItems();
    }, [cartItems])


    return (
        <div className="min-h-screen">

            <h1 className="text-2xl font-bold py-6 px-4 bg-teal-700 shadow-sm text-base-100 text-center">Your Cart items: {cartItem?.length < 10 ? `0${cartItem.length}` : cartItem.length}</h1>
            <div className="grid grid-cols-1 gap-2 p-4">

                {cartItem && cartItem.map((item, i) => <Cart key={i} item={item}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;