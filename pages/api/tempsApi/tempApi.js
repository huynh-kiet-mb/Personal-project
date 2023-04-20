import axiosClient from "../axiosClient";

const tempApis = {
    // GET
    getAll: (params) => {
        const url = '/temps';
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/temps/${id}`;
        return axiosClient.get(url);
    },

    // POST
    post: (params) => {
        const url = '/temps';
        return axiosClient.post(url, { params });
    },

    postFormData: (params) => {
        const url = '/temps';
        const formData = new FormData();
        // Get data files from params (need to refactor for good)
        // for (let index = 0; index < parmas.length; index++) {
        //     formData.append("file", params[index]);
        // }
        return axiosClient.postForm(url, { formData });
    },

    // PUT
    put: (id, params) => {
        const url = `/temps/${id}`;
        return axiosClient.put(url, { params });
    },

    putForm: (id, params) => {
        const url = `/temps/${id}`;
        const formData = new FormData();
        // Get data files from params (need to refactor for good)
        // for (let index = 0; index < parmas.length; index++) {
        //     formData.append("file", params[index]);
        // }
        return axiosClient.putForm(url, { formData });
    },

    // DELETE (Just for demo purposes)
    delete: (id) => {
        const url = `/temps/${id}`;
        return axiosClient.delete(url);
    }
}

export default tempApis;