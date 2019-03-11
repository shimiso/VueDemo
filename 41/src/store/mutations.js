import getters from './getters.js';
const state = {

	headerTxt:"积分商城",
	fanhui:false,
	erweima:false

}

const mutations = {

	upCation(state){

		state.fanhui = true;
		state.erweima = true;
		state.headerTxt = "分类"

	},
	upHome(state){
		state.fanhui = false;
		state.erweima = false;
		state.headerTxt = "积分商城"
	}

}

export default{
	state,
	mutations,
	getters
}