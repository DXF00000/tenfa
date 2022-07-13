import axios from "axios";   // 引入
const ajax = axios.create({
    timeout: 1000,
    headers: {
        PlatformType: "h5", //配置请求头，让每一个请求都有请求头
    }
})
export default ajax 	