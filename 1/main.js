window.onload = function(){
  var currentContainer;
  var canvas = document.getElementById('canvas');
  var stage = new createjs.Stage(canvas);
  var effects = Effects(stage);

  stage.enableMouseOver(30);

  createjs.Ticker.addEventListener("tick", stage);

  function changeSceneByName(name){
    changeScene(scenes[name]);
  }

  function changeScene(container){
    stage.removeChild(currentContainer);
    stage.addChild(container);
    currentContainer = container;
    stage.update();
  }

  function getAssetPath(assetPath){
    return "..\\Assets\\"+assetPath;
  }

  function getBitmapAsset(assetName){
    var b = new createjs.Bitmap(queue.getResult(assetName));
    b.x = 0;
    b.y = 0;
    return b;
  }

  function makeScene(type){

    var container = new createjs.Container();
          
    switch(type){
      case "menu":
        
        var background = getBitmapAsset("menuBackground");
        container.addChild(background);
        
        var mcButton = new createjs.MovieClip(null, 0, true, {out:0});
        var button = getBitmapAsset("menuButton");
            
        mcButton.timeline.addTween(
          createjs.Tween.get(button, {loop:true})
            .to({x:628, y:0}).to({y:10}, 10).to({y:0},10));
        mcButton.gotoAndPlay("out");
        
        container.addChild(mcButton);
        
        button.addEventListener("click", (function(){
          changeSceneByName("play");
        }));

        var helpText = new createjs.Text("HALP PLZ", "20px Comic Sans", "rgb(0,0,0)");
        container.addChild(helpText);
        helpText.x = 750;
        helpText.y = 400;
        helpText.addEventListener("click", (function(){
          changeSceneByName("help");
        }));
        
        button.addEventListener("mouseover", effects.mouseover);
        button.addEventListener("mousedown", effects.mousedown);
        button.addEventListener("mouseout", effects.mouseout);
        
        break;
      case "help":
        //help
        
        var helpText = new createjs.Text("GO BAAAAACK", "20px Comic Sans", "rgb(0,0,0)");
        container.addChild(helpText);
        helpText.x = 100;
        helpText.y = 100;
        helpText.addEventListener("click", (function(){
          changeSceneByName("menu");
        }));
        
        break;
      case "play":
        var placeholderText = new createjs.Text("pretend you are having fun", "20px Comic Sans", "rgb(0,0,0)");
        container.addChild(placeholderText);
        placeholderText.x = 100;
        placeholderText.y = 100;
        placeholderText.addEventListener("click", (function(){
          changeSceneByName("menu");
        }));
        break;
      
    }
    
    return container;
  }

  var scenes;

  function handleComplete(event){
    scenes = {
      menu: makeScene("menu"),
      help: makeScene("help"),
      play: makeScene("play")
    };
    changeSceneByName("menu");
  }


  //preloading 

  var queue = new createjs.LoadQueue(false);
  
  var preloader = Preloader(queue);
  preloader.initializeManifest();
  queue.on("complete", handleComplete, this);

}