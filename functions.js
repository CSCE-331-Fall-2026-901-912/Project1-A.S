function toggleStyle() {
    var stylesheet = document.getElementById("style-sheet");
    var button = document.getElementById("style-toggle");
  
    if (stylesheet.getAttribute("href") === "light.css") {
      stylesheet.setAttribute("href", "dark.css");
      localStorage.setItem("websiteStyle", "dark");
      button.textContent = "Switch to Light ";
    } else {
      stylesheet.setAttribute("href", "light.css");
      localStorage.setItem("websiteStyle", "light");
      button.textContent = "Switch to Dark ";
    }
  }
  
  function loadStyle() {
    var stylesheet = document.getElementById("style-sheet");
    var button = document.getElementById("style-toggle");
    var savedStyle = localStorage.getItem("websiteStyle");
  
    if (savedStyle === "dark") {
      stylesheet.setAttribute("href", "dark.css");
      button.textContent = "Switch to Light";
    } else {
      stylesheet.setAttribute("href", "light.css");
      button.textContent = "Switch to Dark ";
    }
  }