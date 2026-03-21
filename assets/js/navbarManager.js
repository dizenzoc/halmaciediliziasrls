function collapseNavbarWhenClick() {
    document.querySelectorAll('#mainNavbar .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.getElementById('mainNavbar');
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
}
