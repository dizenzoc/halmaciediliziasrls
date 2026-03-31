function initContactUsForm() {
    const form = document.getElementById("form-contact-us");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = form.querySelector("#nome").value;
        const email = form.querySelector("#email").value;
        const messaggio = form.querySelector("#messaggio").value;

        const destinatario = "halmaciediliziasrls@gmail.com";

        const oggetto = "Richiesta informazioni Halmaci Edilizia S.R.L.S. - " + nome;

        const subject = encodeURIComponent(oggetto);
        const body = encodeURIComponent(
            "Nome: " + nome + "\n" +
            "Email: " + email + "\n" +
            messaggio
        );

        alert("Apertura client email...");

        window.location.href = `mailto:${destinatario}?subject=${subject}&body=${body}`;
    });

}

function initWorkWithUsForm() {

    const form = document.getElementById("form-work-with-us");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = form.querySelector("#nome").value;
        const email = form.querySelector("#email").value;
        const numero = form.querySelector("#phone").value;
        const messaggio = form.querySelector("#messaggio").value;

        const destinatario = "halmaciediliziasrls@gmail.com";

        const oggetto = "Candidatura Halmaci Edilizia S.R.L.S. - " + nome;

        const subject = encodeURIComponent(oggetto);
        const body = encodeURIComponent(
            "Nome: " + nome + "\n" +
            "Email: " + email + "\n" +
            "Numero: " + numero + "\n\n" +
            messaggio
        );

        alert("Apertura client email...");

        window.location.href = `mailto:${destinatario}?subject=${subject}&body=${body}`;
    });

}