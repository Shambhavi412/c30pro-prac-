class Polygon{
    constructor(x,y,r)
    {
    
        var options = {
            restitution : 0.5
        }
        this.x = x;
        this.y = y;
        this.r = r;
    
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("polygon.png")
        World.add(world,this.body)
    //50,200,20
    
    
    
    
    
    }
    
    display()
    {
        imageMode(CENTER);
        var position = this.body.position 
        
        stroke("white")
    image(this.image,position.x,position.y,50,50)
    
    
    }
    
    
    
    }