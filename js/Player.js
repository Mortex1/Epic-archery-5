class Player {
  constructor(x, y, width, height,angle) {
    var options = {
     // this.x = x;
      //this.y = y;
      //this.width = width;
      //this.height = height;
      //this.angle = angle;
      isStatic: true
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    //this.body = rectangle(x, y, width, height, options);
    //this.body = Bodies.rect(x, y, width, height, options);
    //this.body = rect(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);
  }

 
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
