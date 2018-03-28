import Vue from 'vue'
import axios from 'axios'

Vue.prototype.axios = axios

let transformRequest = function (data) {
    let arr = [];
    for (let it in data) {
        arr.push(encodeURIComponent(it) + "=" + encodeURIComponent(data[it]));
    }
    return arr.join('&');
}

axios.interceptors.request.use(
    function (config) {
        Vue.$vux.loading.show();
        if (config.formData) {
            config.data = transformRequest(config.data);
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        return config;
    },
    function (err) {
        Vue.$vux.loading.hide();
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (res) {
        Vue.$vux.loading.hide();
        return res;
    },
    function (err) {
        Vue.$vux.loading.hide();
        return Promise.reject(error);
    }
);