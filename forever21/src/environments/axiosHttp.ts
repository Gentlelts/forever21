import axios from 'axios';

axios.defaults.timeout = 5000;
//axios.defaults.baseURL = '网页链接';
// http request 拦截器 所有的请求都会执行一次
axios.interceptors.request.use(config => {
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded ' //自定义headers
    };
    return config;
}, error => {
    return Promise.reject(error);
});
// http response 拦截器 所有的返回的接口都会执行一次
axios.interceptors.response.use(response => {
    if(response.status == 401) {}
    return response.data;
}, error => {
    return 'error';
});

export const foreverHttp = {
    post:(url:any, data:any, successfn:any)=>{
        axios({
            method: 'post',
            url: url,
            data: data,
        }).then((response) => {
            successfn(response); //请求正确时执行的代码
        })
    },
    get:(url:any, data:any, successfn:any)=>{
        axios.get(url, {
            params: data
        }).then((response) => {
            successfn(response);
        })
    }
};