<template>
  <div>
    <div class="page_bg"></div>
    <div class="container">
      <div class="row">
        <!-- right -->
        <div class="col-xs-12 col-sm-8 col-md-9" style="float:right">
          <router-view/>
        </div>
        <!-- left -->
        <div class="col-xs-12 col-sm-4 col-md-3">
          <div class="left_nav" id="categories">
            <h2 class="left_h2">导航栏目</h2>
            <ul class="left_nav_ul" id="firstpane">
              <li>
                <a class="biglink" href="javascript:;">产品大类1</a><span class="menu_head">+</span>
                <ul class="left_snav_ul menu_body">
                  <li>
                    <a href="javascript:;">产品小类1_1</a>
                  </li>
                  <li>
                    <a href="javascript:;">产品小类1_2</a>
                  </li>
                  <li>
                    <a href="javascript:;">产品小类1_3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="biglink" href="javascript:;">产品大类2</a><span class="menu_head">+</span>
                <ul class="left_snav_ul menu_body">
                  <li>
                    <a href="javascript:;">产品小类2_1</a>
                  </li>
                  <li>
                    <a href="javascript:;">产品小类2_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="biglink" href="javascript:;">产品大类3</a><span class="menu_head">+</span>
                <ul class="left_snav_ul menu_body"></ul>
              </li>
            </ul>
          </div>
          <div class="left_news">
            <h2 class="left_h2">新闻中心</h2>
            <ul class="left_news">
              <li>
                <router-link to="/guide/enter/newsItem" title="油价上涨激发勘探业石油钻探设备出">油价上涨激发勘探业石油钻探设备出</router-link>
              </li>
              <li>
                <router-link to="/guide/enter/newsItem" title="涨激发勘探业石油钻探设备出口激增">涨激发勘探业石油钻探设备出口激增</router-link>
              </li>
              <li>
                <router-link to="/guide/enter/newsItem" title="公司全面实施国际质量管理和质量保证体系">公司全面实施国际质量管理和质量保证</router-link>
              </li>
              <li>
                <router-link to="/guide/enter/newsItem" title="国际质量管理和质量保证体系国际质量管理">国际质量管理和质量保证体系国际质量</router-link>
              </li>
              <li>
                <router-link to="/guide/enter/newsItem" title="迎中兴金鸡湖花园开盘，大型团装团购征集样板房活动">迎中兴金鸡湖花园开盘，大型团装团购</router-link>
              </li>
            </ul>
          </div>
          <div class="index_contact">
            <h2 class="left_h2">联系我们</h2>
            <p style="padding-top:8px;">联系人：钟若天</p>
            <p>手 机：18156980205</p>
            <p>邮 箱：Lankecms@163.com</p>
            <p>公 司：代码库企业网站管理系统PHP版V2.0</p>
            <p>地 址：广东省广州市天河区天平架沙太路沙太路沙太路118号</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.page_bg {
  background: url(../assets/5780c309432c5.jpg) center top no-repeat;
}
</style>
