## ページ遷移時のローディングアニメーションをjQueryとCSS3で実装
ページ遷移時にローディングアニメーションを表示する方法は色々ありますが、今回は十数行ほどの簡単なJS(jQuery)とCSSを使って実装してみたいと思います。簡単コピペ実装可能な内容になっています。

## html
~~~html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex">
  <title>ページローディングテスト1</title>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</head>
<body>

  <div class="l-wrap">
    <a href="https://newstella.co.jp/wp-content/themes/nst/demo/170302-pageload/2.html" class="button">ページ遷移してみる</a>
    <img src="https://newstella.co.jp/wp-content/themes/nst/demo/170302-pageload/1.JPG" alt="テスト画像1">
    <img src="https://newstella.co.jp/wp-content/themes/nst/demo/170302-pageload/2.JPG" alt="テスト画像2">
    <img src="https://newstella.co.jp/wp-content/themes/nst/demo/170302-pageload/3.JPG" alt="テスト画像3">
  </div>
<!-- ★ -->
  <div id="js-loader" class="loader">
    <div class="loader-animation"></div>
  </div>
<!-- ★ -->
</body>
</html>
~~~
ローディングに必要なのは、<!-- ★ -->で囲われた部分のみ。

## JS(jQuery)
JS(jQuery)は以下のようになります。
4行目にある★★★は実装したいサイトのURLに変更する必要があります。

~~~Javascript
// ローディング画面をフェードインさせてページ遷移
$(function(){
    // リンクをクリックしたときの処理。外部リンクやページ内移動のスクロールリンクなどではフェードアウトさせたくないので少し条件を加えてる。
    $('a[href ^= "★★★"]' + 'a[target != "_blank"]').click(function(){
        var url = $(this).attr('href'); // クリックされたリンクのURLを取得
        $('#js-loader').fadeIn(600);    // ローディング画面をフェードイン
        setTimeout(function(){ location.href = url; }, 800); // URLにリンクする
        return false;
    });
});

// ページのロードが終わった後の処理
$(window).load(function(){
  $('#js-loader').delay(300).fadeOut(400); //ローディング画面をフェードアウトさせることでメインコンテンツを表示
});

// ページのロードが終わらなくても10秒たったら強制的に処理を実行
$(function(){ setTimeout('stopload()', 10000); });
function stopload(){
  $('#js-loader').delay(300).fadeOut(400); //ローディング画面をフェードアウトさせることでメインコンテンツを表示
}
~~~

## CSS
CSSは以下のようになります。

~~~CSS
/* ローディングの背景部分のCSS */
.loader{
  background:#00AEEF;
  height:100%;
  left:0;
  position:fixed;
  top:0;
  width:100%;
  z-index:999999;
}

/* ローディングのアニメーション部分のCSS (https://projects.lukehaas.me/css-loaders/) */
.loader-animation {
  position:absolute;
  top:50%;
  font-size: 10px;
  margin: auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader-animation:before {
  width: 50%;
  height: 50%;
  background: #ffffff;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.loader-animation:after {
  background: #00aeef;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
~~~
