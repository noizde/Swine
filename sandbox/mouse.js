//bigger
function effectMouseover(event) {
    var t = event.target;
    var newX = t.scaleX + 1;
    var newY = t.scaleY + 1;
    t.setTransform(t.x, t.y, newX, newY, 0, 0, 0, t.regX, t.regY);
    stage.update();
}