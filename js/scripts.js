function loadComponent(file, elementId) {
    fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${file}`);
        }
        return response.text();
      })
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch((error) => console.error(error));
  }
  
  // Load the header and footer
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header.html", "header");
    loadComponent("footer.html", "footer");
  });
  