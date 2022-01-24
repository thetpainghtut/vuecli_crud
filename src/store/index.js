import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');

export default new Vuex.Store({
  state: {
    products:[]
  },
  mutations: {
    setdata(state,data){
      state.products = data
    },
    savedata(state,data){
      state.products.unshift(data)
    }
  },
  actions: {
    saveData(state,data){
      axios.post('http://localhost:8000/api/products/',data)
            .then(response => {
              state.commit('savedata',response.data.product)
            })
    },
    getProducts(state){
      axios.get('http://localhost:8000/api/products/')
            .then(response => {
              state.commit('setdata',response.data.products)
            })
    }
  },
  modules: {
  },
  getters: {
    getProducts: state => state.products
  }
})
