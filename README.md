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
