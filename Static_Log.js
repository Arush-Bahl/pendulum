class SL{
    constructor(x,y,width,hieght){
        
        var options = {
            isStatic : true
      }
    

        this.body = Bodies.rectangle(x,y,width,hieght,options);

            this.width = width;
            this.hieght = hieght;

            World.add(world,this.body);

    }

    display () {

        push();

        translate(this.body.position.x,this.body.position.y);

        angleMode(RADIANS)

        rotate(this.body.angle);

        rectMode(CENTER);

        fill("#9B870C");

     strokeWeight(6);

     stroke("#bB870C");

        rect(0,0,this.width,this.hieght);

        pop();

    }

}
