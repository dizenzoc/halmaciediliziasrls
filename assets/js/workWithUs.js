function initWorkWithUsForm() {

    const form = document.getElementById("jobForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const numero = document.getElementById("phone").value;
        const messaggio = document.getElementById("messaggio").value;

        const destinatario = "zakmar@hotmail.it";

        const oggetto = "Candidatura Halmaci Edilizia S.R.L.S. - " + nome;

        const subject = encodeURIComponent(oggetto);
        const body = encodeURIComponent(
            "Nome: " + nome + "\n" +
            "Email: " + email + "\n" +
            "Numero: " + numero + "\n\n" +
            messaggio
        );

        window.location.href = `mailto:${destinatario}?subject=${subject}&body=${body}`;
    });

}