var g = function( sketch ) {
    
    var api; //variable for api data collection
    var i; //variable for parsing the data

sketch.setup = function() {
     sketch.createCanvas(windowWidth, windowHeight);
	 sketch.pic = loadImage("gargen.jpg"); //loads background image
	 sketch.background(pic); //assigns image as background
	 sketch.textAlign(CENTER); 
};

sketch.gotData = function(api){
   var i  = int(random(0,api.length)); //gets random object from api
   var gardenname= api[i].garden_name; //displays text in address field for address
   var addy= api[i].address; //displays text in address field for address
	  sketch.textSize(20); 
	  sketch.textFont('Helvetica');
	  sketch.stroke(6);
	  sketch.fill('#fff60a');
	 //rotate(PI/2); rotate text to fit orientation of sign
	  sketch.text( gardenname + '\n' + addy , 200, 400);
};

sketch.draw = function(){
	  sketch.textSize(40); 
	  sketch.textFont('Helvetica');
	  sketch.stroke(14);
	  sketch.fill('#fff60a');
	  sketch.text('Community Garden Address Generator', 520, 120); //title
	  sketch.textSize(15); 
	  sketch.textFont('Helvetica');
	  sketch.stroke(4);
	  sketch.fill('#fff60a');
	  sketch.text('Press the mouse to recieve a new address', 520, 140); //title
};

sketch.mouseClicked = function(){
	 image(pic,0,0);
   loadJSON("https://data.cityofnewyork.us/resource/yes4-7zbb.json",gotData); //text line that displays the data 
};

var myp5 = new p5(g);