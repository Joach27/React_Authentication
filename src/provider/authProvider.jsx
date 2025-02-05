import axios from "axios";
import PropTypes from "prop-types"; // Add this import
import { useCallback } from "react"; // Add this import

import {
    createContext,
    useContext,
    useEffect,
    useState,
    useMemo
} from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => { // children is the component that is wrapped by AuthProvider (the comp that will access to the context)

    //State to hold the token
    const [token, setToken_] = useState(localStorage.getItem("token"));

    //Function to set the token
    // const setToken = (newToken) => {
    //     setToken_(newToken);
    // };

    // Memoize the setToken function using useCallback
    const setToken = useCallback((newToken) => {
        setToken_(newToken);
    }, []);  

    // Set the defaut auth header for axios and store the token in local storage
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            localStorage.setItem("token", token);
        }
        else{
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
        }
    }, [token]);  //This effect will run only when the token changes

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token, setToken]
    );
    
    //Provide the auth context to the children
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

// Add prop types validation for 'children'
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};




export default AuthProvider;