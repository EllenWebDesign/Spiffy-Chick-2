function setup() {
  createCanvas(400, 400);
}

let hatTop=0;


function draw() {
  background(170, 212, 242);
  
  noStroke();
  
    //ground
  fill(137, 176, 100);
  rect(0,300,400,100);
  
  //body
  fill(245, 241, 118);
  ellipse(280,260,70,70);
  ellipse(210,310,150,90);
 
  //legs
  fill(245, 241, 118);
  rect(165,340,15,50,5);
  rect(200,340,15,50,5);
  
  //eyes
  fill(15,15,15);
  ellipse(290,250,10);
  
  //mouth
  fill(232,109,109);
  ellipse(312,275,20);
  
  //wing
  fill(242, 217, 53);
  ellipse(210,310,65,30);
  
  //sun
  fill(255, 230, 89);
  ellipse(366,40,110);
  
  //hat
  fill(123, 31, 204);
  rect(250,hatTop +225,60,7);
  rect(261,hatTop+175,40,50);
  
 hatTop = hatTop -1;
  console.log(hatTop);

  if(hatTop == -200)
    {
      hatTop = 0
    }
    
    
  strokeWeight(10)
  stroke(245, 241, 118)
  //tail
  line(100,300,150,320);
  
  
}
