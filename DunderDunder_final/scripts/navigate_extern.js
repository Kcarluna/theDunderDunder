const main_links_container = $('.social-links-container');

main_links_container.on('click', (e) => {
    let target = $(e.target);
    if (target.attr('class') == 'link instagram-link' || target.attr('id') == 'instagram-path') {
        window.open('https://www.instagram.com');
    } else if (target.attr('class') == 'link youtube-link' || target.attr('id') == 'youtube-path') {
        window.open('https://www.youtube.com');
    } else {
        window.open('https://twitter.com');
    }
});

const catalog_links_container = $('.portfolio-catalog-social-link');

catalog_links_container.on('click', (e) => {
    let target = $(e.currentTarget);
    if (target.attr('class') == 'link portfolio-catalog-social-link catalog-youtube-link') {
        window.open('https://www.youtube.com');
    } else {
        window.open('https://www.instagram.com');
    }
});

const contact_links_container = $('.contact-me-link');

contact_links_container.on('click', (e) => {
    let target = $(e.currentTarget);
    if (target.attr('class') == 'contact-me-link contact-me-twitter') {
        window.open('https://twitter.com');
    } else if (target.attr('class') == 'contact-me-link contact-me-instagram') {
        window.open('https://www.instagram.com');
    } else {
        window.open('https://www.youtube.com');
    }
});