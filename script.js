function toggleMode() {
    const htmlElement = document.documentElement;

   /* if (htmlElement.classList.contains('light')) {
        htmlElement.classList.remove('light');
    } else {
        htmlElement.classList.add('light');
    } */

    htmlElement.classList.toggle('light');

    const img = document.querySelector('#profile img');

    if (htmlElement.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png');
    } else {
        img.setAttribute('src', './assets/avatar.png');
    }

}
