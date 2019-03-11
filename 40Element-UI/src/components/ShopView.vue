<template>
	
	<div>
		
		<div class="warp warptwo clearfloat">
	    	<div class="shopcar clearfloat">
	    		<div class="list clearfloat fl">
	    			<div class="xuan clearfloat fl">
	    				<div class="radio" > 
						    <label>
						        <input type="checkbox" name="sex" value="" />
						    </label>
						</div>
	    			</div>
	    			<a href="javascript:void(0)">
		    			<div class="tu clearfloat fl">
		    				<span></span>
		    				<img src="../assets/images/xj.jpg"/>
		    			</div>
		    			<div class="right clearfloat fl">
		    				<p class="tit over">单反相机，彰显你的风格</p>
		    				<p class="fu-tit over">颜色：蓝色  内存：120G</p>
		    				<p class="jifen over">100000积分</p>
		    				<div class="bottom clearfloat">
		    					<div class="zuo clearfloat fl">
		    						<ul>
		    							<li><img src="../assets/images/jian.jpg"/></li>
		    							<li>1</li>
		    							<li><img src="../assets/images/jia.jpg"/></li>
		    						</ul>
		    					</div>
		    					<i class="iconfont icon-lajixiang fr"></i>
		    				</div>
		    			</div>
	    			</a>
	    		</div>
	    		<div class="list clearfloat fl">
	    			<div class="xuan clearfloat fl">
	    				<div class="radio" > 
						    <label>
						        <input type="checkbox" name="sex" value="" />
						    </label>
						</div>
	    			</div>
	    			<a href="javascript:void(0)">
		    			<div class="tu clearfloat fl">
		    				<span></span>
		    				<img src="../assets/images/xj.jpg"/>
		    			</div>
		    			<div class="right clearfloat fl">
		    				<p class="tit over">单反相机，彰显你的风格</p>
		    				<p class="fu-tit over">颜色：蓝色  内存：120G</p>
		    				<p class="jifen over">100000积分</p>
		    				<div class="bottom clearfloat">
		    					<div class="zuo clearfloat fl">
		    						<ul>
		    							<li><img src="../assets/images/jian.jpg"/></li>
		    							<li>1</li>
		    							<li><img src="../assets/images/jia.jpg"/></li>
		    						</ul>
		    					</div>
		    					<i class="iconfont icon-lajixiang fr"></i>
		    				</div>
		    			</div>
	    			</a>
	    		</div>
	    		<div class="list clearfloat fl">
	    			<div class="xuan clearfloat fl">
	    				<div class="radio" > 
						    <label>
						        <input type="checkbox" name="sex" value="" />
						    </label>
						</div>
	    			</div>
	    			<a href="javascript:void(0)">
		    			<div class="tu clearfloat fl">
		    				<span></span>
		    				<img src="../assets/images/xj.jpg"/>
		    			</div>
		    			<div class="right clearfloat fl">
		    				<p class="tit over">单反相机，彰显你的风格</p>
		    				<p class="fu-tit over">颜色：蓝色  内存：120G</p>
		    				<p class="jifen over">100000积分</p>
		    				<div class="bottom clearfloat">
		    					<div class="zuo clearfloat fl">
		    						<ul>
		    							<li><img src="../assets/images/jian.jpg"/></li>
		    							<li>1</li>
		    							<li><img src="../assets/images/jia.jpg"/></li>
		    						</ul>
		    					</div>
		    					<i class="iconfont icon-lajixiang fr"></i>
		    				</div>
		    			</div>
	    			</a>
	    		</div>
	    		<div class="list clearfloat fl">
	    			<div class="xuan clearfloat fl">
	    				<div class="radio" > 
						    <label>
						        <input type="checkbox" name="sex" value="" />
						    </label>
						</div>
	    			</div>
	    			<a href="javascript:void(0)">
		    			<div class="tu clearfloat fl">
		    				<span></span>
		    				<img src="../assets/images/xj.jpg"/>
		    			</div>
		    			<div class="right clearfloat fl">
		    				<p class="tit over">单反相机，彰显你的风格</p>
		    				<p class="fu-tit over">颜色：蓝色  内存：120G</p>
		    				<p class="jifen over">100000积分</p>
		    				<div class="bottom clearfloat">
		    					<div class="zuo clearfloat fl">
		    						<ul>
		    							<li><img src="../assets/images/jian.jpg"/></li>
		    							<li>1</li>
		    							<li><img src="../assets/images/jia.jpg"/></li>
		    						</ul>
		    					</div>
		    					<i class="iconfont icon-lajixiang fr"></i>
		    				</div>
		    			</div>
	    			</a>
	    		</div>
	    	</div>
	    </div>
	    
	    <!--settlement star-->
	    <div class="settlement clearfloat">
	    	<div class="zuo clearfloat fl box-s">
	    		合计：<span></span>
	    	</div>
	    	<a href="confirm.html" class="fl db">
	    		立即结算
	    	</a>
	    </div>
	</div>

</template>
<script>
	import '../assets/sourse/layer/mobile/layer.js';
export default{
	mounted:function(){
		this.shop();
	},
	methods:{

		shop(){

			$('input[type="checkbox"]').click(function() { // 找到勾选按钮，绑定事件
				tatol();
			});
			$('.list ul img').click(function() { // 找到加减按钮，绑定点击事件
				var val = $(this).parent().parent().children().eq(1);
				if ($(this).parent().index()) {
					val.html(parseInt(val.html()) + 1);
				} else {
					val.html(val.html() > 1 ? parseInt(val.html()) - 1 : 1);
				}
				tatol();
			});
			$('.icon-lajixiang').click(function() { // 找到删除按钮，绑定点击事件
				var self = this;
				layer.open({
	                content: '确定删除？',
	                btn: ['确定', '取消'],
	                yes: function(index) {
	                    $(self).parent().parent().parent().parent().remove();
	                    layer.closeAll();
	                    tatol();
	                }
	            });
			});
			var tatol = function() { // 计算总积分
				var count = 0;
				$('.list').map(function(index, item) {
					var $el = $(item);
					if ($el.find('input[type="checkbox"]').is(":checked")) {
						count += parseFloat($el.find('.jifen').html()) * parseInt($el.find('.zuo li').eq(1).html());
					}
				});
				if (count > 0) {
					$('.settlement span').html(count + '积分');
				}
			}
		}

	}
}
</script>
<style>

@import '../assets/css/shopcar.css';
@import '../assets/sourse/layer/mobile/need/layer.css';

</style>