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

  <div id="js-loader" class="loader">
    <div class="loader-animation"></div>
  </div>

</body>
</html>
~~~
