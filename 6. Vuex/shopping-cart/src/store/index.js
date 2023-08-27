import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state, mutations, getters, actions, modules

    state: { // = data
        products: []
    },
    getters: { // = computed properties 
        productsCount () {
            //...
        }
    },
    actions: { // = methods
        fetchProducts () {
            // make the call
            // run setProducts mutations
        }
    },
    mutations: {
        setProducts (state, products) {
            // update products
            state.products = products
        }
    }
})