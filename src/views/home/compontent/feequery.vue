<template>
  <div class="content">
    <div>
      <h4>瑞典运费价格表</h4>
      <div class="tableContent">
        <div>
           <el-table stripe :data='tableOneData' border>
             <el-table-column label="公斤（实重/体积重）" prop="weight" width="180"></el-table-column>
             <el-table-column label="价格（人民币）" prop="price" width="180"></el-table-column>
            </el-table>
        </div>
        <!-- 第二个表格 -->
        <div>
           <el-table stripe :data='tableTwoData' border>
             <el-table-column label="公斤（实重/体积重）" prop="weight" width="180"></el-table-column>
             <el-table-column label="价格（人民币）" prop="price" width="180"></el-table-column>
            </el-table>
        </div>
        <div class="tableOnetip">
          <h5>1、快递怎么收费以及及是否包税呢？</h5>
          <p>价格表在左侧，价格为单个包裹不含税的价格。如需合箱，则根据箱子大小收取50-200元不等的拼箱费用。</p>
          <h5>2、是否支持代拍，如果我拍100KR（瑞典货币单位）的商品不含运费的话费用是多少？</h5>
          <p>支持代拍。具体联系QQ：751869596。如果实际成交价格是100KR的商品就需要支付100元人民币，以此雷同。</p>
          <h5>3、可以发欧洲或者台湾吗？运费怎么计算？</h5>
          <p>港和台湾地区也可以发。只能走中国邮政。具体运费看邮政官网：<a target="_blank" href="https://portal.postnord.com/skickadirekt">查询运费</a>，这上面可以查询到各地的费用。运费价格就是查询到的价格，多少SEK就是多少人民币</p>
          <h5>4、快递不送门上货的费用？</h5>
          <p>近距离的每单30元，远距离的每单50元。</p>
          <h5>5、运单时效？</h5>
          <p>正常情况下4-5天可以打包发货，在获取单号之后一般20-40天左右可以到达国内，欧洲等地时效会更短</p>
        </div>
       
      </div>
    </div>
    <hr>
     <!-- 美国运费 -->
    <div>
      <h4>美国运费价格表</h4>
      <div class="tableContent">
        <div>
           <el-table stripe :data='tableThreeData' border>
             <el-table-column label="公斤（实重/体积重）" prop="weight" width="180"></el-table-column>
             <el-table-column label="价格（人民币）" prop="price" width="180"></el-table-column>
            </el-table>
        </div>
        <div class="tableOnetip">
          <h5>1、快递怎么收费以及及是否包税呢？</h5>
          <p>价格表在左侧，价格为单个包裹包含税的价格，比较适合鞋类、保健品、食品、衣服等发货建议单个包裹不超过1200人民币，价值超过的风险由客户承担。</p>
          <h5>2、是否支持美国eBay代拍</h5>
          <p>支持代拍。具体联系QQ：751869596。价格为百度汇率加上160元手续费</p>
          <h5>4、为什么只有6kg费用，如果超过6KG怎么办？</h5>
          <p>超过重量建议采取分箱发货。</p>
          <h5>5、是否支持合箱？</h5>
          <p>支持，美国合箱费用20元，总数不超过4个。</p>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
// import { useRouter } from "vue-router";
export default {
  data(){
    return {
      tableOneData:[
        {'weight':'1',"price":'360'},
        {'weight':'2',"price":'380'},
        {'weight':'3',"price":'420'},
        {'weight':'4',"price":'420'},
        {'weight':'5',"price":'460'},
        {'weight':'6',"price":'460'},
        {'weight':'7',"price":'520'},
        {'weight':'8',"price":'520'},
        {'weight':'9',"price":'570'},
        {'weight':'10',"price":'570'},
        {'weight':'11',"price":'630'},
        {'weight':'12',"price":'630'},
      ],
       tableTwoData:[
        {'weight':'13',"price":'680'},
        {'weight':'14',"price":'680'},
        {'weight':'15',"price":'740'},
        {'weight':'16',"price":'740'},
        {'weight':'17',"price":'790'},
        {'weight':'18',"price":'790'},
        {'weight':'19',"price":'850'},
        {'weight':'20',"price":'850'},
        {'weight':'21',"price":'890'},
        {'weight':'22',"price":'890'},
        {'weight':'23',"price":'980'},
        {'weight':'24',"price":'980'},
      ],
         tableThreeData:[
        {'weight':'1',"price":'98'},
        {'weight':'2',"price":'144'},
        {'weight':'3',"price":'164'},
        {'weight':'4',"price":'202'},
        {'weight':'5',"price":'286'},
        {'weight':'6',"price":'325'},
      ],
    }
  }
}

</script>
<style scoped lang='scss'>
.content{
  box-sizing: border-box;
  padding:20px 100px 100px 100px;
  hr{
    margin:30px 0 10px 0;
    color:#999;
  }
  .tableContent{
    display: flex;
  }
  .tableOnetip{
    padding-left: 20px;
    color: #333;
    h5{
      font-size: 16px;
      margin:0;
    }
    p{
      text-indent:2em;
      margin:12px;
      line-height: 1.2rem;
    }
    text-align: left;
  }
}
</style>