<template>

	<div>
		
		<!--头部区域-->
	    <header class="mui-bar mui-bar-nav" id="header">
	        <a class="btn" href="javascript:history.go(-1)" v-show="fanhui">
	            <i class="iconfont icon-fanhui"></i>
	        </a>
	        <h4>积分商城</h4>
	        <a class="btn" href="#" v-show="erweima">
	            <i class="iconfont icon-erweima"></i>
	        </a>
	    </header>

	</div>

</template>

<script>

import {mapGetters} from 'vuex';

export default{

	computed:mapGetters(["headerTxt","fanhui","erweima"]),
	watch:{

		$route(to){	

			if(to.path=="/cation"){

				this.$store.dispatch("upCation");

			}else if(to.path=="/home"){

				this.$store.dispatch("upHome");

			}
		}

	}

}

</script>