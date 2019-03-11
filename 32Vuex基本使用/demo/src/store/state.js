//vuex的相关代码

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


const state = {
	//存储的就是数据  之前的data
	num:1
}


const mutations = {

	add(state){
		state.num++;
	},
	reduce(state){
		state.num--;
	}

}

export default new Vuex.Store({

	state,
	mutations

})




