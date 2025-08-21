 <script>
        // Add some extra interactivity
        document.querySelectorAll('.feature').forEach((feature, index) => {
            feature.addEventListener('mouseenter', () => {
                // Add a slight delay to create a wave effect
                setTimeout(() => {
                    feature.style.transform = 'translateY(-15px) scale(1.05) rotateZ(2deg)';
                }, index * 50);
            });
            
            feature.addEventListener('mouseleave', () => {
                feature.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
            });
        });

        // Add click animation for result items
        document.querySelectorAll('.result-item').forEach(item => {
            item.addEventListener('click', () => {
                const number = item.querySelector('.result-number');
                number.style.animation = 'none';
                setTimeout(() => {
                    number.style.animation = 'numberPulse 2s ease-in-out infinite';
                }, 10);
            });
        });

        // Intersection Observer for scroll-triggered animations
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature, .result-item').forEach(el => {
            observer.observe(el);
        });
    </script>