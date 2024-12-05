import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { auth } from "../components/UserAuth/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [passValidation, setPassValidation] = useState([]);
    const [isTrue, setIsTrue] = useState(true);

    // if (loading) {
    //     <div className="flex justify-center items-center">
    //         loading....
    //     </div>
    // }

    const createGoogleAccount = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }
    const createAccountWithEmailAndPass = (email, password) => {
        setLoading(true)
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

    const showPass = (input) => {

        if (input.current.type === 'password') {
            setIsTrue(false);
            input.current.type = 'text';
        } else {
            setIsTrue(true);
            input.current.type = 'password';
        }
    }

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