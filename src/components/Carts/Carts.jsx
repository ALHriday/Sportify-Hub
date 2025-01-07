
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Cart from '../Cart/Cart';

const Carts = () => {
    const { cartItem, setCartItem, user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://sportify-hub-server.vercel.app/cartItem/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCartItem(data);
            }
            )
    }, [setCartItem, user.email])


    return (
        <div className="min-h-screen">

            <h1 className="text-2xl font-bold py-6 px-4 bg-teal-600 shadow-md text-white">Your Cart items</h1>
            <div className="grid grid-cols-1 gap-2 p-4">

                {cartItem && cartItem.map((item, i) => <Cart key={i} item={item}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;