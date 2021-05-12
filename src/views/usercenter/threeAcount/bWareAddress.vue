<template>
  <div>
       <!-- //瑞典地址 -->
       <div class="address">
         <h6>瑞典地址</h6>
          <div >
            <table>
              <tr>
                <td><p>Mejladress(电子邮箱)</p><p>tiantianwang252400@gmail.com</p></td>
                 <td><p>Postnummrt(邮编)</p><p>22644</p></td>
              </tr>
                <tr>
                <td><p>Förnamn(名)</p><p>tiantian</p></td>
                 <td><p>Efternamn(姓)</p><p>Wang</p></td></tr>
              <tr>
                <td><p>Fornamn(名)</p><p>tiantian</p></td>
                 <td><p>Efternamn(姓)</p><p>Wang</p></td>
              </tr>
              <tr>
                <td colspan="2"><p>Address(地址)</p><p>magistratsvägen 55S, Lund. </p></td>
                 <!-- <td><p>Efternamn(姓)</p><p>Wang</p></td> -->
              </tr>
               <tr>
                <td><p>Ort(城市)</p><p>Ludn</p></td>
                 <td><p>Telefonnummer(电话)</p><p>0732629873</p></td>
              </tr>
            </table>
          </div>
       </div>
        <!-- 美国地址 -->
       <div class="address">
         <h6>美国地址</h6>
          <div >
            <table>
              <tr>
                <td><p>Email(电子邮箱)</p><p>yutangclub@gmail.com(或自己的邮箱)</p></td>
                 <td><p>邮编（Zip Code）</p><p>19701</p></td>
              </tr>
                <tr>
                <td><p>名（First Name）</p><p>gongwen</p></td>
                 <td><p>姓（Last Name）</p><p>MBRK</p></td></tr>
              <tr>
                <td><p>Fornamn(名)</p><p>tiantian</p></td>
                 <td><p>Efternamn(姓)</p><p>Wang</p></td>
              </tr>
              <tr>
                <td colspan="2"><p>地址（Address）</p><p>151 Rickey Blvd</p></td>
                 <!-- <td><p>Efternamn(姓)</p><p>Wang</p></td> -->
              </tr>
               <tr>
                <td><p>城市（City）</p><p>Bear</p></td>
                 <td><p>州/省（State）</p><p>Delaware</p></td>
              </tr>
            </table>
          </div>
       </div>
  </div>
</template>

<script>
export default {
  mounted(){
    
  }
}
</script>

<style lang='scss' scoped>
// .address{

// }
.address{
    // height：8rem;
  h6{
    background-color:#F1F8FF;
    line-height: 2.4rem;
    margin:10px 0 12px;
    text-align: left;
    padding-left: 30px;
    font-size:1rem;
    font-weight:450;
    color:#333;
    padding-left:20px;
  
    border-left:10px solid #C8E1FF;
    // border:solid 1px #C8E1FF;
  }
}
  table,td{
    margin:auto;
    border:1px solid #e8e8e8;
    border-collapse: collapse;
    width:56rem;
    height:3rem;
    // border-radius:1rem;
  }
  // table tr{
  //   height: 100px;
  // }
  table tr td p{
    text-align: left;
    padding: 13px 0 0px 20px;
    margin:8px 0 0 0;
    font-weight:600;
    color:#333;
    line-height: 0;
    font-size:14px;
  }
  table tr td p:first-child {
    // margin:0;
    text-align: left;
    font-weight:450;
    font-size: 13px;;
    color:#666;
  }
</style>