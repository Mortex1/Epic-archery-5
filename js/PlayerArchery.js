class PlayerArchery {
    constructor(x, y, width, height,angle) {
      //var options = {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        //isStatic: true
      }
  
      //this.body = Bodies.rectangle(x, y, width, height, options);
      //this.body = rectangle(x, y, width, height, options);
      //this.body = Bodies.rect(x, y, width, height, options);
      //this.body = rect(x, y, width, height, options);
  
      //this.width = width;
      //this.height = height;
      //this.image = loadImage("./assets/player.png");
  
     // World.add(world, this.body);
    
  
   
 display() {
     push();   
     translate(this.x, this.y);
     rotate(this.angle);
     rec(-10,-20,this.width, this.height);
     pop();
     arc(this)
     noFill();
    }
}