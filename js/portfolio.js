document.addEventListener("DOMContentLoaded", () => {
    // Menuボタンのクリックイベント
    document.querySelector('.MenuIcon').addEventListener('click', function () {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('open');
    });
    visible();

    // TopTitleのアニメーション
    function visible() {
        const topTitle = document.querySelector(".TopTitle");
        topTitle.classList.add("visible");

    }

    // メニュー内リンクを取得してスクロール処理を一括登録
    const menuLinks = document.querySelectorAll('.menu a');
    // 各要素に1つずつ処理を実行
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // 対象のセクションIDを取得してスクロール
            // クリックされたリンクの属性値を取得しtargetIdに格納
            const targetId = this.getAttribute('href');
            gsap.to(window, { scrollTo: targetId, duration: 0.7 });

            // メニューを閉じる
            const menu = document.querySelector('.menu');
            menu.classList.remove('open');
        });
    });
});
