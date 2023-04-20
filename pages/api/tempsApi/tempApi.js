import axiosClient from "../axiosClient";

const tempApis = {
    // GET
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    // POST
    post: (params) => {
        const url = '/products';
        return axiosClient.post(url, { params });
    },

    postFormData: (params) => {
        const url = '/products';
        const formData = new FormData();
        // Get data files from params (need to refactor for good)
        // for (let index = 0; index < parmas.length; index++) {
        //     formData.append("file", params[index]);
        // }
        return axiosClient.postForm(url, { formData });
    },

    // PUT
    put: (id, params) => {
        const url = `/products/${id}`;
        return axiosClient.put(url, { params });
    },

    putForm: (id, params) => {
        const url = `/products/${id}`;
        const formData = new FormData();
        // Get data files from params (need to refactor for good)
        // for (let index = 0; index < parmas.length; index++) {
        //     formData.append("file", params[index]);
        // }
        return axiosClient.putForm(url, { formData });
    },

    // DELETE (Just for demo purposes)
    delete: (id) => {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    }
}

export default tempApis;