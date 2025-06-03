const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

document.querySelectorAll(".skill-box").forEach(box => {
  box.addEventListener("mouseenter", () => {
    box.style.transform = "scale(1.03)";
    box.style.transition = "transform 0.3s ease";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "scale(1)";
  });
});

const downloadBtn = document.querySelector(".download-btn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    alert("Downloading resume...");
  });
}

const skillHeaders = document.querySelectorAll('.skill-header');

skillHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const clickedBox = header.parentElement;

    document.querySelectorAll('.skill-box').forEach(box => {
      if (box !== clickedBox) {
        box.classList.remove('open');
      }
    });

    clickedBox.classList.toggle('open');
  });
});
