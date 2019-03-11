<template>


<div>
	
			<div class="banner swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><a href="javascript:void(0)"><img class="swiper-lazy" data-src="./src/assets/images/banner4.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href="javascript:void(0)"><img class="swiper-lazy" data-src="./src/assets/images/banner1.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href="javascript:void(0)"><img class="swiper-lazy" data-src="./src/assets/images/banner3.jpg" alt=""></a></div>
                </div>
            </div>

</div>
</template>

<script>

import '../assets/js/swiper.jquery.min.js';
export default{

	mounted:function(){
		this.swiper();
	},
	methods:{

		swiper(){

			$(function(){

				var banner = new Swiper('.banner',{
			        autoplay: 5000,
			        pagination : '.swiper-pagination',
			        paginationClickable: true,
			        lazyLoading : true,
			        loop:true
			    });

			})

		}
	}
}


</script>