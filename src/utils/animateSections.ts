const animatedSections = document.querySelectorAll('.animated-section');

if (animatedSections.length > 0) {
    const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('fade-in-left')) entry.target.classList.add('animate-left');
                    if (entry.target.classList.contains('fade-in-right')) entry.target.classList.add('animate-right');
                    if (entry.target.classList.contains('fade-in-bottom')) entry.target.classList.add('animate-in-bottom');
                    if (entry.target.classList.contains('fade-in')) entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.45,
        }
    );
    animatedSections.forEach((section) => observer.observe(section));
}