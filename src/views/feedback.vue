<template>
  <div class="list_box">
    <h2 class="left_h2">在线留言</h2>
    <div class="feedback">
      <form id="myform" name="myform" class="form-horizontal" method="post" action="/A11/?m=Feedback&a=check" onSubmit="return CheckJob()">
        <div class="form-group">
          <label for="title" class="col-sm-3 control-label">标 题：</label>
          <div class="col-sm-6">
            <input type="text" name="title" class="form-control" id="title" placeholder="必填">
          </div>
        </div>
        <div class="form-group">
          <label for="username" class="col-sm-3 control-label">姓 名：</label>
          <div class="col-sm-6">
            <input type="text" name="name" class="form-control" id="username" placeholder="必填">
          </div>
        </div>
        <div class="form-group">
          <label for="tel" class="col-sm-3 control-label">电 话：</label>
          <div class="col-sm-6">
            <input type="text" name="tel" class="form-control" id="tel" placeholder="必填">
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail" class="col-sm-3 control-label">邮 箱：</label>
          <div class="col-sm-6">
            <input type="email" name="email" class="form-control" id="inputEmail">
          </div>
        </div>
        <div class="form-group">
          <label for="add" class="col-sm-3 control-label">地 址：</label>
          <div class="col-sm-6">
            <input type="text" name="add" class="form-control" id="add">
          </div>
        </div>
        <div class="form-group">
          <label for="contents" class="col-sm-3 control-label">备 注：</label>
          <div class="col-sm-6">
            <textarea name="contents" class="form-control" rows="3"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label for="code" class="col-xs-12 col-sm-3 control-label">验证码：</label>
          <div class="col-xs-7 col-sm-2">
            <input type="text" name="code" class="form-control" id="code" placeholder="验证码">
          </div>
          <div class="col-xs-2 col-sm-1">
            <img class="codeimg" src="/A11/common/verify.html" onclick='this.src=this.src+"?"+Math.random()'/>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-3 col-sm-10">
            <button type="submit" name="button" value="提交留言" class="btn btn-danger page-btn">提交留言</button>&nbsp;
            <button type="reset" name="reset" class="btn btn-default grey-btn">重新填写</button>
          </div>
        </div>
        <input type="hidden" name="__hash__" value="8f52e6cd98f23bd08d91d0b8a4cd9a06_0e80285006e412f03fcf90af53299892" />
      </form>
    </div>
  </div>
</template>
<script>
// function CheckJob () {
//   if (document.myform.title.value.length === '') {
//     alert('标题不能为空！')
//     document.myform.title.focus()
//     return false
//   }
//   if (document.myform.name.value.length === '') {
//     alert('姓名不能为空！')
//     document.myform.name.focus()
//     return false
//   }
//   if (document.myform.tel.value.length === '') {
//     alert('电话不能为空！')
//     document.myform.tel.focus()
//     return false
//   }
// }
</script>
