//bigger
function effectMouseover(event) {
    var t = event.target;
    var newX = 1.02;
    var newY = 1.02;
    t.setTransform(t.x, t.y, newX, newY, 0, 0, 0, t.regX, t.regY);
    stage.update();
}

function effectMousedown(event) {
    var t = event.target;
    var newX = 0.98;
    var newY = 0.98;
    t.setTransform(t.x, t.y, newX, newY, 0, 0, 0, t.regX, t.regY);
    stage.update();
}

function effectMouseout(event) {
    var t = event.target;
    var newX = 1;
    var newY = 1;
    t.setTransform(t.x, t.y, newX, newY, 0, 0, 0, t.regX, t.regY);
    stage.update();
}