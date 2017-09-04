import {
    B2C_ConsumerKey, B2C_ConsumerSecret, B2C_DeviceId, PostUserLogin, GetRequestToken, B2C_Callback_Url,
    MCD_API_URL
} from './constants'
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

export const requestToken = (memberID) => {
    console.log('====================================');
    console.log('REQUEST TOKEN');
    console.log('====================================');

    return instance.get(GetRequestToken, {
        ConsumerKey: B2C_ConsumerKey,
        ConsumerSecret: B2C_ConsumerSecret,
        MemberDeviceID: B2C_DeviceId,
        OnlineMemberId: memberID,
        CallBackURL: B2C_Callback_Url
    });
}

export const authUserWithServer = (email, password) => {
    console.log('====================================');
    console.log('AUTHUSER', email, password);
    console.log('====================================');
    return instance.post(PostUserLogin, {
        Email2: email,
        Password: password,
        Functionality: 'Login',
        MemberDeviceID: B2C_DeviceId,
        ConsumerKey: B2C_ConsumerKey
    }).then(resp => resp.data);
}