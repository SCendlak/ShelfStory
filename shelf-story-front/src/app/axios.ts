import axios from 'axios';
import {useRouter} from "next/navigation";

const useApi = () => {
    const router = useRouter();

    const axiosInstance = axios.create({
        baseURL: 'https://021d0ccc-8b22-49f2-bad2-1760f77b3a58.mock.pstmn.io', // Replace with your API base URL
        // You can add other default configurations here
    });

    axiosInstance.interceptors.response.use(response => response, error => {
        if (error.response && error.response.status === 502) {
                router.push('/badGateway');
        }
        return Promise.reject(error);
    });

    return axiosInstance;
};

export default useApi;