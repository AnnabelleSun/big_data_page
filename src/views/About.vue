<template>
  <div class="box">
    <div class="ulbox">
      <ul>
        <li>实时监测</li>
        <li>票务信息</li>
        <li>营销数据</li>
        <li class="l">大数据分析系统</li>
        <li>运营数据</li>
        <li>游客画像</li>
        <li>应急事件</li>
      </ul>
    </div>
    <div class="selbox">
      <p>请选择年份：</p>
      <select >
        <option>广州</option>
        <option>深圳</option>
        <option>山东</option>
      </select>
      <p>请选择年份：</p>
      <select >
        <option>广州</option>
        <option>深圳</option>
        <option>山东</option>
      </select>
      <p>请选择年份：</p>
      <select >
        <option>广州</option>
        <option>深圳</option>
        <option>山东</option>
      </select>
      <button>确认</button>
    </div>
    <div class="lebox">
      <p>dd</p>
      <div id="app">
        <div id="main" style="width: 600px;height:400px;">姐姐</div>
      </div>
    </div>
    <div class="cebox">
      <p>dd</p>
    </div>
    <div class="ribox">
      <p>dd</p>
    </div>
  </div>
</template>


<script>
  export default {
    name: "app",
    methods: {
     
    },
    mounted() {
      
    }
  };
</script>



<style scoped>
.box{
  background: rgb(61, 61, 243);
  width: 100%;
  height: 800px;
  display: block;
}
.ulbox>ul>li{
  list-style: none;
  display: inline;
  font-size: 18px;
  padding: 20px 40px;
  text-align: center;
  line-height: 80px;
  color: white;
}
.ulbox>ul>.l{
font-size: 40px;
padding: 10px 40px;
}
.selbox>p{
  display: inline;
  color: white;
  padding-left: 30px;
}
.selbox>select{
  width: 100px;
  height: 25px;
  border-color: white;
  color: rgb(67, 190, 238);
  font-size: 13px;
  border: 1px solid rgb(67, 190, 238);
  outline:none;
}
.selbox>button{
  color: white;
  font-size: 12px;
  background-color: rgb(67, 190, 238);
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  margin-left: 20px;
  outline:none;
}
.lebox{
  float: left;
  width: 40%;
}
.lebox>p{
  width: 20%;
  height: 10%;
  border: 1px solid red;
}
.cebox{
  float: left;
  width: 30%;
}
.ribox{
  float: right;
  width: 30%;
}
</style>