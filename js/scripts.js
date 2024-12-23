function loadHeaderFooter() {
  fetch("header.html")
      .then(response => {
          if (!response.ok) throw new Error("Failed to load header");
          return response.text();
      })
      .then(data => {
          document.querySelector("#header").innerHTML = data;
      })
      .catch(error => console.error(error));

  fetch("footer.html")
      .then(response => {
          if (!response.ok) throw new Error("Failed to load footer");
          return response.text();
      })
      .then(data => {
          document.querySelector("#footer").innerHTML = data;
      })
      .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", loadHeaderFooter);

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]'); // Select all anchor links with href starting with "#"

  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default anchor behavior

          // Get the target element
          const targetId = this.getAttribute("href").slice(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              // Smooth scroll to the target element
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: "smooth"
              });
          }
      });
  });
});

