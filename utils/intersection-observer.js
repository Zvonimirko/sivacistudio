const infoParts = document.querySelectorAll(".info-part");

const options = {
  root: null,
  rootMargin: "0px 0px -400px 0px",
};

const changeOpacityScroll = new IntersectionObserver(function (
  entries,
  changeOpacityScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("toggle-info");
      changeOpacityScroll.unobserve(entry.target);
    }
  });
},
options);

infoParts.forEach((part) => {
  changeOpacityScroll.observe(part);
});
