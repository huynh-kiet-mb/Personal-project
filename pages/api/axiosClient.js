import axios, { isCancel, AxiosError } from 'axios';
import queryString from 'query-string';
import swal from "sweetalert2";
import { BASE_URL } from '../../utils/const';


const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    // const token = JSON.parse(localStorage.getItem('TOKEN'));
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    if (error.response.status === 401) {
        swal.fire({
            icon: "error",
            text: "Thời gian đăng nhập hết hạn, vui lòng đăng nhập lại để sử dụng",
            timer: 3000,
        });
        localStorage.clear();
    }
    return Promise.reject(error);
});
export default axiosClient;