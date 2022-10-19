document.addEventListener("DOMContentLoaded", function () {
  const els = document.querySelectorAll(".animate-title");
  const cb = function (entries, observe) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const ta = new TextAnimation(entry.target);
        ta.animate();
        // 監視の停止
        observe.unobserve(entry.target)
        // console.log("inview");
        // entry.target.classList.add("inview");
      } else {
        // console.log("outview");
        // entry.target.classList.remove("inview");
      }
    });
    // alert("intersecting");
  };
  // スタイルが変わる値の指定
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };
  const io = new IntersectionObserver(cb, options);
  els.forEach((el) => io.observe(el));
});
