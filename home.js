const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

const para = document.createElement('p');
para.style.display = "none";
para.textContent = "I’m currently focused on building a strong foundation in database administration, network configuration, and cybersecurity practices. I’ve worked on practicing ad studying that involves SQL databases, basic firewall setups, and ethical hacking tools like Wireshark and Kali Linux. Outside of school, I enjoy researching new trends in cybersecurity and participating in online tech communities to stay up-to-date. My long-term goal is to become a cybersecurity analyst who helps organizations stay secure in an ever-evolving digital world.";
para.style.marginTop = "0.5rem";

const btn = document.createElement('button');
btn.textContent = "Read More";
btn.style.marginTop = "1rem";
btn.className = "read-more-btn";
btn.onclick = () => {
  para.style.display = para.style.display === "none" ? "block" : "none";
};

const textSection = document.querySelector(".text-content");
textSection.appendChild(btn);
textSection.appendChild(para);

const img = document.querySelector(".image-content img");
img.style.cursor = "pointer";
img.addEventListener("click", () => {
  img.style.transform = img.style.transform === "scale(1.2)" ? "scale(1)" : "scale(1.2)";
  img.style.transition = "transform 0.3s ease";
});

