const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-text-content');
    if (hero) {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        hero.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
});
