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

function Assets(queue){
  return {
    getPath: function(assetPath){
      return "..\\Assets\\"+assetPath;
    },
    getBitmap: function(assetName){
      var b = new createjs.Bitmap(queue.getResult(assetName));
      b.x = 0;
      b.y = 0;
      return b;
    }
  }
}