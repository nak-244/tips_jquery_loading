# html
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
