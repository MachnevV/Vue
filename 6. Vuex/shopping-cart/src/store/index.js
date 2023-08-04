import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

new Vuex.Store({
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
        }
    },
    mutations: {
        // update products
    }
})