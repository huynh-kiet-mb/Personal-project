import React, { useEffect, useState } from 'react';
import tempApis from '../api/tempsApi/tempApi';


const Page1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
       const fetchTempData = async () => {
            try {
                const response = await tempApis.getAll();
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTempData();
    }, []);
    return (
        <h1>Page1</h1>
    );
};

export default Page1;