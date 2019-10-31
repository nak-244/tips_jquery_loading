    // しごとらアニメーションを間隔を空けてループ再生させる処理
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
