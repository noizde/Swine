//load multiple files at once

var queue = new createjs.LoadQueue(false);
queue.on("complete", handleComplete, this);

manifest = [
  {src:"../assets/harry menu.png", id:"menuBackground"},
  {src:"../assets/harry menu title.png", id:"menuButton"}
];

queue.loadManifest(manifest);