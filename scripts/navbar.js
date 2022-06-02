var animate_catalog = false;
const m_landing_page = $('.landing-page-container');
const nav = $('nav');

const detect_click = m_landing_page.on('click', (e) => {
    let target = $(e.target);
    if (target.attr('id') == 'open-nav-menu' || target.attr('class') == 'open-nav-path') {
        nav.addClass('active-menu');
    } else if (target.is('a') || target.attr('id') == 'close-nav-menu' 
                              || target.attr('id') == 'close-nav-path'
                              || nav.offset().left - e.pageX > 0
                              ) {
        nav.removeClass('active-menu');
    }
});

const m_portfolio_container = $('.main-portfolio-container');
const m_roadmap_container = $('.roadmap-container');
const m_about_me_container = $('.about-me-container');
const m_contact_me_container = $('.contact-me-container');
$(window).on('scroll', () => {
    let scrollPosY = $(this).scrollTop();
    if (scrollPosY == (m_landing_page.height() + m_portfolio_container.height()
        + m_roadmap_container.height() + m_about_me_container.height())) {
            document.title = "DunderDunder | Contact Me";
    } else if  (scrollPosY > (m_landing_page.height() + m_portfolio_container.height()
                + m_roadmap_container.height())) {
            document.title = "DunderDunder | About Me";
    } else if (scrollPosY > (m_landing_page.height() + m_portfolio_container.height())) {
            activate_catalog.attr('id', null);
            timer = clearInterval(timer);
            document.title = "DunderDunder | Roadmap"
    } else if (scrollPosY > m_landing_page.height()) {
            nav.removeClass('active-menu');
            document.title = "DunderDunder | Portfolio";
    } else if (scrollPosY < m_landing_page.height()) {
            document.title = "DunderDunder | Home";
    }
    if (scrollPosY == 0) {
        activate_catalog.attr('id', null);
        timer = clearInterval(timer);
    }
});