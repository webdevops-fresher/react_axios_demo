import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';



//gloabl default config
axios.defaults.baseURL="https://jsonplaceholder.typicode.com/posts";
axios.defaults.headers.common['Authorizaton']="AUTH_TOKEN";
axios.defaults.headers.post['Content-type']="application/json";


//interceptors to be run before each request and response
axios.interceptors.request.use(request=>{
    console.log('>>>request interceptor',request);
    return request;
},error=>{
    console.log('>>>interceptor err',error);
    return Promise.reject(error);
}
);

axios.interceptors.response.use(response=>{
    console.log('>>>inetrceptor response',response);
    return response;
},error=>{
    console.log('>>>>interceptor response err',error);
    return Promise.reject(error);
});



ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
