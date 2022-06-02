const catalog_container = $('.portfolio-catalog-main');
const header_img = $('.portfolio-catalog-img img');

const catalog_project_header = $('.portfolio-catalog-project-header h1');
const catalog_project_description = $('.portfolio-catalog-project-description p');

const encourage_fill = $('.encourage-bar-fill');
const discourage_fill = $('.discourage-bar-fill');

const catalog_content = {
    project1: {
        title: "Exhibit A",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi earum, doloremque consequatur, veniam blanditiis magnam delectus ipsa repudiandae eaque labore? Similique, labore nostrum ullam error eum sint, modi atque alias veritatis officia accusantium vitae. Consequuntur voluptatibus rem quasi doloribus esse. Nam nobis quia facere, nisi a tempora quibusdam iste.",
        encourageFill: '8rem',
        discourageFill: '4rem'
    },
    project2: {
        title: "Exhibit B",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ducimus saepe expedita nisi aspernatur laborum corporis, quae nemo cum optio tenetur laudantium ab porro. Soluta?",
        encourageFill: '2rem',
        discourageFill: '8rem'
    },
    project3: {
        title: "Exhibit C",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repudiandae perferendis assumenda commodi aut unde voluptatem, repellat magnam? Magnam at doloribus natus optio esse a pariatur repudiandae laborum qui veritatis sint, dolorem numquam praesentium fugiat, mollitia vero tenetur quo aliquam officiis? Iure optio neque iusto. Quo mollitia voluptatem ut qui ipsam ad dignissimos quisquam laboriosam deleniti dolores, autem dolor veritatis, consequatur ratione? Itaque maiores accusamus nisi alias aliquam, libero ea qui rerum reiciendis voluptate.",
        encourageFill: '10rem',
        discourageFill: '10rem'
    },
    project4: {
        title: "Exhibit D",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ducimus saepe expedita nisi aspernatur laborum corporis, quae nemo cum optio tenetur laudantium ab porro. Soluta?",
        encourageFill: '10rem',
        discourageFill: '2rem'
    },
    project5: {
        title: "Exhibit E",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repudiandae perferendis assumenda commodi aut unde voluptatem, repellat magnam? Magnam at doloribus natus optio esse a pariatur repudiandae laborum qui veritatis sint, dolorem numquam praesentium fugiat, mollitia vero tenetur quo aliquam officiis? Iure optio neque iusto. Quo mollitia voluptatem ut qui ipsam ad dignissimos quisquam laboriosam deleniti dolores, autem dolor veritatis, consequatur ratione? Itaque maiores accusamus nisi alias aliquam, libero ea qui rerum reiciendis voluptate.",
        encourageFill: '7rem',
        discourageFill: '4rem'
    },
    project6: {
        title: "Exhibit F",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi earum, doloremque consequatur, veniam blanditiis magnam delectus ipsa repudiandae eaque labore? Similique, labore nostrum ullam error eum sint, modi atque alias veritatis officia accusantium vitae. Consequuntur voluptatibus rem quasi doloribus esse. Nam nobis quia facere, nisi a tempora quibusdam iste.",
        encourageFill: '3rem',
        discourageFill: '9rem'
    },
    project7: {
        title: "Exhibit G",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ducimus saepe expedita nisi aspernatur laborum corporis, quae nemo cum optio tenetur laudantium ab porro. Soluta?",
        encourageFill: '0rem',
        discourageFill: '2rem'
    },
    project8: {
        title: "Exhibit H",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ducimus saepe expedita nisi aspernatur laborum corporis, quae nemo cum optio tenetur laudantium ab porro. Soluta?",
        encourageFill: '1rem',
        discourageFill: '6rem'
    },
    project9: {
        title: "Exhibit I",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ducimus saepe expedita nisi aspernatur laborum corporis, quae nemo cum optio tenetur laudantium ab porro. Soluta?",
        encourageFill: '9rem',
        discourageFill: '3rem'
    },
    project10: {
        title: "Exhibit J",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repudiandae perferendis assumenda commodi aut unde voluptatem, repellat magnam? Magnam at doloribus natus optio esse a pariatur repudiandae laborum qui veritatis sint, dolorem numquam praesentium fugiat, mollitia vero tenetur quo aliquam officiis? Iure optio neque iusto. Quo mollitia voluptatem ut qui ipsam ad dignissimos quisquam laboriosam deleniti dolores, autem dolor veritatis, consequatur ratione? Itaque maiores accusamus nisi alias aliquam, libero ea qui rerum reiciendis voluptate.",
        encourageFill: '2rem',
        discourageFill: '5rem'
    },
    project11: {
        title: "Exhibit K",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi earum, doloremque consequatur, veniam blanditiis magnam delectus ipsa repudiandae eaque labore? Similique, labore nostrum ullam error eum sint, modi atque alias veritatis officia accusantium vitae. Consequuntur voluptatibus rem quasi doloribus esse. Nam nobis quia facere, nisi a tempora quibusdam iste.",
        encourageFill: '4rem',
        discourageFill: '4rem'
    },
    project12: {
        title: "Exhibit L",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repudiandae perferendis assumenda commodi aut unde voluptatem, repellat magnam? Magnam at doloribus natus optio esse a pariatur repudiandae laborum qui veritatis sint, dolorem numquam praesentium fugiat, mollitia vero tenetur quo aliquam officiis? Iure optio neque iusto. Quo mollitia voluptatem ut qui ipsam ad dignissimos quisquam laboriosam deleniti dolores, autem dolor veritatis, consequatur ratione? Itaque maiores accusamus nisi alias aliquam, libero ea qui rerum reiciendis voluptate.",
        encourageFill: '7rem',
        discourageFill: '9rem'
    },
    project13: {
        title: "Exhibit M",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ducimus saepe expedita nisi aspernatur laborum corporis, quae nemo cum optio tenetur laudantium ab porro. Soluta?",
        encourageFill: '1rem',
        discourageFill: '2rem'
    },
    project14: {
        title: "Exhibit N",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ducimus saepe expedita nisi aspernatur laborum corporis, quae nemo cum optio tenetur laudantium ab porro. Soluta?",
        encourageFill: '5rem',
        discourageFill: '4rem'
    },
    project15: {
        title: "Exhibit O",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ducimus saepe expedita nisi aspernatur laborum corporis, quae nemo cum optio tenetur laudantium ab porro. Soluta?",
        encourageFill: '9rem',
        discourageFill: '8rem'
    },
    project16: {
        title: "Exhibit P",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi earum, doloremque consequatur, veniam blanditiis magnam delectus ipsa repudiandae eaque labore? Similique, labore nostrum ullam error eum sint, modi atque alias veritatis officia accusantium vitae. Consequuntur voluptatibus rem quasi doloribus esse. Nam nobis quia facere, nisi a tempora quibusdam iste.",
        encourageFill: '9rem',
        discourageFill: '9rem'
    },
    project17: {
        title: "Exhibit Q",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repudiandae perferendis assumenda commodi aut unde voluptatem, repellat magnam? Magnam at doloribus natus optio esse a pariatur repudiandae laborum qui veritatis sint, dolorem numquam praesentium fugiat, mollitia vero tenetur quo aliquam officiis? Iure optio neque iusto. Quo mollitia voluptatem ut qui ipsam ad dignissimos quisquam laboriosam deleniti dolores, autem dolor veritatis, consequatur ratione? Itaque maiores accusamus nisi alias aliquam, libero ea qui rerum reiciendis voluptate.",
        encourageFill: '10rem',
        discourageFill: '10rem'
    },
    project18: {
        title: "Exhibit R",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ducimus saepe expedita nisi aspernatur laborum corporis, quae nemo cum optio tenetur laudantium ab porro. Soluta?",
        encourageFill: '10rem',
        discourageFill: '4rem'
    },
    project19: {
        title: "Exhibit S",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ducimus saepe expedita nisi aspernatur laborum corporis, quae nemo cum optio tenetur laudantium ab porro. Soluta?",
        encourageFill: '3rem',
        discourageFill: '8rem'
    },
    project20: {
        title: "Exhibit T",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repudiandae perferendis assumenda commodi aut unde voluptatem, repellat magnam? Magnam at doloribus natus optio esse a pariatur repudiandae laborum qui veritatis sint, dolorem numquam praesentium fugiat, mollitia vero tenetur quo aliquam officiis? Iure optio neque iusto. Quo mollitia voluptatem ut qui ipsam ad dignissimos quisquam laboriosam deleniti dolores, autem dolor veritatis, consequatur ratione? Itaque maiores accusamus nisi alias aliquam, libero ea qui rerum reiciendis voluptate.",
        encourageFill: '5rem',
        discourageFill: '6rem'
    }
};

var previousProject = $('#catalog-img-1');
previousProject.css({"outline": '5px solid var(--catalog-bar-teal)', "outline-offset": '-4px'});
catalog_container.on('click', (e) => {
    for (let i = 1; i < 21; i++) {
        if ($(e.target).attr('id') == `catalog-img-${i}`) {
            let currentProject = `project${i}`;
            catalog_project_header.html(catalog_content[currentProject].title);
            catalog_project_description.html(catalog_content[currentProject].description);
            encourage_fill.css({height: ""});
            encourage_fill.css({height: catalog_content[currentProject].encourageFill});
            discourage_fill.css({height: ""});
            discourage_fill.css({height: catalog_content[currentProject].discourageFill});
            previousProject.css({"outline": "", "outline-offset": ""});
            if (parseInt(catalog_content[currentProject].encourageFill) == parseInt(catalog_content[currentProject].discourageFill)) {
                $(`#catalog-img-${i}`).css({"outline": '5px solid var(--green)', "outline-offset": '-4px'});
            } else if (parseInt(catalog_content[currentProject].encourageFill) > parseInt(catalog_content[currentProject].discourageFill)) {
                $(`#catalog-img-${i}`).css({"outline": '5px solid var(--catalog-bar-teal)', "outline-offset": '-4px'});
            } else {
                $(`#catalog-img-${i}`).css({"outline": '5px solid var(--catalog-bar-red)', "outline-offset": '-4px'});
            }
            $(window).scrollTop($(m_landing_page).height());
            previousProject = $(`#catalog-img-${i}`);
            break;
        }
    }
    header_img.attr('src', $(e.target).attr('src'));
});