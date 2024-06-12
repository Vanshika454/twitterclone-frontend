import axios from 'axios';

export default axios.create({
    baseURL: http://localhost:3033.REACT_APP_BACKEND,
    headers: {
        'Content-type': 'application/json',
    },
    withCredentials: true,
});
