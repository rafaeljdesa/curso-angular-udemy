var message = "Mensagem";
console.log(message);
var episode = 4;
console.log("Current episode " + episode);
episode++;
console.log("Next episode " + episode);
var favoriteDroid;
favoriteDroid = "BB-8";
console.log(favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 12;
console.log("Is " + distance + " parsecs enousgh to beat Millennium Falcon ? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5, 1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));
