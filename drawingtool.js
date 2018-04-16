var s = function (sketch) {
    
sketch.setup = function() {
	sketch.background("#ffffe0");//makes bkgnd pastel yellow
	sketch.createCanvas(windowWidth, windowHeight);//set canvas to window height
	sketch.fill("#ff9233");//sets fill color orange for first shape drawn
	sketch.strokeWeight(2);
	sketch.stroke("#ff3c00");//sets stroke color red for first shape drawn	
 };

sketch.mouseDragged = function(){ //as the mouse is being dragged it draws
    sketch.beginShape();
    sketch.vertex(windowWidth/ 2, windowHeight/ 2);
    sketch.vertex(mouseX, mouseY);
    sketch.vertex(mouseX, windowWidth/ 4);
    sketch.endShape(CLOSE);
};


sketch.keyTyped = function (){
  if (key === "1"){
  	  sketch.fill("#00c3ff"); //blue
  	  sketch.stroke("#47ebaf"); //teal
      sketch.strokeWeight(5);}   

  if (key === "2"){
  	  sketch.fill("#ffccff"); //pink
  	  sketch.stroke("#990099"); //purple
      sketch.strokeWeight(3);}       
      	
  if (key === "3"){
  	  sketch.fill("#113c8b"); //blue
  	  sketch.stroke("#ffffff"); //white
      sketch.strokeWeight(5);}      
	
  if (key === "4"){
  	  sketch.fill("#f5d043"); //yellow
  	  sketch.stroke("#313300"); //muddy green
      sketch.strokeWeight(3);}
     
  if (key === "5"){
    	sketch.noFill();//no fill
    	sketch.stroke("#00ff26");//bright green
        sketch.strokeWeight(7);}
  
	if (key === "6"){  
		sketch.fill(random(255), random(255), random(255), random(255));
		sketch.stroke(random(255), random(255), random(255), random(255));}		
			
  if (key == '0'){ //to clear the canvas
  		sketch.clear(); };
  };
};

var myp5 = new p5(s);