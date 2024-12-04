import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { auth } from "../components/UserAuth/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
   
    // if (!user) {
    //     return <div className="flex justify-center items-center">
    //         loading....
    //     </div>
    // }

    const createGoogleAccount = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    const handleLogOut = () => {
        return signOut(auth);
    }

    const values = {
        user,
        setUser,
        createGoogleAccount,
        handleLogOut
    }

    return (
        <AuthContext.Provider value = {values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.object
}


export default AuthProvider;