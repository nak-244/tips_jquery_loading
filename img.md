# ページ遷移時のローディングアニメーションをimgで

## 伸びるアニメーション
https://ics-creative.github.io/160311_css3_animation/demo/purun.html
~~~html
<html>
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <link rel="stylesheet" href="css/common.css">
  <style>
    /* CSSアニメーションの設定 */
    .purun {
      -webkit-animation: purun 0.8s linear 0s 1;
      animation: purun 0.8s linear 0s 1;
    }
    @-webkit-keyframes purun {
      0%   { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
      15%  { -webkit-transform: scale(0.9, 0.9) translate(0%, 5%); }
      30%  { -webkit-transform: scale(1.3, 0.8) translate(0%, 10%); }
      50%  { -webkit-transform: scale(0.8, 1.3) translate(0%, -10%); }
      70%  { -webkit-transform: scale(1.1, 0.9) translate(0%, 5%); }
      100% { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
    }
    @keyframes purun {
      0%   { transform: scale(1.0, 1.0) translate(0%, 0%); }
      15%  { transform: scale(0.9, 0.9) translate(0%, 5%); }
      30%  { transform: scale(1.3, 0.8) translate(0%, 10%); }
      50%  { transform: scale(0.8, 1.3) translate(0%, -10%); }
      70%  { transform: scale(1.1, 0.9) translate(0%, 5%); }
      100% { transform: scale(1.0, 1.0) translate(0%, 0%); }
    }
  </style>
  <script src="js/common.js"></script>
</head>
<body>
  <div class="shadow"></div>
  <img id="mitarashi" class="purun" src="images/mitarashi.png" width="200" height="200">
  <script>
    // ID値「mitarashi」に対してCSSアニメ―ション「purun」を600ミリ秒の間隔を空けてループ再生
    looopAnimation("mitarashi", "purun", 600);
  </script>
</body>
</html>
~~~

## 揺れるアニメーション
https://ics-creative.github.io/160311_css3_animation/demo/korokoro.html

~~~html
<html>
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <link rel="stylesheet" href="css/common.css">
  <style>
    /* CSSアニメーションの設定 */
    .korokoro {
      -webkit-animation: korokoro 2.5s linear 0s 1;
      animation: korokoro 2.5s linear 0s 1;
    }
    @-webkit-keyframes korokoro {
      0%   { -webkit-transform: translate(0%, 0%); }
      5%   { -webkit-transform: translate(10%, 0%) rotate(10deg); }
      25%  { -webkit-transform: translate(20%, 0%) rotate(20deg); }
      30%  { -webkit-transform: translate(-10%, 0%) rotate(-10deg); }
      35%  { -webkit-transform: translate(-15%, 0%) rotate(-15deg); }
      45%  { -webkit-transform: translate(10%, 0%) rotate(10deg); }
      50%  { -webkit-transform: translate(15%, 0%) rotate(15deg); }
      60%  { -webkit-transform: translate(-5%, 0%) rotate(-5deg); }
      65%  { -webkit-transform: translate(-7%, 0%) rotate(-7deg); }
      75%  { -webkit-transform: translate(0%, 0%) rotate(0deg); }
      100% { -webkit-transform: translate(0%, 0%) rotate(0deg); }
    }
    @keyframes korokoro {
      0%   { transform: translate(0%, 0%); }
      5%   { transform: translate(10%, 0%) rotate(10deg); }
      25%  { transform: translate(20%, 0%) rotate(20deg); }
      30%  { transform: translate(-10%, 0%) rotate(-10deg); }
      35%  { transform: translate(-15%, 0%) rotate(-15deg); }
      45%  { transform: translate(10%, 0%) rotate(10deg); }
      50%  { transform: translate(15%, 0%) rotate(15deg); }
      60%  { transform: translate(-5%, 0%) rotate(-5deg); }
      65%  { transform: translate(-7%, 0%) rotate(-7deg); }
      75%  { transform: translate(0%, 0%) rotate(0deg); }
      100% { transform: translate(0%, 0%) rotate(0deg); }
    }
  </style>
  <script src="js/common.js"></script>
</head>
<body>
  <div class="shadow"></div>
  <img id="mitarashi" class="korokoro" src="images/mitarashi.png" width="200" height="200">
  <script>
    // ID値「mitarashi」に対してCSSアニメ―ション「korokoro」を100ミリ秒の間隔を空けてループ再生
    looopAnimation("mitarashi", "korokoro", 100);
  </script>
</body>
</html>
~~~

## ぷるぷるするアニメーション
https://ics-creative.github.io/160311_css3_animation/demo/purupuru.html

~~~html
<html>
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <link rel="stylesheet" href="css/common.css">
  <style>
    /* CSSアニメーションの設定 */
    .purupuru {
      -webkit-animation: purupuru 0.8s linear 0s 1;
      animation: purupuru 0.8s linear 0s 1;
    }
    @-webkit-keyframes purupuru {
      0%   { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
      20%  { -webkit-transform: scale(1.0, 1.06) translate(-5%, -4%) skew(6deg, 0deg); }
      50%  { -webkit-transform: scale(1.0, 0.94) translate(5%, 4%) skew(-6deg, 0deg); }
      65%  { -webkit-transform: scale(1.0, 1.03) translate(2%, -2%) skew(-3deg, 0deg); }
      80%  { -webkit-transform: scale(1.0, 0.97) translate(-2%, 2%) skew(3deg, 0deg); }
      100% { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
    }
    @keyframes purupuru {
      0%   { transform: scale(1.0, 1.0) translate(0%, 0%); }
      20%  { transform: scale(1.0, 1.06) translate(-5%, -4%) skew(6deg, 0deg); }
      50%  { transform: scale(1.0, 0.94) translate(5%, 4%) skew(-6deg, 0deg); }
      65%  { transform: scale(1.0, 1.03) translate(2%, -2%) skew(-3deg, 0deg); }
      80%  { transform: scale(1.0, 0.97) translate(-2%, 2%) skew(3deg, 0deg); }
      100% { transform: scale(1.0, 1.0) translate(0%, 0%); }
    }
  </style>
  <script src="js/common.js"></script>
</head>
<body>
  <div class="shadow"></div>
  <img id="mitarashi" class="purupuru" src="images/mitarashi.png" width="200" height="200">
  <script>
    // ID値「mitarashi」に対してCSSアニメ―ション「purupuru」を800ミリ秒の間隔を空けてループ再生
    looopAnimation("mitarashi", "purupuru", 800);
  </script>
</body>
</html>
~~~

## 着地するアニメーション
https://ics-creative.github.io/160311_css3_animation/demo/poyon.html

~~~html
<html>
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <link rel="stylesheet" href="css/common.css">
  <style>
    /* CSSアニメーションの設定 */
    .poyon {
      -webkit-animation: poyon 1.1s linear 0s 1;
      animation: poyon 1.1s linear 0s 1;
    }
    @-webkit-keyframes poyon {
      0%   { -webkit-transform: scale(0.8, 1.4) translate(0%, -100%); }
      10%  { -webkit-transform: scale(0.8, 1.4) translate(0%, -15%); }
      20%  { -webkit-transform: scale(1.4, 0.6) translate(0%, 30%); }
      30%  { -webkit-transform: scale(0.9, 1.1) translate(0%, -10%); }
      40%  { -webkit-transform: scale(0.95, 1.2) translate(0%, -30%); }
      50%  { -webkit-transform: scale(0.95, 1.2) translate(0%, -10%); }
      60%  { -webkit-transform: scale(1.1, 0.9) translate(0%, 5%); }
      70%  { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
      100% { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
    }
    @keyframes poyon {
      0%   { transform: scale(0.8, 1.4) translate(0%, -100%); }
      10%  { transform: scale(0.8, 1.4) translate(0%, -15%); }
      20%  { transform: scale(1.4, 0.6) translate(0%, 30%); }
      30%  { transform: scale(0.9, 1.1) translate(0%, -10%); }
      40%  { transform: scale(0.95, 1.2) translate(0%, -30%); }
      50%  { transform: scale(0.95, 1.2) translate(0%, -10%); }
      60%  { transform: scale(1.1, 0.9) translate(0%, 5%); }
      70%  { transform: scale(1.0, 1.0) translate(0%, 0%); }
      100% { transform: scale(1.0, 1.0) translate(0%, 0%); }
    }
  </style>
  <script src="js/common.js"></script>
</head>
<body>
  <div class="shadow"></div>
  <img id="mitarashi" class="poyon" src="images/mitarashi.png" width="200" height="200">
  <script>
    // ID値「mitarashi」に対してCSSアニメ―ション「poyon」を300ミリ秒の間隔を空けてループ再生
    looopAnimation("mitarashi", "poyon", 300);
  </script>
</body>
</html>
~~~

## 跳ねるアニメーション
https://ics-creative.github.io/160311_css3_animation/demo/poyooon.html

~~~html
<html>
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <link rel="stylesheet" href="css/common.css">
  <style>
    /* CSSアニメーションの設定 */
    .poyooon {
      -webkit-animation: poyooon 0.9s linear 0s 1;
      animation: poyooon 0.9s linear 0s 1;
    }
    @-webkit-keyframes poyooon {
      0%   { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
      10%  { -webkit-transform: scale(1.1, 0.9) translate(0%, 5%); }
      40%  { -webkit-transform: scale(1.2, 0.8) translate(0%, 15%); }
      50%  { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
      60%  { -webkit-transform: scale(0.9, 1.2) translate(0%, -100%); }
      75%  { -webkit-transform: scale(0.9, 1.2) translate(0%, -20%); }
      85%  { -webkit-transform: scale(1.2, 0.8) translate(0%, 15%); }
      100% { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
    }
    @keyframes poyooon {
      0%   { transform: scale(1.0, 1.0) translate(0%, 0%); }
      10%  { transform: scale(1.1, 0.9) translate(0%, 5%); }
      40%  { transform: scale(1.2, 0.8) translate(0%, 15%); }
      50%  { transform: scale(1.0, 1.0) translate(0%, 0%); }
      60%  { transform: scale(0.9, 1.2) translate(0%, -100%); }
      75%  { transform: scale(0.9, 1.2) translate(0%, -20%); }
      85%  { transform: scale(1.2, 0.8) translate(0%, 15%); }
      100% { transform: scale(1.0, 1.0) translate(0%, 0%); }
    }
  </style>
  <script src="js/common.js"></script>
</head>
<body>
  <div class="shadow"></div>
  <img id="mitarashi" class="poyooon" src="images/mitarashi.png" width="200" height="200">
  <script>
    // ID値「mitarashi」に対してCSSアニメ―ション「poyooon」を600ミリ秒の間隔を空けてループ再生
    looopAnimation("mitarashi", "poyooon", 600);
  </script>
</body>
</html>
~~~

## 元にもどるアニメーション（縦方向）
https://ics-creative.github.io/160311_css3_animation/demo/puyon.html

~~~html
<html>
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <link rel="stylesheet" href="css/common.css">
  <style>
    /* CSSアニメーションの設定 */
    .puyon {
      -webkit-animation: puyon 1.0s linear 0s 1;
      animation: puyon 1.0s linear 0s 1;
    }
    @-webkit-keyframes puyon {
      0%   { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
      40%  { -webkit-transform: scale(0.95, 1.2) translate(0%, -10%); }
      50%  { -webkit-transform: scale(1.1, 0.9) translate(0%, 5%); }
      60%  { -webkit-transform: scale(0.95, 1.05) translate(0%, -3%); }
      70%  { -webkit-transform: scale(1.05, 0.95) translate(0%, 3%); }
      80%  { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
      100% { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
    }
    @keyframes puyon {
      0%   { transform: scale(1.0, 1.0) translate(0%, 0%); }
      40%  { transform: scale(0.95, 1.2) translate(0%, -10%); }
      50%  { transform: scale(1.1, 0.9) translate(0%, 5%); }
      60%  { transform: scale(0.95, 1.05) translate(0%, -3%); }
      70%  { transform: scale(1.05, 0.95) translate(0%, 3%); }
      80%  { transform: scale(1.0, 1.0) translate(0%, 0%); }
      100% { transform: scale(1.0, 1.0) translate(0%, 0%); }
    }
  </style>
  <script src="js/common.js"></script>
</head>
<body>
  <div class="shadow"></div>
  <img id="mitarashi" class="puyon" src="images/mitarashi.png" width="200" height="200">
  <script>
    // ID値「mitarashi」に対してCSSアニメ―ション「puyon」を400ミリ秒の間隔を空けてループ再生
    looopAnimation("mitarashi", "puyon", 400);
  </script>
</body>
</html>
~~~

## 元にもどるアニメーション（横方向）
https://ics-creative.github.io/160311_css3_animation/demo/pururun.html

~~~html
<html>
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  <link rel="stylesheet" href="css/common.css">
  <style>
    /* CSSアニメーションの設定 */
    .pururun {
      -webkit-animation: pururun 1.2s linear 0.2s 1;
      animation: pururun 1.2s linear 0.2s 1;
    }
    @-webkit-keyframes pururun {
      0%   { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
      10%  { -webkit-transform: scale(1.0, 1.0) translate(10%, 0%) skew(-10deg, 0deg); }
      60%  { -webkit-transform: scale(1.0, 1.0) translate(20%, 0%) skew(-20deg, 0deg); }
      70%  { -webkit-transform: scale(1.0, 1.0) translate(-15%, 0%) skew(15deg, 0deg); }
      80%  { -webkit-transform: scale(1.0, 1.0) translate(15%, 0%) skew(-15deg, 0deg); }
      80%  { -webkit-transform: scale(1.0, 1.0) translate(5%, 0%) skew(-5deg, 0deg); }
      90%  { -webkit-transform: scale(1.0, 1.0) translate(-5%, 0%) skew(5deg, 0deg); }
      100% { -webkit-transform: scale(1.0, 1.0) translate(0%, 0%); }
    }
    @keyframes pururun {
      0%   { transform: scale(1.0, 1.0) translate(0%, 0%); }
      10%  { transform: scale(1.0, 1.0) translate(10%, 0%) skew(-10deg, 0deg); }
      60%  { transform: scale(1.0, 1.0) translate(20%, 0%) skew(-20deg, 0deg); }
      70%  { transform: scale(1.0, 1.0) translate(-15%, 0%) skew(15deg, 0deg); }
      80%  { transform: scale(1.0, 1.0) translate(15%, 0%) skew(-15deg, 0deg); }
      80%  { transform: scale(1.0, 1.0) translate(5%, 0%) skew(-5deg, 0deg); }
      90%  { transform: scale(1.0, 1.0) translate(-5%, 0%) skew(5deg, 0deg); }
      100% { transform: scale(1.0, 1.0) translate(0%, 0%); }
    }
  </style>
  <script src="js/common.js"></script>
</head>
<body>
  <div class="shadow"></div>
  <img id="mitarashi" class="pururun" src="images/mitarashi.png" width="200" height="200">
  <script>
    // ID値「mitarashi」に対してCSSアニメ―ション「pururun」を600ミリ秒の間隔を空けてループ再生
    looopAnimation("mitarashi", "pururun", 600);
  </script>
</body>
</html>
~~~

## しごとら貼付け用 imgバージョン

~~~html
<!-- loading -->

<div class="loader" id="js-loader">
  <div class="loader-animation">
    <!-- <img id="mitarashi" class="korokoro" src="https://www.olp.co.jp/jobsite_assets/img/sigotora/loading1.png" width="300"> -->
    <script type="text/javascript">
 var imglist = new Array(
    "https://www.olp.co.jp/jobsite_assets/img/sigotora/loading1.png",
    "https://www.olp.co.jp/jobsite_assets/img/sigotora/loading2.png",
    "https://www.olp.co.jp/jobsite_assets/img/sigotora/loading3.png",
    "https://www.olp.co.jp/jobsite_assets/img/sigotora/loading4.png" );
 var selectnum = Math.floor(Math.random() * imglist.length);
 var idtxt = "mitarashi";
 var classtxt = "korokoro";
 var widthtxt = "300";
 var output = '<img src=' + imglist[selectnum] + '\tid="' + idtxt + '"\tclass="' + classtxt + '"\twidth="' + widthtxt + '">';
 document.write(output);
</script>
    <p class="loadtext">Loading ...</p>
  </div>
</div>
<style>
  /* ローディングの背景部分のCSS */
  .loader {
    background: #00AEEF;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999999;
  }
  .loader-animation {
    height: 100%;
    position: relative;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  /* CSSアニメーションの設定 */
  .korokoro {
    -webkit-animation: korokoro 2.5s linear 0s 1;
    animation: korokoro 2.5s linear 0s 1;
  }
  @-webkit-keyframes korokoro {
   0%   { -webkit-transform: translate(0%, 0%); }
   5%   { -webkit-transform: translate(10%, 0%) rotate(10deg); }
   25%  { -webkit-transform: translate(20%, 0%) rotate(20deg); }
   30%  { -webkit-transform: translate(-10%, 0%) rotate(-10deg); }
   35%  { -webkit-transform: translate(-15%, 0%) rotate(-15deg); }
   45%  { -webkit-transform: translate(10%, 0%) rotate(10deg); }
   50%  { -webkit-transform: translate(15%, 0%) rotate(15deg); }
   60%  { -webkit-transform: translate(-5%, 0%) rotate(-5deg); }
   65%  { -webkit-transform: translate(-7%, 0%) rotate(-7deg); }
   75%  { -webkit-transform: translate(0%, 0%) rotate(0deg); }
   100% { -webkit-transform: translate(0%, 0%) rotate(0deg); }
 }
 @keyframes korokoro {
   0%   { transform: translate(0%, 0%); }
   5%   { transform: translate(10%, 0%) rotate(10deg); }
   25%  { transform: translate(20%, 0%) rotate(20deg); }
   30%  { transform: translate(-10%, 0%) rotate(-10deg); }
   35%  { transform: translate(-15%, 0%) rotate(-15deg); }
   45%  { transform: translate(10%, 0%) rotate(10deg); }
   50%  { transform: translate(15%, 0%) rotate(15deg); }
   60%  { transform: translate(-5%, 0%) rotate(-5deg); }
   65%  { transform: translate(-7%, 0%) rotate(-7deg); }
   75%  { transform: translate(0%, 0%) rotate(0deg); }
   100% { transform: translate(0%, 0%) rotate(0deg); }
 }
 /* loadtext */
 .loadtext {
   color: #FFFFFF;
 }
</style>

<script>
  // CSSアニメーションを間隔を空けてループ再生させる処理
  function looopAnimation(id, className, delay) {
    var element = document.getElementById(id);
    element.addEventListener("animationend", listener);

    function listener(event) {
      event.target.classList.remove(className);
      setTimeout(playAnimation, delay);
    }

    function playAnimation() {
      element.classList.add(className);
    }
  }
  // ID値「mitarashi」に対してCSSアニメ―ション「korokoro」を100ミリ秒の間隔を空けてループ再生
  looopAnimation("mitarashi", "korokoro", 100);

  // ローディング画面をフェードインさせてページ遷移
  $(function() {
    // リンクをクリックしたときの処理。外部リンクやページ内移動のスクロールリンクなどではフェードアウトさせたくないので少し条件を加えてる。
    $('a[href ^= "https://sigotora.jp/"]' + 'a[target != "_blank"]').click(function() {
      var url = $(this).attr('href'); // クリックされたリンクのURLを取得
      $('#js-loader').fadeIn(600); // ローディング画面をフェードイン
      setTimeout(function() {
        location.href = url;
      }, 800); // URLにリンクする
      return false;
    });
  });

  // ページのロードが終わった後の処理
  $(window).load(function() {
    $('#js-loader').delay(300).fadeOut(400); //ローディング画面をフェードアウトさせることでメインコンテンツを表示
  });

  // ページのロードが終わらなくても10秒たったら強制的に処理を実行
  $(function() {
    setTimeout('stopload()', 10000);
  });

  function stopload() {
    $('#js-loader').delay(300).fadeOut(400); //ローディング画面をフェードアウトさせることでメインコンテンツを表示
  }
</script>
~~~
