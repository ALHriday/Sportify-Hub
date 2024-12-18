import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../components/UserAuth/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [passValidation, setPassValidation] = useState([]);
    const [isTrue, setIsTrue] = useState(true);
    const [cardData, setCardData] = useState([]);

    
    useEffect(() => {
        fetch('https://sportify-hub-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setLoading(true);
                const productData = [...data].slice(0, 6);             
                setCardData(productData);
            })
    }, [])
    

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
            setIsTrue(false);
            input.current.type = 'text';
        } else {
            setIsTrue(true);
            input.current.type = 'password';
        }
    }
    useEffect(() => {
        
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
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
        passValidation,
        setPassValidation,
        showPass,
        isTrue,
        setIsTrue,
        updateUser,
        cardData,
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