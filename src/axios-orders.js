import axios from 'axios';

const instance= axios.create({
    baseURL:'add your own path'
});

export default instance;