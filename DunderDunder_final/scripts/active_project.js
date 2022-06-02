const project_1 = $('#previous-featured-project-1-img');
const activate_project_1 = $('.previous-featured-project-1');
activate_project_1.attr('id', 'activate-project');

const project_2 = $('#previous-featured-project-2-img');
const activate_project_2 = $('.previous-featured-project-2');

const project_3 = $('#previous-featured-project-3-img');
const activate_project_3 = $('.previous-featured-project-3');

project_1.add(project_2).add(project_3).on('click', (e) => {
    for (let i = 1; i < 4; i++) {
        $(`.previous-featured-project-${i}`).attr('id', null);
    }
    const target = $(e.target);
    if (target.is(project_1)) {
        activate_project_1.attr('id', 'activate-project');
    } else if (target.is(project_2)) {
        activate_project_2.attr('id', 'activate-project');
    } else {
        activate_project_3.attr('id', 'activate-project');
    }
});