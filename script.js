document.addEventListener("DOMContentLoaded", function () {
    const navigation = document.querySelector('.navigation');
    const sections = document.querySelectorAll('main section');
    const menuItems = document.querySelectorAll('.nav-menu li');

    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            navigation.classList.add('hidden');
        } else {
            // Scrolling up
            navigation.classList.remove('hidden');
        }

        // Highlight the active section in the navigation menu
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - navigation.offsetHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (currentScrollTop >= sectionTop && currentScrollTop < sectionBottom) {
                menuItems[index].classList.add('active');
            } else {
                menuItems[index].classList.remove('active');
            }
        });

        lastScrollTop = currentScrollTop;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var lastKnownScrollPosition = 0;
    var ticking = false;
    var footer = document.getElementById('footer');

    function handleScroll() {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function () {
                showHideFooter();
                ticking = false;
            });

            ticking = true;
        }
    }

    function showHideFooter() {
        if (lastKnownScrollPosition >= document.body.scrollHeight - window.innerHeight) {
            footer.classList.remove('hidden');
        } else {
            footer.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', handleScroll);
});
