function initSwitchForms() {
    const btnWork = document.getElementById("btn-work-with-us");
    const btnContact = document.getElementById("btn-contact-us");

    const contactForm = document.getElementById("container-contact-us");
    const workForm = document.getElementById("container-work-with-us");

    function switchForm(show, hide, direction) {
        const slider = document.querySelector(".form-slider");

        // 1. blocco altezza attuale
        const currentHeight = slider.offsetHeight;
        slider.style.height = currentHeight + "px";

        // 2. preparo il nuovo form per misurarlo
        show.classList.add("active");
        show.style.visibility = "hidden";
        show.style.position = "absolute";

        const newHeight = show.offsetHeight;

        // reset temporaneo
        show.classList.remove("active");
        show.style.visibility = "";
        show.style.position = "";

        // 3. animo altezza container
        requestAnimationFrame(() => {
            slider.style.height = newHeight + "px";
        });

        // 4. animazione uscita
        hide.classList.remove("active");
        hide.classList.add(direction === "left" ? "exit-left" : "exit-right");

        setTimeout(() => {
            hide.classList.remove("exit-left", "exit-right");

            // entra nuovo
            show.classList.add("active");

            // 5. reset altezza
            setTimeout(() => {
                slider.style.height = "auto";
            }, 300);

        }, 300);
    }

    // click
    btnWork.addEventListener("click", () => {
        switchForm(workForm, contactForm, "right");
    });

    btnContact.addEventListener("click", () => {
        switchForm(contactForm, workForm, "left");
    });
}