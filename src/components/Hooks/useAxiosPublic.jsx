import axios from 'axios';

const axiosPublic = axios.create({
    // baseURL: 'https://sportify-hub-server.vercel.app',
    baseURL: 'https://sportify-hub-server.vercel.app',
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;