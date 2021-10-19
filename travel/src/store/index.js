import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    city: state.city
  },
  actions:{
    changeCityName: function (ctx, city){
      ctx.commit('changeCityName', city)
    }
  },
  mutations:mutations
});
