document.addEventListener('DOMContentLoaded', () => {
    console.log('지금 바로 윤회! 사이트가 로드되었습니다.');
    
    const infoCards = document.querySelectorAll('.info-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    infoCards.forEach(card => {
        observer.observe(card);
    });
});
