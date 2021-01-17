import axios from 'axios';

const instance = axios.create({
    baseURL: 'http:localhost:5001',
    headers: {
        headerType: 'some configuration add later'
    }
});

export default instance;