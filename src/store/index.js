import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');

export default new Vuex.Store({
  state: {
    form: 'create',
    products:[]
  },
  mutations: {
    setdata(state,data){
      state.products = data
    },
    savedata(state,data){
      state.products.unshift(data)
    },
    changeform(state,data){
      state.form = data
    },
    // updatedata(state,data){
    //   console.log(state.products)
    //   console.log(data)
    // },
    // deletedata(state,data){
    //   state.products = data
    // }
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
    },
    changeForm(state,data){
      state.commit('changeform',data)
    },
    updateData(state,data){
      axios.put('http://localhost:8000/api/products/'+data.id,data)
            .then(response => {
              console.log(response)
              state.commit('changeform','create')
            })
    },
    deleteProduct(state,data){
      axios.delete('http://localhost:8000/api/products/'+data.id)
            .then(response => {
              // console.log(response)
              state.commit('deletedata',response.data.product)
            })
    }
  },
  modules: {
  },
  getters: {
    getProducts: state => state.products,

    getform: state => state.form
  }
})
