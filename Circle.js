
class Circle {
    constructor(x, y, width) {

        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;
     
        this.width = width;

        this.body = Bodies.circle(x, y, width, options);
        World.add(world, this.body);

    }

    display() {

        ellipseMode(RADIUS);

        fill("white");

        // console.log("hello", this.body.position)

        ellipse(this.x, this.y, this.width);

    }

}
