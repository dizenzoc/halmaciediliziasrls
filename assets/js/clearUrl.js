document.addEventListener("click", function (e) {

    const anchor = e.target.closest('a[href^="#"]');

    if (!anchor) return;

    const targetId = anchor.getAttribute("href");

    if (targetId.length > 1) {

        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

            history.replaceState(null, null, window.location.pathname);
        }

    }

});