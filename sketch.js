function setup() {
    createCanvas(800, 800);
      background("blue");
    
  }
  
  function draw() {
    
    stroke("purple");
    fill("pink");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 10,10);
    }
  }