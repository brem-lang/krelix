document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
    if (faqItems.length) {
        faqItems.forEach(item => {
            const question = item.querySelector(".faq-question");
            if (question) {
                question.addEventListener("click", () => {
                    faqItems.forEach(i => {
                        if (i !== item) {
                            i.classList.remove("active");
                        }
                    });
                    item.classList.toggle("active");
                });
            }
        });
    }
});