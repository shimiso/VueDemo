//这里是路由的配置

import HomeView from '../components/router/HomeView.vue'
import NewsView from '../components/router/NewsView.vue'
import MyView from '../components/router/MyView.vue'

export default{
	routes:[
		{path:"/home",component:HomeView},
		{path:"/news",component:NewsView},
		{path:"/my",component:MyView}
	]

}

