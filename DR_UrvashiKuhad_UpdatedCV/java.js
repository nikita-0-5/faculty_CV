
document.getElementById("download-link").addEventListener("click", function() {
});

// Fade in on page load
window.addEventListener("load", function () {
  document.body.classList.add("page-loaded");
});

// Fade out when clicking internal links
document.querySelectorAll("a").forEach(function(link) {
  link.addEventListener("click", function(e) {
    if (link.hostname === window.location.hostname) {
      e.preventDefault();
      document.body.classList.remove("page-loaded");
      document.body.classList.add("fade-out");

      setTimeout(function() {
        window.location = link.href;
      }, 150); // matches CSS transition time
    }
  });
});