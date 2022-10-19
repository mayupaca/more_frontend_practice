document.addEventListener("DOMContentLoaded", function () {
  const cb = function (el, isIntersecting) {
    //cover-slideが画面内に入ってきたときに...
    if (isIntersecting) {
      //inview追加
      el.classList.add("inview");
    }
  };

  const so = new ScrollObserver(".cover-slide", cb);
});
