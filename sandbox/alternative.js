//load multiple files at once
function initializeManifest() {

  manifest = [
    {src:"../assets/harry menu.png", id:"menuBackground"},
    {src:"../assets/harry menu title.png", id:"menuButton"}
  ];

  queue.loadManifest(manifest);
}