const pages = document.querySelectorAll('.presentation__scrollbar-page');

[...pages].forEach(page => {
    page.addEventListener('click', event => {
        const i = Number.parseInt(event.target.textContent) - 1;
        // remove activeness
        [...pages].forEach(p => p.classList.remove('presentation__scrollbar-page--active'));

        // add activeness to a clicked element
        event.target.classList.add('presentation__scrollbar-page--active');
    });
});
