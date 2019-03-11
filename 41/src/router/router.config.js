import HomeView from '../components/HomeView.vue';
import CationView from '../components/CationView.vue';
import ShopView from '../components/ShopView.vue';
import CenterView from '../components/CenterView.vue';
export default[
	{
		path:"/home",
		component:HomeView
	},
	{
		path:"/cation",
		component:CationView
	},
	{
		path:"/shopcar",
		component:ShopView
	},
	{
		path:"/center",
		component:CenterView
	},
	{
		path:"*",
		redirect:"/home"
	}

]