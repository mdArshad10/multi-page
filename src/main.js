const currentPage = window.location.pathname; // Track current page

const handleNavigation = (event) => {
  // Prevent default behavior of following the link
  event.preventDefault();

  const targetPath = event.target.href; // Get the target path from the anchor's href

  // Update the current page state
  currentPage = targetPath;

  // Use history.pushState for client-side routing
  history.pushState({}, "", targetPath);

  // Update the DOM content (optional but recommended for a seamless transition)
  fetch(targetPath) // Fetch the HTML content of the target page
    .then((response) => response.text())
    .then((html) => {
      document.documentElement.innerHTML = html; // Replace current content
    });
};

const aboutPage = document.getElementById("next-page");

aboutPage.addEventListener("click", handleNavigation);
