function toggleDropdown() {
    var dropdownList = document.getElementById("dropdownList");
    dropdownList.style.display = (dropdownList.style.display === "block") ? "none" : "block";
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('button')) {
      var dropdownList = document.getElementById("dropdownList");
      if (dropdownList.style.display === "block") {
        dropdownList.style.display = "none";
      }
    }
  }
  