import axios from 'axios';

const instance = axios.create({
    //conecxão com o webapi do back, endereço do localhost
    baseURL: 'http:localhost:5001',
    headers: {
        headerType: 'some configuration add later'
    }
});

export default instance;