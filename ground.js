class Ground{
    constructor(x,y,width,height){
        var options2 ={
            isStatic : true
        };


        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height, options2);


       World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        stroke(255);
        fill(127);
        rect(0,0, this.width, this.height);
        
        pop();
    }
}