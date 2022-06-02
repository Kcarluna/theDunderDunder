var piano = $('.key');
piano.on('pointerover', (e) => {
    $(e.target).children()[0].currentTime = 0;
    $(e.target).children()[0].play();
});