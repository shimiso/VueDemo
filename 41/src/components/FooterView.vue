<template>

    <div>
        <footer class="page-footer fixed-footer" id="footer">
          <ul>

            <router-link active-class="active" tag="li" to="/home">
              <a href="index.html">
                <i class="iconfont icon-shouye"></i>
                <p>首页</p>
              </a>
            </router-link> 


            <router-link active-class="active" tag="li" to="/cation">
              <a href="cation.html">
                <i class="iconfont icon-icon04"></i>
                <p>分类</p>
              </a>
            </router-link> 


            
           <router-link active-class="active" tag="li" to="/shopcar">
              <a href="shopcar.html">
                <i class="iconfont icon-gouwuche"></i>
                <p>购物车</p>
              </a>
           </router-link> 



          <router-link active-class="active" tag="li" to="/center">
              <a href="center.html">
                <i class="iconfont icon-yonghuming"></i>
                <p>我的</p>
              </a>
            </li>
         </router-link> 

        </ul>
        </footer>
        
    </div>


</template>