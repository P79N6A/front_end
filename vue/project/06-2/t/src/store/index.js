import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            uid: 0,
            username: ''
        },
        carts: []
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setCarts(state, payload) {
            state.carts = payload;
        },
        removeCart(state, payload) {
            state.carts = state.carts.filter( cart => cart.id != payload );
        }
    },
    actions: {
        login(store, payload) {
            return axios({
                method: "POST",
                url: "/api/user/login",
                data: payload
            }).then( res => {
                if (!res.data.code) {
                    store.commit('setUser', {
                        uid: res.data.data.uid,
                        username: res.data.data.username
                    });
                }
                return Promise.resolve(res);
            } );
        },
        verify(store, payload) {
            return axios({
                method: "GET",
                url: "/api/user/verify",
                data: payload
            }).then( res => {
                if (!res.data.code) {
                    store.commit('setUser', {
                        uid: res.data.data.uid,
                        username: res.data.data.username
                    });
                }
                return Promise.resolve(res);
            } );
        },
        getCarts(store, payload) {
            return axios({
                method: "POST",
                url: "/api/cart",
                data: payload
            }).then( res => {
                // console.log(res);
                if (!res.data.code) {
                    store.commit('setCarts', res.data.data);
                }
                return Promise.resolve(res);
            } );
        },
        addCart(store, payload) {
            axios({
                method: "POST",
                url: "/api/cart/add",
                data: payload
            }).then( res => {
                console.log(res);
                if (!res.data.code) {
                    //store.commit('setCarts', res.data.data);

                    return store.dispatch('getCarts');
                }
                return Promise.resolve(res);
            } );
        },
        checkCart(store, payload) {
            axios({
                method: "POST",
                url: "/api/cart/checked",
                data: payload
            }).then( res => {
                if (!res.data.code) {
                    return store.dispatch('getCarts');
                }
                return Promise.resolve(res);
            } );
        },
        removeCart(store, payload) {
            return axios({
                method: "POST",
                url: "/api/cart/delete",
                data: {
                    cart_id: payload
                }
            }).then( res => {
                if (!res.data.code) {
                    // 后端的数据删除成功以后，还需要同步更新（删除）前端store中的数据
                    store.commit('removeCart', payload);
                }
                return Promise.resolve(res);
            } );
        }
    }
});
