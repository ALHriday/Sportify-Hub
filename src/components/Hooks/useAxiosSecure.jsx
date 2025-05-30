import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'https://sportify-hub-server.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const { handleLogOut } = useContext(AuthContext);
    const navigate = useNavigate();

    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.status === 401 || error.status === 403) {
            handleLogOut().then(() => {
                navigate('/LogIn');
            }).catch(err => err)
        }
        return Promise.reject(error);
    });

    return axiosInstance;
};

export default useAxiosSecure;