const blogCard = document.querySelector('.blog-card');

blogCard.addEventListener('mousemove', (e) => {
    const rect = blogCard.getBoundingClientRect();

    // Angle of rotation around the y-axis
    const yAngle = (e.clientX - rect.left) / rect.width * 5 - 5/2;

    // Angle of rotation around the x-axis
    const xAngle = (e.clientY - rect.top) / rect.height * 5 - 5/2;

    blogCard.style.transform = `rotateY(${yAngle}deg) rotateX(${xAngle}deg)`;
});

blogCard.addEventListener('mouseleave', () => {
    blogCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
});