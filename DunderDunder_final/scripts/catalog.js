const open_catalog = $('#open-catalog-btn');
const activate_catalog = $('.portfolio-catalog-container');
const close_catalog = $('#close-catalog-btn');


open_catalog.on('click', () => {
    activate_catalog.attr('id', 'activate-catalog');
    $(window).scrollTop($(m_landing_page).height());
    timer = setInterval(func, 5000);
});
close_catalog.on('click', () => {
    activate_catalog.attr('id', null);
    timer = clearInterval(timer);
});