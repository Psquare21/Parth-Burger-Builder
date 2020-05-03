import axios from 'axios';

const instance= axios.create({
    baseURL:'https://parth-s-burger-builder.firebaseio.com/'
});

export default instance;