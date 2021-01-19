import axios from 'axios';

const instanceAxios = axios.create({
    baseURL: 'https:localhost:5001/achebarato',
    headers: {
        headerType: 'some configuration add later'
    }
});

export default instanceAxios;