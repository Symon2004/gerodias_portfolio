const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

const phoneLink = document.querySelector('a[href^="tel:"]');
if (phoneLink) {
  phoneLink.addEventListener("click", () => {
    alert("Calling Symon Gerodias...");
  });
}
