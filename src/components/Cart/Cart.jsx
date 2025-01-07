import PropTypes from "prop-types";

const Cart = ({ item }) => {
    
    const { pName, photoURL, price, category } = item;

    return (
        <div className="flex gap-2 justify-between items-center border-b-2 pb-2">
            <div className="w-32 h-32 rounded-full">
                <img className="w-full h-full rounded-full" src={photoURL} alt="" />
            </div>
            <h1>{ pName}</h1>
            <h1>{ category}</h1>
            <h1>${ price}</h1>
        </div>
    );
};

Cart.propTypes = {
    item: PropTypes.object
}

export default Cart;