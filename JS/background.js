document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function(event) {
            // 클릭 시 기본 동작 막기 및 서브메뉴 표시/숨김 토글
            event.preventDefault();

            // 모든 서브메뉴를 숨기고 active 클래스를 제거합니다.
            dropdowns.forEach(function(d) {
                d.querySelector('.dropdown-content').style.display = 'none';
                d.querySelector('.dropbtn').classList.remove('active');
            });

            // 현재 클릭한 서브메뉴를 토글합니다.
            dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';

            // 현재 클릭한 버튼에 active 클래스를 토글합니다.
            if (dropdownContent.style.display === 'flex') {
                dropbtn.classList.add('active');
            } else {
                dropbtn.classList.remove('active');
            }
        });

        // 서브메뉴에서 마우스가 멀어졌을 때 서브메뉴를 숨기기 위해 이벤트 리스너 추가
        dropdownContent.addEventListener('mouseleave', function() {
            dropdownContent.style.display = 'none';
            dropbtn.classList.remove('active'); // 서브메뉴가 사라질 때 active 클래스 제거
        });

        // 페이지의 다른 곳을 클릭했을 때 서브메뉴를 숨기기 위해 이벤트 리스너를 추가합니다.
        document.addEventListener('click', function(event) {
            const isClickInsideDropdown = event.target.closest('.dropdown');
            if (!isClickInsideDropdown) {
                dropdowns.forEach(function(d) {
                    d.querySelector('.dropdown-content').style.display = 'none';
                    d.querySelector('.dropbtn').classList.remove('active');
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    let isScrolling = false;

    window.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        isScrolling = true;

        const direction = e.deltaY > 0 ? 1 : -1;
        const currentSectionIndex = [...sections].findIndex(section => {
            return section.getBoundingClientRect().top >= 0;
        });

        let nextSectionIndex = currentSectionIndex + direction;
        if (nextSectionIndex < 0) nextSectionIndex = 0;
        if (nextSectionIndex >= sections.length) nextSectionIndex = sections.length - 1;

        // 부드러운 스크롤 함수 호출
        smoothScrollToSection(sections[nextSectionIndex]);

        setTimeout(() => {
            isScrolling = false;
        }, 1500); // 타임아웃 조정 (1.5초)
    });

    // 부드러운 스크롤 함수
    function smoothScrollToSection(target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1500; // 스크롤 지속 시간 (1.5초)
        let start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
});

function scrollToSection(event, targetId) {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);

    // 일정 시간 후 목표 섹션으로 스크롤
    setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }, 100); // 0.5초 후에 스크롤 (필요에 따라 조정)
}