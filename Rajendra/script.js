const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

//Mobile navigation
menuBtn.addEventListener("click", () => {
    const isOpen =nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "X" : "=";
});
//Close menu after selecting a section
nav.querySelectorAll("a").forEach((link) =>{
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "=";
    });
});
//Automatic copyright year
document.getElementById("year").textContent =
newDate(). getFullYear();

//HIghlight current section in navigation
const setions = document.querySelectorAll("main section[id");
const navLinks = document.querySelectorAll(".nav-link");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    const active = link.getAttribute("href") ===
                    "#" + entry.target.id;
                    link.classList.toggle("active", active);
                });
            }
        });
    }, { rootMargin: "-25% 0px -60% 0px"});
    setions.forEach((section) => observer.observe(section));
}
//Back-to-top button
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    topBtn.classList.toggle("show", window.scrollY > 350);
});
topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
//contact form: prepare an email in the visitor's email app
document.getElementById("contactForm").addEventListener("submit", (Event) => {
    Event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");
    
    if (!name || !email || !message){
        status.textContent = "Please fill in all fields.";
        return
    }
    //Replace this with your real email address.
    const recipient = "926337raj@gmail.com";

    if (recipient === "926337raj@gmail.com") {
        status.textContent =
        "Please add your real email address in script.js first.";
        return;
    }
    const subject = encodeURIComponent("Pportfolio enquiry from " + name);
    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );
    status.textContent =
    "Your email app will open.Review and send the message there.";

    window.location.href =
    `mailto:${recipient}?subject=${subject}&body=${body}`;
});
