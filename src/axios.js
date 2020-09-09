import axios from 'axios';


const instance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts'
});


instance.defaults.headers.common['Authorization']='AUTH_TOKEN_FROM_AXIOS_INSTANCE';


export default instance;