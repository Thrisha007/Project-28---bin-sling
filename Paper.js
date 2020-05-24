class Paper{
    constructor(x,y,radius){

      var options = {
          isStatic:false,
          restituion:0.3,
          friction:0.5,
          density:5
      }

      this.body = Matter.Bodies.circle(x,y,radius/2,options);
      this.radius = radius;
      //this.width = width;
      //this.height = height;

      this.image = loadImage("paper.png");

      World.add(world,this.body);
      console.log(this.body.position);
    }

    display(){

        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        fill("white");
        image(this.image,0,0,this.radius,this.radius);
        pop();           
}
}
