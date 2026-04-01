function initContactUsForm() {
  const form = document.getElementById("form-contact-us");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = form.querySelector("#nome").value;
    const email = form.querySelector("#email").value;
    const numero = form.querySelector("#phone").value;
    const messaggio = form.querySelector("#messaggio").value;

    const destinatario = "halmaciediliziasrls@gmail.com";

    const oggetto =
      "Richiesta informazioni Halmaci Edilizia S.R.L.S. - " + nome;

    const subject = encodeURIComponent(oggetto);
    const body = encodeURIComponent(
        "Salve, con la presente richiedo un preventivo per un progetto edile a nome di " +
        nome +
        ".\n\n" +
        "Dettagli della richiesta:\n" +
        "---------------------------\n" +
        messaggio +
        "\n" +
        "---------------------------\n\n" +
        "Potete ricontattarmi per un sopralluogo o per maggiori dettagli ai seguenti recapiti:\n" +
        "• Email: " +
        email +
        "\n" +
        "• Numero: " +
        numero +
        "\n\n" +
        "In attesa di un vostro riscontro, porgo cordiali saluti.\n" +
        nome,
    );

    window.location.href = `mailto:${destinatario}?subject=${subject}&body=${body}`;
  });
}

function initWorkWithUsForm() {
  const form = document.getElementById("form-work-with-us");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = form.querySelector("#nomeWork").value;
    const email = form.querySelector("#emailWork").value;
    const numero = form.querySelector("#phoneWork").value;
    const messaggio = form.querySelector("#messaggioWork").value;

    const destinatario = "halmaciediliziasrls@gmail.com";

    const oggetto = "Candidatura Halmaci Edilizia S.R.L.S. - " + nome;

    const subject = encodeURIComponent(oggetto);
    const body = encodeURIComponent(
      "Spett.le Ufficio Risorse Umane,\n\n" +
        "Mi chiamo " +
        nome +
        " e vorrei sottoporre il mio profilo alla vostra attenzione.\n\n" +
        "Di seguito i miei recapiti per un contatto:\n" +
        "• Email: " +
        email +
        "\n" +
        "• Telefono: " +
        numero +
        "\n\n" +
        "Messaggio di presentazione:\n" +
        messaggio +
        "\n\n" +
        "In attesa di un vostro riscontro, porgo cordiali saluti.\n" +
        nome,
    );

    window.location.href = `mailto:${destinatario}?subject=${subject}&body=${body}`;
  });
}
