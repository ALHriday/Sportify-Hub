import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../components/UserAuth/firebase.init";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosPublic from "../components/Hooks/useAxiosPublic";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [passValidation, setPassValidation] = useState([]);
    const [isTrue, setIsTrue] = useState(true);
    const [cardData, setCardData] = useState([]);
    const [equipmentData, setEquipmentData] = useState([]);
    const [cartItem, setCartItem] = useState([]);

    const axiosPublic = useAxiosPublic();


    useEffect(() => {
        axiosPublic.get('/products')
            .then(res => {
                const data = res.data;
                setLoading(false);
                setEquipmentData(data);
                const productData = [...data].slice(0, 6);
                setCardData(productData);
            })
    }, [axiosPublic])


    const createGoogleAccount = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }
    const createAccountWithEmailAndPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInAccountWithEmailAndPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    const showPass = (input) => {
        if (input.current.type === 'password') {
            input.current.type = 'text';
        } else {
            input.current.type = 'password';
        }
    }

    const HandleAddToCart = (product) => {
        const userEmail = user.email;
        const { pName, price, category, photoURL } = product;

        const productData = { pName, price, category, photoURL, userEmail }

        axiosPublic.post('/cartItem', productData).then(res => {

            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${product.pName} added successful`,
                    showConfirmButton: false,
                    timer: 2000
                });
                setLoading(false);
                setCartItem([...cartItem, productData]);
            }
        });
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            const userInfo = currentUser?.email;
            if (userInfo) {
                axios.post('https://sportify-hub-server.vercel.app/jwt', {userInfo}, { withCredentials: true }).then(() => {
                    setLoading(false);
                })
            } else {
                axios.post('https://sportify-hub-server.vercel.app/logOut', {}, { withCredentials: true }).then(() => {
                    setLoading(false);
                })
            }
        });

        return () => unSubscribe();
    }, []);

    const values = {
        user,
        setUser,
        createGoogleAccount,
        handleLogOut,
        createAccountWithEmailAndPass,
        signInAccountWithEmailAndPass,
        loading,
        setLoading,
        passValidation,
        setPassValidation,
        showPass,
        isTrue,
        setIsTrue,
        updateUser,
        cardData,
        equipmentData,
        setEquipmentData,
        setCartItem,
        cartItem,
        HandleAddToCart,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}


export default AuthProvider;