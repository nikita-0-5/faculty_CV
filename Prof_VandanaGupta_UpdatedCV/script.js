function Func() {
    let bodyElement = document.body;
    let navbarElement = document.querySelector('.navbar');
    
    bodyElement.classList.toggle("dark");
    navbarElement.classList.toggle("dark");
}

window.addEventListener("scroll", function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const researchList = document.getElementById("research-list");
    
    searchButton.addEventListener("click", function() {
      const searchText = searchInput.value.toLowerCase();
      
      for (const item of researchList.getElementsByTagName("li")) {
        const paperText = item.textContent.toLowerCase();
        if (paperText.includes(searchText)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
    
    // Optional: Clear search input on button click
    searchButton.addEventListener("click", function() {
      searchInput.value = "";
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("searchbutton");
    const projectList = document.querySelectorAll('.pList li');
    
    searchButton.addEventListener("click", function() {
        const searchText = searchInput.value.toLowerCase();
        
        projectList.forEach(function(item) {
            const projectText = item.textContent.toLowerCase();
            if (projectText.includes(searchText)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
    
    // Optional: Clear search input on button click
    searchButton.addEventListener("click", function() {
        searchInput.value = "";
    });
});

