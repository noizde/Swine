function KeeperGame(input, container, assets){

  var update = function(event){
    var keeper = container["keeper"];
    keeper.x = input.mouse.x;
    keeper.y = input.mouse.y;
  };

  return {
    initialize: function(){
      var keeper = assets.getBitmap("menuButton");
      
      container.addChild(keeper);
      container["keeper"] = keeper;
      
      container.addEventListener("tick", update);
    }
  };
}