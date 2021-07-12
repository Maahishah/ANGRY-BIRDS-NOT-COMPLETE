class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.path =[]
  }


  display() {

    if(this.body.velocity.x>10){
      var pos = [this.body.position.x,this.body.position.y];
      this.path.push(pos);
    }
      for(var a=0;a< this.path.length; a=a+1){
     image(this.image2,this.path[a][0], this.path[a][1]);
      }

    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
