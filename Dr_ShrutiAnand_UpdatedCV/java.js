document.getElementById("download-link").addEventListener("click", function() {
    console.log("CV download initiated");
});

// Highlight active nav link based on current page
(function() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar a").forEach(function(a) {
        if (a.getAttribute("href") === path) {
            a.classList.add("active");
        }
    });
})();
