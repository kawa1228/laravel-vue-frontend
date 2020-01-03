import Vue from 'vue'
const axios = require('axios');

const state = {
    users: null
}

const getters = {}

const actions = {
    getUsers({ commit }:any) {
        axios.get('/api/user').then((res: any) => {
            commit('setUsers', res.data);
        })
    }
}

const mutations = {
    setUsers(state:any , payload: any) {
        Vue.set(state, 'users', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
