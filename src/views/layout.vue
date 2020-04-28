<template>
  <div>
    <header>
      <!-- <div class="top_menu">
        <div class="container">
          <span class="top_name">欢迎光临~代码库企业网站管理系统PHP版V2.0</span>
          <div class="language">
            <span class="glyphicon glyphicon-phone-alt" aria-hidden="true"></span>&nbsp;&nbsp;咨询电话：18156980205
          </div>
        </div>
      </div> -->
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-9 col-md-9">
            <router-link to="/guide/index"><img src="../assets/53007d5b00000.png" class="logo" alt="代码库企业网站管理系统PHP版V2.0"/></router-link>
          </div>
          <div id="topsearch" class="col-xs-12 col-sm-3 col-md-3">
            <form id="searchform" method="get" action="">
              <div class="input-group search_group">
                <input type="text" name="name" class="form-control input-sm" placeholder="产品搜索"><span class="input-group-btn"><a href="javascript:searchform.submit();" class="btn btn-sm mysearch_btn" type="button">搜 索</a></span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- Fixed navbar -->
      <nav id="top_nav" class="navbar navbar-default navbar-static-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">导航菜单</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <span id="small_search" class="glyphicon glyphicon-search" aria-hidden="true"></span>
            <a class="navbar-brand" href="javascript:;">导航菜单</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/guide/index">网站首页</router-link></li>
              <li><router-link to="/guide/enter/aboutUs">公司简介</router-link></li>
              <li class="dropdown">
                <a href="javascript:;">产品中心</a>
                <a href="javascript:;" id="app_menudown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
                <ul class="dropdown-menu nav_small" role="menu">
                  <li><router-link to="/guide/enter/productList">产品大类1</router-link></li>
                  <li><router-link to="/guide/enter/productList">产品大类2</router-link></li>
                  <li><router-link to="/guide/enter/productList">产品大类3</router-link></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="javascript:;">新闻中心</a>
                <a href="javascript:;" id="app_menudown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
                <ul class="dropdown-menu nav_small" role="menu">
                  <li><router-link to="/guide/enter/news">公司新闻</router-link></li>
                  <li><router-link to="/guide/enter/news">行业新闻</router-link></li>
                  <li><router-link to="/guide/enter/news">科技创新</router-link></li>
                </ul>
              </li>
              <!-- <li class="dropdown">
                <a href="javascript:;">下载中心</a>
                <a href="javascript:;" id="app_menudown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
                <ul class="dropdown-menu nav_small" role="menu">
                  <li><a href="javascript:;">帮助文档</a></li>
                  <li><a href="javascript:;">档案下载</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="javascript:;">客户案例</a>
                <a href="javascript:;" id="app_menudown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span class="glyphicon glyphicon-menu-down btn-xs"></span></a>
                <ul class="dropdown-menu nav_small" role="menu">
                  <li><a href="javascript:;">最新案例</a></li>
                  <li><a href="javascript:;">经典案例</a></li>
                </ul>
              </li> -->
              <li><router-link to="/guide/enter/feedback">在线留言</router-link></li>
              <li><router-link to="/guide/enter/contactUs">联系我们</router-link></li>
            </ul>
          </div>
          <!--/.nav-collapse -->
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>
