
import axios from 'axios'

const apiRequests = axios.create({
    baseURL:'http://localhost:4000/v1',
    headers:{
        'Content-Type':'application/json',
    }
})


// apiRequests.interceptors.request.use(
//     (config)=>{
//         console.log('config',config);
//         return config
//     },
//     (err)=>{
//         console.log('err',err);
//         return Promise.reject(err)

//     }
// )


apiRequests.interceptors.response.use(
    (response)=>{
        console.log('success',response);
        if(response.status===200) return response.data
        throw response;
    }, 
    (err)=>{
        console.log(('interceeptorErr',err));
        return Promise.reject(err)
    }
)
export default apiRequests