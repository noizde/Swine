function Preloader(queue){
  
  var manifest = [
    {src:"../assets/harry menu.png", id:"menuBackground"},
    {src:"../assets/harry menu title.png", id:"menuButton"}
  ];

  return {
    initializeManifest: function(){
      queue.loadManifest(manifest);
    }
  }
}

function Effects(stage){
  return {
    mouseover: function(event) {
      var t = event.target;
      var newX = 1.02;
      var newY = 1.02;
      t.setTransform(t.x, t.y, newX, newY, 0, 0, 0, t.regX, t.regY);
      stage.update();
    },
    mousedown: function(event) {
      var t = event.target;
      var newX = 0.98;
      var newY = 0.98;
      t.setTransform(t.x, t.y, newX, newY, 0, 0, 0, t.regX, t.regY);
      stage.update();
    },
    mouseout: function(event) {
      var t = event.target;
      var newX = 1;
      var newY = 1;
      t.setTransform(t.x, t.y, newX, newY, 0, 0, 0, t.regX, t.regY);
      stage.update();
    }
  }
}