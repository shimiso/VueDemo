import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



const state = {

	count:1
}

const mutations = {  //管理事件类型

	add(state){
		state.count++;
	},
	reduce(state){
		state.count--;
	}

}
const actions = {  //提交事件： 逻辑判断，异步

	add({commit}){

		commit("add"); //提交谁??? add

	},
	reduce({commit}){

		commit("reduce"); //提交谁??? reduce
	},
	odd({commit}){

		if(state.count%2==0){

			commit("add");	

		}

	},
	ay({commit}){

		setTimeout(()=>{

			commit("reduce");

		},1000)

	}
}


const moduleA = {

	state,mutations,actions

}



export default new Vuex.Store({

	modules:{

		a:moduleA

	}


})