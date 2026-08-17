
        document.querySelectorAll(".faq-icon").forEach(icon => icon.onclick = () => {
            icon.closest(".faq-box").classList.toggle("active");
            icon.innerText = icon.closest(".faq-box").classList.contains("active") ? "-" : "+";
        });

        const signInBtn = document.getElementById("signInBtn");
        const overlay = document.getElementById("overlay");
        const closeModalBtn = document.getElementById("closeModalBtn");

        signInBtn.addEventListener("click", () => {
            overlay.classList.add("active");
        });

        closeModalBtn.addEventListener("click", () => {
            overlay.classList.remove("active");
        });

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.classList.remove("active");
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                overlay.classList.remove("active");
            }
        });
