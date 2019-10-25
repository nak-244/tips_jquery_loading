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
