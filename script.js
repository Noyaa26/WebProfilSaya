function toggleBiodata() {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
        section.style.display = section.style.display === "none" ? "block" : "none";
    });
}
