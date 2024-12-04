import PropTypes from "prop-types";
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const values = {
        user,
        setUser
    }
    if (!user) {
        return <div className="flex justify-center items-center">
            loading....
        </div>
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