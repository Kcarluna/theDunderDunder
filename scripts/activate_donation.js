const activate_donation = $('.activate-donation');
const activate_donation_child = $(activate_donation.children()[0]);
const donation_container = $('.donation-container');

var count = 0;
activate_donation.on('click', () => {
    if (count == 0) {
        activate_donation_child.css({transform: 'rotate(180deg)'});
        donation_container.attr('id', 'expose-donation');
        count++;
    } else {
        activate_donation_child.css({transform: 'rotate(0)'});
        donation_container.attr('id', '');
        count--;
    }
});