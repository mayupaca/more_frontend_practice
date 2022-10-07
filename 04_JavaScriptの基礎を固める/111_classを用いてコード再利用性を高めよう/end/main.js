document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 1000);
    
});

// classが作られた時には実行されない。new演算子が使われたときに実行される
class TextAnimation {
    // constructor関数 - classを初期化
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    // _から始まるメソッド ＝ プライベートメソッド(class内で使う)
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    // パブリックメソッド
    animate() {
        this.el.classList.toggle('inview');
    }
}
