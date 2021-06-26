import Vuex from 'vuex';
import Cookie from 'js-cookie';
import auth from "../middleware/auth";

const createStore = () => {
    return new Vuex.Store({
        state: {
            authKey: null
        },
        getters: {
            isAuthenticated(state) {
                return state.authKey != null;
            },
            getAuthKey(state) {
                return state.authKey;
            }
        },
        mutations: {
            setAuthKey(state, authKey) {
                state.authKey = authKey;
            },
            clearAuthKey(state) {
                Cookie.remove('authKey');
                localStorage.removeItem('authKey');
                state.authKey = null;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
            },
            initAuth(vuexContext, req) {
                let token;
                if (req) {
                    //    Server-side
                    if (!req.headers.cookie) {
                        return;
                    }
                    token = req.headers.cookie.split(';').find(c => c.trim().startsWith('authKey='))
                    if (token) {
                        token = token.split('=')[1];
                    }
                } else {
                    //    client-side
                    token = localStorage.getItem('authKey');
                    if (!token) {
                        return;
                    }
                }
                // console.log(req.headers.cookie)
                // console.log(token);
                vuexContext.commit('setAuthKey', token)
            },
            login(vuexContext, authKey) {
                Cookie.set('authKey', authKey);
                localStorage.setItem('authKey', authKey);
                vuexContext.commit('setAuthKey', authKey);
            },
            logout(vuexContext) {
                vuexContext.commit('clearAuthKey');
            }
        }
    })
}

export default createStore;