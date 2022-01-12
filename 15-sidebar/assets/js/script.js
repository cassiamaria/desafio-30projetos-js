const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle);
    nav = document.getElementById(navbarId);

    if (headerToggle && navbarId) {
        toggleBtn.addEventListener('click', () => {
            //Add the show-menu class to the div tag with the nav-menu class
            nav.classList.toggle('show-menu');

            //Change the icon
            toggleBtn.classList.toggle('bx-x')
        });
    }
};
showMenu('header-toggle', 'navbar');

const linkColor = document.querySelectorAll('.nav-link')

function colorLink() {
    linkColor.forEach(color => color.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(color => color.addEventListener('click', colorLink))