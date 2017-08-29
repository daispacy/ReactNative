import { B2C_ConsumerKey, B2C_DeviceId, PostUserLogin, MCD_API_URL } from './constants'
import axios from 'axios'

var CancelToken = axios.CancelToken;
var cancel;
var instance = axios.create({
    baseURL: MCD_API_URL
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.timeout = 60000;

export const cancelRequest = () => {
    cancel();
}

export const authUserWithServer = (email, password) => {
    console.log('authUser', email, password);
    return instance.post(PostUserLogin, {
        Email2: email,
        Password: password,
        Functionality: 'Login',
        MemberDeviceID: B2C_DeviceId,
        ConsumerKey: B2C_ConsumerKey
    }).then(resp => resp.data);
}