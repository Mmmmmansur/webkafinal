document.addEventListener('DOMContentLoaded', () => {
    const servicesItems = document.querySelectorAll('.services__item');
    const textItems = document.querySelectorAll('.text-item');
    const contactsItems = document.querySelectorAll('.contacts__item');

    const animateItems = (items, delay) => {
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animation-class');
            }, index * delay);
        });
    };

    const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        servicesItems.forEach(item => {
            const itemOffset = item.offsetTop;
            if (scrollY + windowHeight > itemOffset) {
                item.classList.add('animation-class');
            }
        });

        textItems.forEach(item => {
            const itemOffset = item.offsetTop;
            if (scrollY + windowHeight > itemOffset) {
                item.classList.add('animation-class');
            }
        });

        contactsItems.forEach(item => {
            const itemOffset = item.offsetTop;
            if (scrollY + windowHeight > itemOffset) {
                item.classList.add('animation-class');
            }
        });
    };

    // Анимация при загрузке страницы
    animateItems(servicesItems, 300);

    // Анимация при скролле
    window.addEventListener('scroll', () => {
        handleScroll();
    });

    // Вызов анимации при загрузке страницы
    handleScroll();
});
