一、计算属性

		{{}}内放入了大量的逻辑代码==>过重，难维护

		解决(计算属性)[computed]	

		
基本写法：（默认走的是get）
		computed:{
			
			b:function(){
				
			}

		}

完整写法：
		computed:{

			属性名称:{
				get:function(){},
				set:function(){}
			}
		}