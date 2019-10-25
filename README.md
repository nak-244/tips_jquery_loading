## html
ロード画面とロード後に表示させたい要素を個別に括っておきます。

~~~html
<div id="loader-bg">
  <div id="loader">
    <img src="img-loading.gif" width="80" height="80" alt="Now Loading..." />
    <p>Now Loading...</p>
  </div>
</div>
<div id="wrap">
  ロード後に表示させたい内容
</div>
~~~

## CSS
CSSではローディング画面の初期設定を非表示になるようにしておきます。

~~~CSS
#loader-bg {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: #000;
  z-index: 1;
}
#loader {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  margin-top: -100px;
  margin-left: -100px;
  text-align: center;
  color: #fff;
  z-index: 2;
}
~~~

## jQuery
3～8行目でCSSで非表示にしたローディング画面を、ウィンドウの高さを指定して表示させます。  
10～14行目ですべての読み込みが完了したら非表示にするようにしています。  

また、もしページ内の一部に長時間読み込みが終了しないスクリプトや画像があった場合、ずっとローディング画面なのは、それはそれでまずいので、10秒経過したら強制的にロード画面が非表示になるようにしました。  

これがなくても動くので、通常は16～25行目は無くてもOKです。

~~~Javascript
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(function() {
  var h = $(window).height();

  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});

$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});

//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});

function stopload(){
  $('#wrap').css('display','block');
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}
</script>
~~~
