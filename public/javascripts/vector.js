class Vector {
    constructor(x, y, windowWidth, windowHeight, modulus, context, color){
        this.x = x + (windowWidth / modulus) / 2;
        this.y = y + (windowHeight / modulus) / 2;
        this.context = context;
        this.neighbors = {};
        this.setColor(color)
        this.draw()
    }
 
    setColor(color){
        this.context.fillStyle = color;
        this.draw();
    }
    draw(){
        this.context.moveTo(this.x, this.y)
        this.context.beginPath();
        this.context.arc(this.x,this.y,5,0,2*Math.PI);
        this.context.fill();
        this.context.closePath();
    }
}