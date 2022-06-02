var randomNumberGen = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const clearCache = (lbound, ubound) => {
    let lboundTile = $(`#catalog-img-${lbound}`);
    let uboundTile = $(`#catalog-img-${ubound}`);
    lboundTile.css("animation", "");
    uboundTile.css("animation", "");
}
var randomNumber10 = 0;
var randomNumber20 = 0;
const func = () => {
    if (randomNumber10 != 0 && randomNumber20 != 0) {
        clearCache(randomNumber10, randomNumber20);
    }
    randomNumber10 = randomNumberGen(1, 10);
    randomNumber20 = randomNumberGen(11, 20);
    let tile10 = $(`#catalog-img-${randomNumber10}`);
    let tile20 = $(`#catalog-img-${randomNumber20}`);
    tile10.css("animation", "1.5s rotateTile ease-in-out");
    tile20.css("animation", "1.5s rotateTile ease-in-out");
}

var timer = null;