const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.case-item, .h2--cases, .h2--stats, .stats-flex, .hook, .staff-badge')
.forEach((el) => observer.observe(el));