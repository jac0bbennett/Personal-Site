const postBody = document.getElementById("post-body");

postBody.classList.add("non-scrolled-post");

const headerHeight = document.getElementById("header").clientHeight;

window.addEventListener("scroll", function(e) {
  if (window.scrollY >= headerHeight) {
    postBody.classList.remove("non-scrolled-post");
  } else {
    postBody.classList.add("non-scrolled-post");
  }
});
