class Block {
    constructor(x,y,width,height,color){
    
        var options = {
            'restitution' : 0.5,
            //'friction' : 0.3,
            'density' : 0.0004
    
    
        }
    
    
    this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height =height;
     this.x = x;
     this.y = y;
     this.color = color;
     this.Visibility = 255;
     //this.image = loadImage("sprites/image/wood1.png")
    
    World.add(world,this.body);
    }
    
    display()
    {
        //console.log(this.body.speed)
        var pos = this.body.position;
        var angle = this.body.angle;
        
    if(this.body.speed<3)
    {
        //this.body.display();
        push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(2)
    stroke("black");
    fill(this.color);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    
    }
     
    else
    {
      World.remove(world,this.body);

      push();
      this.Visibility = this.Visibility-5;
      tint(255,this.Visibility);
      pop();
    }
    }
    
    
    };
    