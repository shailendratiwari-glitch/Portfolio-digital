// Intersection Observer for Fade-in Effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Simple Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 200; 
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };
    // Trigger updateCount when visible (logic can be added here)
    updateCount();
});
// Custom Cursor Movement
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cursor hover effect on buttons
document.querySelectorAll('a, button').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2.5)');
    link.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// FAQ Accordion Logic
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
        
        // Rotate the + icon
        const span = button.querySelector('span');
        span.innerText = item.classList.contains('active') ? '-' : '+';
    });
});

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});