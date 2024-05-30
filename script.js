document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('switch');
    const body = document.body;
    const headSection = document.querySelector('.head-setion');
    const topContainers = document.querySelectorAll('.top-container,.top-medias, .insta-container, .youtube');
    const wrappers = document.querySelectorAll('.wrapper');
    const themeText = document.getElementById('theme-text');

    toggleSwitch.addEventListener('change', function() {
        if (toggleSwitch.checked) {
            body.classList.add('light-theme');
            headSection.classList.add('light-theme');
            topContainers.forEach(container => container.classList.add('light-theme'));
            wrappers.forEach(wrapper => wrapper.classList.add('light-theme'));
            themeText.textContent = 'Night Mode';
        } else {
            body.classList.remove('light-theme');
            headSection.classList.remove('light-theme');
            topContainers.forEach(container => container.classList.remove('light-theme'));
            wrappers.forEach(wrapper => wrapper.classList.remove('light-theme'));
            themeText.textContent = 'Light Mode';
        }


    });
});