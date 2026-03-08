fetch('/components/navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

fetch('/components/footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

fetch('/components/hero.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('hero').innerHTML = data;
    });

fetch('/components/servizi.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('servizi').innerHTML = data;
    });

    fetch('/components/about-us.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('about-us').innerHTML = data;
    });