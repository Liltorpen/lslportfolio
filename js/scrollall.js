const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

const elementsToWatch = document.querySelectorAll(
    '.case-item, .h2--cases, .h2--stats, .stats-flex, .hook, .staff-badge'
);

elementsToWatch.forEach((el) => observer.observe(el));