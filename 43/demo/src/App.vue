<template>
  <div id="app">
    

      <el-button type="primary">主要按钮</el-button>

      <el-row :gutter="20">
        <el-col :span="6">

         <div class="grid-content bg-purple">
          
          <DateView></DateView>

         </div>

        </el-col>


        <el-col :span="6">

          <div class="grid-content bg-purple">
            
            <UploadView></UploadView>      
          
          </div>

        </el-col>


        <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
      </el-row>

      



  </div>
</template>

<script>
import DateView from './components/DateView.vue';
import UploadView from './components/UploadView.vue';
export default {


  components:{
    DateView,
    UploadView
  }

}
</script>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>