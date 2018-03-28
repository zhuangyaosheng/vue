const URL = process.env.NODE_ENV === 'production' ? 'http://' + window.location.host : '/api';

console.log('环境：', process.env.NODE_ENV);

export default {
    URL
}