import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
import store from './Store/store.js';
import { isLoggedIn, accessToken, refreshToken as RFT } from './Store/authSlice.js';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/'
})


axiosInstance.interceptors.request.use
    (async (config) => {
        const state = store.getState().logData;
        const token = state.accessToken;


        if (token) {
            const { exp } = jwtDecode(token);
            const now = Date.now() / 1000;
            console.log("Coming....");


            if (exp < now) {

                try {
                    const refreshToken = state.refreshToken;
                    console.log(refreshToken);

                    const res = await axios.post('http://localhost:3000/refreshtoken', {}, {
                        headers: {
                            Authorization: `Bearer ${refreshToken}`,
                        }
                    });
                    console.log("New token ", res.data);

                    const newToken = res.data.token;
                    const newRefresh = res.data.refreshToken;
                    console.log("new Token :", newToken);
                    console.log("new Refresh :", newRefresh);
                    
                    
                    store.dispatch(isLoggedIn(true));
                    store.dispatch(accessToken(newToken));
                    store.dispatch(RFT(newRefresh));
                    config.headers['Authorization'] = `Bearer ${newToken}`
                }
                catch (err) {
                    store.dispatch(isLoggedIn(false));
                    return Promise.reject(err);
                }
            }
            else {
                config.headers['Authorization'] = `Bearer ${token}`
            }
        }

        return config;
    }, err => { return Promise.reject(err); })

export default axiosInstance;